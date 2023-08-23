<script setup>
import { reactive, watch, onMounted, computed, ref } from 'vue';
import { useGamesStore } from '../../stores/games';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from 'swiper/core';
import ItemCard from './../../components/ItemCard/ItemCard.vue';
import { PacmanLoader } from 'vue3-spinner';
import 'swiper/css';

SwiperCore.use([Navigation]);

const store = useGamesStore();

const state = reactive({
  activeItem: 0,
  tags: ['html', 'javascript'],
  navigationLocked: false
});

const loading = ref(true); // Ref for the loading property

onMounted(async () => {
  await store.fetchGames();
});

watch(store.games, (newValue, oldValue) => {
  if (newValue && newValue.length) {
    loading.value = false; // Update the loading ref to false
  }
});

// using a computed property just for this may be a bit overkill but it's good practice
const isLoading = computed(() => loading.value);

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
  <div v-if="isLoading" class="loader">
    <PacmanLoader
        color="#ffffff"
        size="25" />
  </div>
  <div v-else>
  <Swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      :class="swiper"
  >
      <SwiperSlide v-for="(item, index) in store.games.value" :item="item" :key="index" class="swiper-slide">
        <ItemCard :item="item" />
      </SwiperSlide>
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
.loader {
  width: 100px;
  margin-left: calc(50% - 50px);
}

.swiper-slide {
  display: flex;
  justify-content: center;
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
