<script setup>
import * as data from '../../assets/data/games.json';
import ListSlider from '../../components/GameSlider/GameSlider.vue';
</script>

<template>
  <main>
    <GameSlider>
      <router-link key="index" to="/game/out-of-bounds">
        <figure>
          <img src="./../../assets/images/game_outofbounds.png" alt="out of bounds">
        </figure>
      </router-link>
    </GameSlider>

    <nav>
      <section>
      <span>Quick Select:</span>
        <select>
          <option v-for="(game, index) in data.games">
              {{ game.name }}
          </option>
        </select>
      </section>
    </nav>

  </main>
</template>

<style lang="scss" scoped>
ul {
  li {
    height: 100px;
    width: 100px;
    background: black;
    color: white;
    margin: .25rem;
    float: left;
  }
}
nav {
  text-align: center;

  section {
    margin-top: .5rem;

    ul {
      padding: .5rem;
    }
  }
}
figure {
  text-align: center;
}
</style>
