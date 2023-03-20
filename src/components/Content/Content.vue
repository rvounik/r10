<script setup>
</script>

<template>
  <main>
    <slot/>
  </main>
</template>

<style lang="scss" scoped>
$radial-gradient: #999 0%, #999 20%, #666 80%;

main {
  overflow: hidden;
  height: calc(100vh - $header-height-small);
  display: flex;
  flex-direction: column;
  background: $white;
  text-align: center;
  justify-content: center;

  svg {
    color: $black;
    font-size: 2rem;

    @media screen and (min-width: $breakpoint-small) {
      color: $white;
    }
  }

  @media screen and (min-width: $breakpoint-small) {
    height: calc(100vh - $header-height-large);
    background: radial-gradient($radial-gradient);
  }

  @media screen and (min-width: $breakpoint-large) {
    height: calc(100vh - $header-height-extra-large);
    background: radial-gradient($radial-gradient);
  }
}
</style>
