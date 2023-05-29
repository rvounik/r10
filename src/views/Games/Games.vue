<script setup>
import { reactive, watch, onMounted, computed, ref } from 'vue';
import { useGamesStore } from '../../stores/games';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import 'swiper/css';
import SwiperCore, { Navigation } from 'swiper/core';
import ItemCard from './../../components/ItemCard/ItemCard.vue';

SwiperCore.use([Navigation]);

const store = useGamesStore();

const state = reactive({
  activeItem: 0,
  tags: ['html', 'javascript'],
  loading: true,
  navigationLocked: false
});

onMounted(async () => {
  await store.fetchGames();
});

watch(store.games, (newValue, oldValue) => {
  if (newValue && newValue.length) {
    state.loading = false;
  }
});

// using a computed property just for this may be a bit overkill but its good practice
const isLoading = computed(() => state.loading);

const onSwiper = swiperInstance => {
  state.swiper = swiperInstance;
};

const prevSlide = () => {
  if (state.swiper) {
    state.swiper.slidePrev();
  }
};

const nextSlide = () => {
  if (state.swiper) {
    state.swiper.slideNext();
  }
};
</script>

<template>
  <div v-if="isLoading">
    <!--      <easy-spinner/>-->
  </div>
  <div v-else>
  <Swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      :class="swiper"
  >
      <swiper-slide v-for="(item, index) in store.games.value" :item="item" :key="index" class="gallery_item">
        <ItemCard :item="item" />
      </swiper-slide>
  </Swiper>
  </div>

    <div class="button testLeft" @click.prevent="prevSlide">
      <a href="#" class="previous">&laquo;</a>
    </div>

    <div class="button right testRight" @click.prevent="nextSlide">
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
