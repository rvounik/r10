<script setup>
import { ref } from 'vue';

// todo: figure out how to highlight also for sub pages
// const isActive = ref(true);

</script>

<template>
  <nav>
    <router-link active-class="active" to="/">MYSELF</router-link>
    <router-link active-class="active" to="/games">MY GAMES</router-link>
    <router-link active-class="active" to="/consoles">MY CONSOLES</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background: #333;
  width: 100%;
  color: $white;
  font-size: 1.25rem;
  font-family: verdana;
  text-align: center;
  height: 3rem;
  border-top: inset 1px #ccc;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, .3);

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: .75rem 1rem 0;
    display: inline-block;
  }
}

.active {
  border-bottom: solid 2px red;
}
</style>
