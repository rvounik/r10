<script setup>
</script>

<template>
  <section>
    <slot/>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: $black;
  height: calc(100% - 3rem - 10rem);
  width: 50%;
  padding: 1rem;

  img {
    display: inline;
  }
}
</style>
