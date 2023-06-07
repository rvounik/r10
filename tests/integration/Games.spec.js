import { mount } from '@vue/test-utils';
import Games from './../../src/views/Games/Games.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { slidesMock } from './slides.mock';

jest.mock('./../../src/stores/games', () => {
    const { gamesMock } = require('./games.mock');

    return {
        useGamesStore: jest.fn(() => ({
            ...gamesMock,
            fetchGames: jest.fn(),
        })),
    };
});

jest.mock('swiper/vue', () => ({
    Swiper: {
        template: `
      <div data-testid="Swiper-testId">
        <slot>
            <SwiperSlide
                :item="{
                  id: 'item1',
                  name: 'Item 1',
                  description: 'Desc 1',
                  image: 'some_image_1.png',
                  tags: ['tag1', 'tag2'],
                  url: '../some-url',
                  year: '2001'
                }" key="1" class="gallery_item"
            />
            <SwiperSlide
                :item="{
                  id: 'item2',
                  name: 'Item 2',
                  description: 'Desc 2',
                  image: 'some_image_2.png',
                  tags: ['tag1', 'tag2'],
                  url: '../some-url',
                  year: '2002'
                }" key="1" class="gallery_item"
            />
        </slot>
      </div>
    `,
    },
    SwiperSlide: {
        template: `
      <div data-testid="SwiperSlide-testId">
        <slot></slot>
      </div>
    `,
    },
}));

describe('Games', () => {
    it('allows navigation between slides', async () => {
        const setSomeStatePropMock = jest.fn(); // Mock the custom function
        const nextSlideMock = jest.fn();

        const wrapper = mount(Games, {
            global: {
                components: {
                    Swiper,
                    SwiperSlide,
                },
            },
            stubs: {
                Swiper: {
                    methods: {
                        setSomeStateProp: setSomeStatePropMock,
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
        componentInstance.setSomeStateProp = setSomeStatePropMock;
        componentInstance.nextSlide = nextSlideMock;

        let loader;

        // Ensure there is a loader
        loader = wrapper.find('.loader');
        expect(loader.exists()).toBe(true);

        // Simulate the completion of loading
        wrapper.vm.loading = false;
        await wrapper.vm.$nextTick();

        // Ensure there is no loader
        loader = wrapper.find('.loader');
        expect(loader.exists()).toBe(false);

        // Ensure there is a Swiper instance
        const swiperComponentWrapper = wrapper.findComponent(Swiper);
        expect(swiperComponentWrapper.exists()).toBe(true);

        // Ensure there is navigation
        const nextButton = wrapper.find('.button.right .next');
        expect(nextButton.exists()).toBe(true);

        // Assert the number of slides in the mock
        const slides = slidesMock;
        expect(slides.length).toBe(2);

        // Assert the number of rendered slides
        const renderedSlides = swiperComponentWrapper.findAllComponents(SwiperSlide);
        expect(renderedSlides.length).toBe(slides.length);

        // Ensure the next slide button is present
        const nextSlideButton = wrapper.find('.testRight');
        expect(nextSlideButton.exists()).toBe(true);

        // navigate to the next slide
        await nextSlideButton.trigger('click');
        await wrapper.vm.$nextTick();

        // ensure the function to go to the next slide is called once
        expect(nextSlideMock).toHaveBeenCalledTimes(1);
    });
});
