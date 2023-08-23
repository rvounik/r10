<script setup>
import Vue3EasyDataTable from 'vue3-easy-data-table';

defineProps({
  items: Array,
  headers: Array,
  sortBy: String,
  openItem: Function
});


/** getModifierClass
 * Returns css modifier class if item has link
 * @param {Object} item - item to be rendered as a table row
 * @returns {String} - modifier class or empty string
 */
const getModifierClass = item => {
  return item.link ? '--with-link' : ''
};
</script>

<template>
  <Vue3EasyDataTable
      :headers="headers"
      :items="items"
      :sort-by="sortBy"
      :body-row-class-name="getModifierClass"
      @click-row="openItem"
      rows-per-page="10"
      sort-type="asc"
      must-sort="true"
      table-class-name="data-table"
  />
</template>

<style lang="scss">
.data-table {
  margin-top: 1rem !important;
  border-radius: 4px;
}
.--with-link {
  td:nth-of-type(2) {
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
