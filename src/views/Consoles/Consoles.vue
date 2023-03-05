<script setup>
import * as data from '../../assets/data/consoles.json';
</script>

<template>
  <main>
    <ul>
      <li v-for="(console, index) in data.consoles">
        <router-link key="index" :to="`/console/${console.id}`">
          <figure>
            <img :src="'./../assets/images/' + console.image" :alt="console.name">
          </figure>
          {{ console.name }}
        </router-link>
      </li>
    </ul>

  </main>
</template>

<style lang="scss">
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
</style>
