<script setup>
defineProps({
  tags: Array
});
</script>

<template>
  <ul>
    <li v-for="tag in tags">
      {{ tag }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  font-size: 14px;
  line-height: 18px;
  color: $black-light;
  font-weight: bold;
  list-style-type: none;
  margin-bottom: .5rem !important;

  li {
    border: solid 1px #ccc;
    padding: .25rem;
    display: inline;
    border-radius: .25rem;
    font-size: 12px;
    color: #666;
  }
}
</style>
