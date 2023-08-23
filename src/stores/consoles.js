import { ref } from 'vue'

const consoles = ref([])
const consoleInfo = ref(null)

// see https://logaretm.com/blog/build-pinia-stores-from-composition-api/

export function useConsolesStore() {
    async function fetchConsoles() {
        try {
            consoles.value = await fetch('../assets/data/consoles.json')
            .then((result) => result.json());
        } catch (error) {

            // todo: handle error / show alert
            console.log('error fetching json!')
        }
    }

    async function fetchConsoleInfo(link) {
        try {
            consoleInfo.value = await fetch('../assets/data/console-info.json')
                .then(async (response) => {
                    const data = await response.json();

                    if (data && data[link]) {
                        return data[link];
                    }
                });
        } catch (error) {

            // todo: handle error / show alert
            console.log('error fetching json!')
        }
    }

    return {
        consoles,
        consoleInfo,
        fetchConsoles,
        fetchConsoleInfo
    };
}
