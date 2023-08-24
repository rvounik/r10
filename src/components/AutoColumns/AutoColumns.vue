<script setup>
defineProps({
  columns: Number,
  ruleColor: String
});
</script>

<template>
    <article>
      <slot/>
    </article>
</template>

<style lang="scss" scoped>
article {
  width: 100%;
  max-width: $width-hard-max;
  overflow: auto;
  display: inline-block;

  @media only screen and (min-width: $breakpoint-large) {
    column-count: v-bind('columns');
    column-fill: unset;
    column-gap: 4rem;
    column-rule-color: v-bind('ruleColor');
    column-rule-style: dashed;
    column-rule-width: thin;
    column-span: 1;
    page-break-inside: avoid;
  }

  :slotted(h3) {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: $black-light;
    text-align: left;
    line-height: 2.5rem;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  :slotted(p) {
    font-size: 1rem;
    display: block;
    white-space: pre-wrap;
    text-align: left;
    margin-bottom: 1rem;
    padding: .25rem;
    color: $black;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 1.25rem;
    }

    a, u, i, strong {
      font-size: inherit;
      color: $black-light;
      text-decoration: underline;
    }

    i, strong {
      text-decoration: none;
    }
  }

  :slotted(figure) {
    figcaption {
      background: #888;
      color: $white;
      font-size: .8rem;
      padding: .2rem .6rem;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    img {
      display: inline;
      width: 100%;
      vertical-align: middle
    }

    img {
      text-align: left;
    }
  }

  :slotted(ul) {
    list-style-type: circle;

    li {
      color: $white;
    }
  }
}
</style>
