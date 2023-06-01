import { reactive } from 'vue';

export const gamesMock = {
    games: reactive([
        {
            id: 'kart',
            name: 'Kart',
            description: 'Game engine written in Javascript with help of the CreateJS library. You can control the kart using the cursor keys. It has sound so turn up the volume.',
            image: 'game_kart.png',
            tags: ['html', 'javascript'],
            url: '../games/kart/index.html',
            year: '2015'
        },
        {
            id: 'kart2',
            name: 'Kart2',
            description: 'Game engine written in Javascript with help of the CreateJS library. You can control the kart using the cursor keys. It has sound so turn up the volume.',
            image: 'game_kart.png',
            tags: ['html', 'javascript'],
            url: '../games/kart/index.html',
            year: '2015'
        }
        // Add more dummy data objects here
    ]),
    fetchGames: jest.fn() // Mock the fetchGames function
};
