import { ref } from 'vue'

const games = ref([])

// see https://logaretm.com/blog/build-pinia-stores-from-composition-api/

export function useGamesStore() {
    async function fetchGames() {
        try {
            games.value = await fetch('../assets/data/games.json')
            .then((result) => result.json());
        } catch (error) {

            // todo: handle error / show alert
            console.log('error fetching json!')
        }
    }

    return {
        games,
        fetchGames
    };
}
