<script setup>
import { reactive, watch, onMounted, computed } from 'vue'
import { register } from 'swiper/element/bundle';
import { useGamesStore } from '../../stores/games'
import ItemCard from './../../components/ItemCard/ItemCard.vue';

// register js-slider web component
register();

const store = useGamesStore();

const state = reactive({
  activeItem: 0,
  tags: ['html','javascript'],
  loading: true,
  navigationLocked: false
});

onMounted(async () => {
  await store.fetchGames();
});

// watcher for API call returning
watch(store.games, (newValue, oldValue) => {
  if (newValue && newValue.length) {
    state.loading = false;
  }
})

// using a computed property just for this may be a bit overkill but its good practice
const isLoading = computed(() => {
  return state.loading;
});

const prevSlide = () => {
  const swiperEl = document.querySelector('swiper-container');
  swiperEl.swiper.slidePrev();
}
const nextSlide = () => {
  const swiperEl = document.querySelector('swiper-container');
  swiperEl.swiper.slideNext();
}

</script>

<template>
    <div v-if="isLoading">
      <easy-spinner/>
    </div>
  <swiper-container
      v-else
      slides-per-view="1"
      speed="500"
      loop="true"
      css-mode="false"
      modules={[Navigation]}
      autoplay="true"
      class="gallery"
      keyboard="true"
      pagination="true"
      loopPreventsSliding="true"
  >
      <swiper-slide v-for="(item, index) in store.games.value" :item="item" :key="index" class="gallery_item">
        <ItemCard :item="item" />
      </swiper-slide>
  </swiper-container>

    <div class="button" @click.prevent="prevSlide">
      <a href="#" class="previous">&laquo;</a>
    </div>

    <div class="button right" @click.prevent="nextSlide">
      <a href="#" class="next">&raquo;</a>
    </div>
</template>

<style lang="scss" scoped>
.gallery {
  .gallery_item {
    width: 100vw;
    height: calc(100% - $header-height-small - $footer-height);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $breakpoint-small) {
      height: calc(100vh - $header-height-large - $footer-height);
    }

    @media screen and (min-width: $breakpoint-large) {
      height: calc(100vh - $header-height-extra-large - $footer-height);
    }
  }
}

.button {
  height: 2rem;
  width: 2rem;
  background: #000;
  opacity: .5;
  position: absolute;
  left: 1rem;
  z-index: 100;
  box-shadow: 0 0 10px 3px rgb(0 0 0 / 20%);
  display: none;

  @media screen and (min-width: $breakpoint-small) {
    display: block;
  }

  a {
    color: $white;
    font-family: monospace;
    font-size: 2rem;
    line-height: 1.6rem;
  }

  &:hover {
    cursor: pointer;
  }

  &.right {
    right: 1rem;
    left: unset;
  }
}

</style>
