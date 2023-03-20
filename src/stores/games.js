import {ref} from 'vue'

const games = ref([])

// see https://logaretm.com/blog/build-pinia-stores-from-composition-api/ for other request examples
export function useGamesStore() {
    async function fetchGames() {
        try {
            games.value = await fetch('../assets/data/games.json')
            .then((r) => r.json());
        } catch (error) {

            // todo: handle error / show alert
            console.log('error')
        }
    }

    return {
        games,
        fetchGames
    };
}
