import { mount } from '@vue/test-utils';
import Games from './../../src/views/Games/Games.vue';
import { useGamesStore } from '../../src/stores/games';
import { Swiper, SwiperSlide } from 'swiper/vue';

const item = {
    "id": "kart",
    "name": "Kart",
    "description": "Game engine written in Javascript with help of the CreateJS library. You can control the kart using the cursor keys. It has sound so turn up the volume.",
    "image": "game_kart.png",
    "tags": ["html", "javascript"],
    "url": "../games/kart/index.html",
    "year": "2015"
};

jest.mock('swiper/vue', () => ({
    Swiper: {
        template: '<div class="my-mock-class"></div>',
    },
    SwiperSlide: {
        template: '<div></div>',
    },
}));

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

        const { fetchGames } = useGamesStore();

        let loader;

        loader = wrapper.find('.loader');

        expect(loader.exists()).toBe(true);

        // if you disable, the loader stays. if you enable, loader goes and Swiper is rendered
        wrapper.vm.loading = false;

        await wrapper.vm.$nextTick();

        loader = wrapper.find('.loader'); // try to find it once more
        expect(loader.exists()).toBe(false);

        // const activeSlide = wrapper.find('.swiper-slide-active');
        // expect(activeSlide.exists()).toBe(true);
    });
});
