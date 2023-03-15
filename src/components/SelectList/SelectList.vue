<script setup>
  defineProps(['items'])
</script>

<template>
  <select class="selectList">
    <option v-for="(item, index) in items">
        {{ item.name }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.selectList {
  padding: .5rem 1rem;
  font-size: 1.25rem;
}
</style>
