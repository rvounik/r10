<script setup>
import TagList from './../TagList/TagList.vue';

defineProps({
  item: Object
});
</script>

<template>
  <article class="card">
    <section class="card_section_title">
      <h2>{{ item.name }}</h2>
      <img :src="`/src/assets/images/${item.image}`"/>
      <TagList :tags="item.tags"/>
    </section>
    <section class="card_section_text">
      <p>
        {{ item.description }}
      </p>
    </section>
  </article>
</template>


<style lang="scss" scoped>
.card {
  background: white;
  width: 100%;
  max-width: unset;
  height: 100%;
  max-height: unset;
  border-radius: unset;
  padding: 2rem;
  box-shadow: unset;
  box-sizing: border-box;
  text-align: left;
  overflow: auto;
  white-space: break-spaces;

  h2 {
    font-size: 1.5rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333;
  }

  img {
    width: 100%;
    margin: .5rem 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    object-fit: contain;
  }

  /* show the card as a single-column card on large screens */
  @media screen and (min-width: $breakpoint-small) {
    width: 50%;
    max-width: 480px;
    height: 80%;
    max-height: 600px;
    border-radius: .5rem;
    box-shadow: 0px 0px 17px 7px rgb(0 0 0 / 19%);;
  }

  /* show the card as a double-column card on extra large screens */
  @media screen and (min-width: $breakpoint-large) {
    width: 80%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    max-width: unset;

    .card_section_title {
      width: 50%;
      padding-right: 3rem;
      border-right: dashed 1px #ccc;
    }

    .card_section_text {
      width: 50%;
      padding: 2rem 2rem 0;
    }
  }
}
</style>
