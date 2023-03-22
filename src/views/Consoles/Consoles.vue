<script setup>
import AutoColumns from '../../components/AutoColumns/AutoColumns.vue';
import * as data from '../../assets/data/consoles.json';
</script>

<template>
  <div class="inner_wrapper">
    <h2>My consoles</h2>
    <p class="intro">While this section is being worked on, here's just a list of my current consoles and computers:</p>
    <AutoColumns columns="3" ruleColor="#000">
      <p>
        <template v-for="console in data.consoles">
            {{ console }}<br/>
        </template>
      </p>
    </AutoColumns>
  </div>
</template>

<style lang="scss" scoped>
.inner_wrapper {
  width: 100%;
  height: 100%;
  background: chocolate;
  text-align: center;
  padding: 1rem 1rem 1rem;
  overflow-y: auto;
  box-sizing: border-box;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 2rem 1rem 1rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 4rem 2rem 2rem;
  }

  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
    display: inline-block;
    max-width: $width-hard-limit;
    width: 100%;
    color: $black;
    text-align: left;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 3.25rem;
    }
  }

  .intro {
    text-align: left;
    width: 100%;
    display: inline-block;
    max-width: $width-hard-limit;
    padding: 1rem 0;
    box-sizing: border-box;
    color: $black;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 1.5rem;
      padding: 2rem 0;
    }
  }
}
</style>
