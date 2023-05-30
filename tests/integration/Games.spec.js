import { mount } from '@vue/test-utils';
import Games from './../../src/views/Games/Games.vue';

// Mock the useGamesStore module todo: question for chatgpt if it ever reads this: I understand the need for mocking this method since its async, however where do we then test if the method is correct?
jest.mock('./../../src/stores/games', () => {
    const { gamesMock } = require('./games.mock');

    return {
        useGamesStore: () => gamesMock
    };
});

describe('Games', () => {
    it('allows navigation between slides', async () => {
        const wrapper = mount(Games);
        await wrapper.vm.$nextTick();

        // Check to see if navigation is present
        const prevButton = wrapper.find('.testLeft');
        const nextButton = wrapper.find('.testRight');

        expect(prevButton.exists()).toBe(true);
        expect(nextButton.exists()).toBe(true);

        // Check to see if loader is true
        const loader = wrapper.find('.loader');
        expect(loader.exists()).toBe(true);

        // // Wait for the Swiper component to render
        await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed

        // Check to see if loader is false
        expect(loader.exists()).toBe(false);

        // // Check to see if Swiper is loaded
        // const activeSlide = wrapper.find('.swiper-slide-active');
        // expect(activeSlide.exists()).toBe(true);
    });
});



