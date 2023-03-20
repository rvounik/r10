<script setup>
</script>

<template>
  <section id="layout">
    <div class="wrapper">
      <slot/>
    </div>
  </section>
</template>

<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  background: #666;
}
</style>

