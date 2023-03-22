<script setup>
</script>

<template>
  <header class="header">
    <h1 class="title">
      <span>V</span><span>A</span><span>N</span><span>O</span><span>O</span><span>I</span><span>J</span><span>.</span><span>N</span><span>L</span>
    </h1>
    <slot/>
  </header>
</template>

<style lang="scss" scoped>

.header {
  height: $header-height-small;
  color: $white;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: url('/src/assets/images/site_header.png') center 90% no-repeat #000;
  background-size: cover;
}

@media screen and (min-width: $breakpoint-small) {
  .header {
    height: $header-height-large;
  }
}

@media screen and (min-width: $breakpoint-large) {
  .header {
    height: $header-height-extra-large;
  }
}

.title {
  display: flex;
  flex: 1;
  line-height: 4rem;
  text-indent: 1rem;
  width: 100%;
  box-sizing: border-box;
  font-family: Luckiest Guy,cursive;
  position: relative;
  font-size: 5rem;
  letter-spacing: 4px;
  padding: .5rem 0 0 0.5rem;
}

@media screen and (min-width: $breakpoint-large) {
  .title {
    padding: 2rem 1rem;
    font-size: 3rem;
    letter-spacing: 2px;
  }
}

.title span {
  margin: 0;
  padding: 0;
  text-indent: 0;
  line-height: 4rem;
  font-family: Luckiest Guy,cursive;
  font-size: 3rem;
  letter-spacing: 2px;
}

@media screen and (min-width: $breakpoint-large) {
  .title span {
    font-size: 5rem;
    letter-spacing: 4px;
  }
}
</style>
