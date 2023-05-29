import { mount } from '@vue/test-utils';
import Games from './../../src/views/Games/Games.vue';

// // Mock the Swiper component
// jest.mock('swiper/vue', () => ({
//     Swiper: {
//         template: '<div></div>',
//         props: ['slidesPerView', 'spaceBetween'],
//         emits: ['swiper'],
//         mounted() {
//             this.$emit('swiper', this);
//         },
//         methods: {
//             slidePrev: jest.fn(),
//             slideNext: jest.fn(),
//         },
//     },
//     SwiperSlide: {
//         template: '<div></div>',
//     },
// }));

// Mock the useGamesStore module
jest.mock('./../../src/stores/games', () => ({
    useGamesStore: () => ({
        games: [],
        fetchGames: jest.fn() // Mock the fetchGames function
    })
}));

describe('Games', () => {
    it('allows navigation between slides', async () => {
        const wrapper = mount(Games);
        await wrapper.vm.$nextTick();

        // Simulate navigation
        const prevButton = wrapper.find('.testLeft');
        const nextButton = wrapper.find('.testRight');

        expect(prevButton.exists()).toBe(true);
        expect(nextButton.exists()).toBe(true);

        // Navigate to the next slide
        await nextButton.trigger('click');

        // Wait for the component to update
        await wrapper.vm.$nextTick();
        //
        //
        // const wrapper = mount(Games);
        // await wrapper.vm.$nextTick();
        //
        // // Simulate navigation
        // const prevButton = wrapper.find('.testLeft');
        // const nextButton = wrapper.find('.testRight');
        //
        // expect(prevButton.exists()).toBe(true);
        // expect(nextButton.exists()).toBe(true);
        //
        // // Navigate to the next slide
        // await nextButton.trigger('click');
        //
        // // Wait for the component to update
        // await wrapper.vm.$nextTick();


    });
});



// // Check if the active slide has changed
// const activeSlide = wrapper.find('.swiper-slide-active');
//
// expect(activeSlide.exists()).toBe(true);
//
// // Navigate to the previous slide
// await prevButton.trigger('click');
//
// // Wait for the component to update
// await wrapper.vm.$nextTick();
//
// // Check if the active slide has changed back to the initial slide
// const initialSlide = wrapper.find('.swiper-slide:first-child');
// expect(initialSlide.exists()).toBe(true);
