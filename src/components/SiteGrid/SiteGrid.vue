<script setup>
</script>

<template>
  <section id="layout">
    <div class="outer-wrapper">
      <slot/>
    </div>
  </section>
</template>

<style lang="scss">
#layout {
  overflow: hidden;
  box-sizing: border-box;
}
.outer-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  background: #666;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 320px;
}
</style>

