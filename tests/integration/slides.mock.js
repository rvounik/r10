import { reactive } from 'vue';

export const slidesMock = [
    // Mocked slide objects
    { item: {
            id: 'kart',
            name: 'Kart',
            description: 'Game engine written in Javascript with help of the CreateJS library. You can control the kart using the cursor keys. It has sound so turn up the volume.',
            image: 'game_kart.png',
            tags: ['html', 'javascript'],
            url: '../games/kart/index.html',
            year: '2015'
        }, key: 1, class: 'gallery_item' },
    { item: {
            id: 'kart2',
            name: 'Kart2',
            description: 'Game engine written in Javascript with help of the CreateJS library. You can control the kart using the cursor keys. It has sound so turn up the volume.',
            image: 'game_kart.png',
            tags: ['html', 'javascript'],
            url: '../games/kart/index.html',
            year: '2015'
        }, key: 2, class: 'gallery_item' },
    // Add more mocked slides as needed
];
