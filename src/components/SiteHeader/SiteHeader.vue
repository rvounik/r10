<script setup>
  import { ref, reactive } from 'vue';

  const state = reactive({ count: 0 }) // looks a bit like React hook


  const incrementTest = () => {
    if (state.count<10) {
      state.count++;
    }
  }

  window.setInterval( () => { incrementTest() }, 50)
</script>

<template>
    <header>
        <h1>R{{state.count < 10 ? '0' : ''}}{{state.count}}</h1>
      <span>(because it is the 10th revision of my website, duh)</span>
    </header>
</template>

<style lang="scss" scoped>

header {
  height: 10rem;
  background: url('/src/assets/images/site_header.jpg');
  padding-top: 1rem;
  text-align: center;

  h1 {
    font-size: 6.5rem;
    color: $white;
    font-family: $font_header;
    display: inline-block;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);

    &:first-letter {
      color: lightblue;
    }
  }

  span {
    font-size: .85rem;
    color: #ccc;
    display: block;
    text-shadow: 0 0 10px rgba(0, 0, 0, .75);
  }
}

</style>
