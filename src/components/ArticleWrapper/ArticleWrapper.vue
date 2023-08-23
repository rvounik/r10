<script setup>
/**
 * @component ArticleWrapper
 * @description This is a wrapper for title + body
 * @example
 * <ArticleWrapper><h2>Title</h2><p>this is the body text</p></ArticleWrapper>
 */
</script>

<template>
  <article>
    <slot/>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: inline-block;
  position: relative;
  width: 100%;
  max-width: $width-hard-limit;

  :slotted(h2) {
    font-size: 2rem;
    padding-bottom: 1rem;
    display: inline-block;
    max-width: $width-hard-limit;
    width: 100%;
    color: $black-light;
    text-align: left;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 2.5rem;
    }
  }

  :slotted(h3) {
    margin-bottom: 0;
  }

  :slotted(p) {
    text-align: left;
    width: 100%;
    display: inline-block;
    max-width: $width-hard-limit;
    box-sizing: border-box;
    color: $black;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 1.25rem;
    }
  }
}
</style>
