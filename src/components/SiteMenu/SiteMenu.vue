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
  <nav class="nav">
    <ul>
      <li :class="{ active: isActive('about'), about: isActive('about') }">
        <router-link :to="{ path: '/about' }">About</router-link>
      </li>
      <li :class="{ active: isActive('games') }">
        <router-link :to="{ path: '/games' }">Games</router-link>
      </li>
      <li :class="{ active: isActive('consoles'), consoles: isActive('consoles') }">
        <router-link :to="{ path: '/consoles' }">Consoles</router-link>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss" scoped>

.nav {
  display: flex;
  margin: 0 auto;
  height: 50px;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, .8) 20%, transparent);
  transition: background-color .5s;

  a {
    color: $white;
    font-size: 1rem;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    white-space: nowrap;

    li {
      vertical-align: middle;
      display: inline-block;
      height: 100%;
      padding: .75rem 1rem;
      box-sizing: border-box;
    }
  }
}

.active {
  background-color: #666;
  font-weight: 700;

  a {
    color: $white;
  }

  &.about {
    background-color: $white;

    a {
      color: $black;
    }
  }

  &.consoles {
    background-color: chocolate;

    a {
      color: $white;
    }
  }

}

@media screen and (max-width: $breakpoint-small) {
  .active {
    background-color: $white;

    a {
      color: $black-light;
    }
  }
}
</style>
