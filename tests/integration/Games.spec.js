import { mount } from '@vue/test-utils';
import Games from './../../src/views/Games/Games.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { slidesMock } from './slides.mock';

// mock the store and provide mock data and method
jest.mock('./../../src/stores/games', () => {
    const { gamesMock } = require('./games.mock');

    return {
        useGamesStore: jest.fn(() => ({
            ...gamesMock,
            fetchGames: jest.fn(),
        })),
    };
});

// mock the Swiper instance and provide mock content for the slides
jest.mock('swiper/vue', () => {
    const { slidesMock } = require('./slides.mock');

    return {
        Swiper: {
            template: `
                <div data-testid="Swiper-testId">
                  <slot>
                    <template v-for="slide in slides" :key="slide.id">
                      <SwiperSlide :item="slide" class="gallery_item" />
                    </template>
                  </slot>
                </div>
            `,
            computed: {
                slides() {
                    return slidesMock;
                },
            },
        },
        SwiperSlide: {
            template: `
        <div data-testid="SwiperSlide-testId">
          <slot></slot>
        </div>
      `,
        },
    };
});

describe('Games', () => {
    it('allows navigation between slides', async () => {
        const nextSlideMock = jest.fn();

        const wrapper = mount(Games, { // eslint-disable-line
            global: {
                components: {
                    Swiper,
                    SwiperSlide,
                },
            },
            stubs: {
                Swiper: {
                    methods: {
                        nextSlide: nextSlideMock
                    },
                },
            },
            data() {
                return {
                    swiper: 'my-mock-class'
                };
            }
        });

        // Access the component instance after the click event
        const componentInstance = wrapper.vm;

        // Assign the mock function to the component method
        componentInstance.nextSlide = nextSlideMock;

        let loaderElement;

        // Ensure there is a loader
        loaderElement = wrapper.find('.loader');
        expect(loaderElement.exists()).toBe(true);

        // Simulate the completion of loading
        wrapper.vm.loading = false;
        await wrapper.vm.$nextTick();

        // Ensure there is no loader now that loading is completed
        loaderElement = wrapper.find('.loader');
        expect(loaderElement.exists()).toBe(false);

        // Ensure there is a Swiper instance
        const swiperComponentWrapper = wrapper.findComponent(Swiper);
        expect(swiperComponentWrapper.exists()).toBe(true);

        // Ensure there is navigation
        const nextButton = wrapper.find('.button.right .next');
        expect(nextButton.exists()).toBe(true);

        // Assert the number of rendered slides
        const renderedSlides = swiperComponentWrapper.findAllComponents(SwiperSlide);
        expect(renderedSlides.length).toBe(slidesMock.length);

        // Ensure the next slide button is present
        const nextSlideButton = wrapper.find('.testRight');
        expect(nextSlideButton.exists()).toBe(true);

        // Navigate to the next slide
        await nextSlideButton.trigger('click');
        await wrapper.vm.$nextTick();

        // Ensure the function to go to the next slide is called once
        expect(nextSlideMock).toHaveBeenCalledTimes(1);
    });
});
