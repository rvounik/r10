<script setup>

// since menu component is outside of router-view, it needs to be imported here
import router from './../../router';

import { computed } from 'vue';

const currentRoute = computed(() => {
  return router.currentRoute.value
});

/* add the active class if given identifier is part of the current route */
const isActive = (id) => {
  const regex = new RegExp(`^\\/${id}(\\/|$)`);
  return regex.test(currentRoute.value.path);
};
</script>

<template>
  <nav>
    <router-link
        :to="{ path: '/games' }"
        :class="{ 'menu-item': true, active: isActive('games') }"
    >Games</router-link>
    <router-link
        :to="{ path: '/consoles' }"
        :class="{ 'menu-item': true, active: isActive('consoles') }"
    >Consoles</router-link>
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

.menu-item {
  color: black;
  /* add your default menu item styles here */
}

.menu-item.active {
  color: red;
  /* add your active menu item styles here */
}

.active {
  border-bottom: solid 2px red;
}
</style>
