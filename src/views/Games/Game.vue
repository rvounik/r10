<script setup>
import GameCanvas from './components/GameViewer/GameViewer.vue'
</script>

<template>
  <main>
    <GameCanvas/>
    <p>
      (this is the game page it should fetch extra details from the BE like the link and description)
    </p>
    {{ $route.params.id }}
  </main>
</template>

<style lang="scss">
main {
  text-align: center;
}
</style>
