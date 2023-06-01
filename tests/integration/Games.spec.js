import { mount } from '@vue/test-utils';
import Games from './../../src/views/Games/Games.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

jest.mock('./../../src/stores/games', () => {
    const { gamesMock } = require('./games.mock');

    return {
        useGamesStore: jest.fn(() => ({
            ...gamesMock,
            fetchGames: jest.fn(),
        })),
    };
});

describe('Games', () => {
    it('allows navigation between slides', async () => {
        const wrapper = mount(Games, {
            global: {
                components: {
                    Swiper,
                    SwiperSlide,
                },
            },
            data() {
                return {
                    swiper: 'my-mock-class',
                };
            },
        });

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
        const swiperComponent = wrapper.findComponent(Swiper);
        expect(swiperComponent.exists()).toBe(true);

        // Ensure there is navigation
        const prevButton = wrapper.find('.button .previous');
        const nextButton = wrapper.find('.button.right .next');
        expect(prevButton.exists()).toBe(true);
        expect(nextButton.exists()).toBe(true);

        // Navigate to the next slide
        await nextButton.trigger('click');

        // Assert that the slideNext method is called
        // expect(swiperComponent.vm.methods.slideNext).toHaveBeenCalled();
        // expect(swiperComponent.vm.slideNext).toHaveBeenCalled();
        // expect(swiperComponent.vm.$options.methods.slideNext).toHaveBeenCalled();
        expect(wrapper.vm.$refs.swiperRef.swiper.slideNext).toHaveBeenCalled();


    });
});
