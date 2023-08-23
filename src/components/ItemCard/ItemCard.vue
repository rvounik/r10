<script setup>
import TagList from './../TagList/TagList.vue';

defineProps({
  item: Object
});

const openGame = url => {
  window.open(url, '_blank');
}

</script>

<template>
  <article class="card">
    <section class="card_section_title">
      <h2>{{ item.name }}<span>({{ item.year }})</span></h2>
      <figure>
        <img :src="`/assets/images/${item.image}`" @click="openGame(item.url)" :alt="item.id"/>
      </figure>
      <TagList :tags="item.tags"/>
    </section>
    <section class="card_section_text">
      <p>
        {{ item.description }}
        <span v-if="item.youtube">
          <a :href="item.youtube" target="_blank">
            <img src="/src/assets/images/icon_youtube.png" alt="youtube"/>
            It is also on YouTube!
          </a>
        </span>
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
    color: $black-light;
    display: flex;
    flex-direction: row;
    align-items: baseline;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 2.5rem;
    }

    span {
      font-weight: bold;
      font-size: .85rem;
      margin-left: auto;
      color: #999;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    color: $black-light;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }

  figure {
    max-height: calc(100% - 3rem);
    padding: 1rem 0;
    box-sizing: border-box;

    img {
      height: 100%;
      width: 100%;
      max-width: fit-content;
      object-fit: contain;

      &:hover {
        cursor: pointer;
      }
    }
  }

  /* show the card as a single-column card on large screens */
  @media screen and (min-width: $breakpoint-small) {
    width: 50%;
    max-width: 480px;
    height: 80%;
    max-height: 600px;
    border-radius: .5rem;
    box-shadow: 0 0 17px 7px rgb(0 0 0 / 20%);
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
      display: flex;
      flex-direction: column;
    }

    .card_section_text {
      width: 50%;
      padding: 2.5rem 2rem 0;
    }
  }

  .card_section_text {
    span {
      margin-top: 1rem;
      display: block;

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: $red;

        img {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
