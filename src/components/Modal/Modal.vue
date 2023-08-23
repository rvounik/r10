<script setup>
defineProps({
  content: String,
  closeModal: Function
});
</script>

<template>
  <aside class="modal">
    <h3 @click="closeModal">X</h3>
    <div v-html="content"/>
  </aside>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  background: #ffd7ad;
  z-index: $z-index-modal;
  padding: 3rem 2rem;
  text-align: left;
  overflow-y: auto;
  max-width: $width-hard-limit;
  box-sizing: border-box;
  flex-direction: column;
  display: inline-block;
  box-shadow: $box-shadow-centered;
  border-radius: .5rem;

  @media screen and (min-width: $breakpoint-small) {
    max-height: calc(100vh - $header-height-large - $footer-height - 3rem);
  }

  @media screen and (min-width: $breakpoint-large) {
    max-height: calc(100vh - $header-height-large - $footer-height - 5rem);
  }

  @media screen and (min-width: $breakpoint-extra-large) {
    max-height: calc(100vh - $header-height-extra-large - $footer-height - 4rem);
  }

  h3 {
    position: absolute;
    right: 2rem;
    top: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  &:empty {
    display: none;
  }
}
</style>


