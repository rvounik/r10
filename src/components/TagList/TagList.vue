<script setup>
defineProps({
  tags: Array
});
</script>

<template>
  <ul class="taglist">
    <li v-for="tag in tags">
      {{ tag }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.taglist {
  font-size: 14px;
  line-height: 18px;
  color: #333;
  font-weight: bold;
  list-style-type: none;
  margin-bottom: .6rem;

  li {
    border: solid 1px #ccc;
    padding: 0.25rem;
    display: inline;
    border-radius: 0.25rem;
    font-size: 12px;
    color: #666;
  }
}
</style>
