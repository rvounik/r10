<script setup>
import { ref } from 'vue'
import { useGamesStore } from '../../stores/games'

import GameSlider from './components/GameSlider/GameSlider.vue';
import SelectList from './../../components/SelectList/SelectList.vue'

const store = useGamesStore()
const games = ref(store.games)
</script>

<template>
  <main>

    <GameSlider>
      <router-link key="index" to="/games/out-of-bounds">
        <figure>
          <img src="./../../assets/images/game_outofbounds.png" alt="out of bounds">
        </figure>
      </router-link>
    </GameSlider>

    <nav class="selectListWrapper">
      <section>
        <span>Quick Select:</span>
          <SelectList :games="games"/>
        </section>
    </nav>

  </main>
</template>

<style lang="scss" scoped>
main {
  > section {
    width: 100%;
    height: calc(100% - 5rem);
  }

  >nav {
    height: 5rem;
  }
}
.selectListWrapper {
  text-align: center;
  height: 3rem;

  > section {
    margin-top: .5rem;

    span {
      margin-right: .5rem;
    }
  }
}

figure {
  text-align: center;
}
</style>
