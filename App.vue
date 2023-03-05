<script setup>
import Header from './src/components/SiteHeader/SiteHeader.vue'
import Menu from './src/components/SiteMenu/SiteMenu.vue'
</script>

<template>
  <section id="layout">
    <Header>R10</Header>
    <Menu></Menu>
      <router-view />
  </section>
</template>

<!-- since this applies global css to the whole project, do not set the 'scoped' param here. lang is still scss. -->
<style lang="scss">
#layout {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 980px;
  height: 100vh;
  background: #eef7ff;
  color: $black;
  box-shadow: 0 0 12px 6px rgba(0, 0, 0, .3);
}
</style>
