import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useGamesStore = defineStore('games', () => {
    const games = ref([])

    onMounted(async () => {

        // todo: to be replace with a proper API request whenever I can be bothered to write a backend :)
        const response = await fetch('../assets/data/games.json')
        games.value = await response.json()
    })

    return { games }
})
