<script setup>
import { reactive, watch, onMounted, computed } from 'vue'
import { useGamesStore } from '../../stores/games'
import ItemCard from './../../components/ItemCard/ItemCard.vue';

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
  state.loading = false;
})

// using a computed property just for this may be a bit overkill but its good practice
const isLoading = computed(() => {
  return state.loading;
});

const currentItem = computed(() => {
  return store.games.value[state.activeItem];
})

const prevItem = computed(() => {
  return store.games.value[state.activeItem > 0 ? state.activeItem - 1 : store.games.value.length - 1];
})

const nextItem = computed(() => {
  return store.games.value[state.activeItem < (store.games.value.length - 1) ? state.activeItem + 1 : 0];
})







const scrollToItem = direction => {
  if (state.navigationLocked) { return }

  const gallery = document.getElementById('gallery');

  // disable further navigation
  state.navigationLocked = true;

  // transform the slider from the middle to either the left or right node, depending on direction
  gallery.style.transition = 'transform .5s';
  gallery.style.transform = direction === 'right' ? 'translateX(-200vw)' : 'translateX(0vw)'

  gallery.addEventListener('transitionend', () => {

    // move slider back to default position
    gallery.style.transition = 'transform .005s';
    gallery.style.transform = 'translateX(-100vw)';

    // after it has done so, update the state so the state.currentItem reflects the change made to the view
    gallery.addEventListener('transitionend', () => {
      updateState(direction);
    });
  }, { once: true });
}






const updateState = direction => {

  // update state so the new image appears
  if (direction === 'right') {
    state.activeItem < (store.games.value.length - 1)
        ? state.activeItem++
        : state.activeItem = 0;
  }

  if (direction === 'left') {
    state.activeItem > 0
        ? state.activeItem--
        : state.activeItem = (store.games.value.length - 1);
  }

  // re-enable navigation
  state.navigationLocked = false;
}

const toPrevItem = () => {
  scrollToItem('left');
}

const toNextItem = () => {
  scrollToItem('right');
}
</script>

<template>
    <div v-if="isLoading">
      <easy-spinner/>
    </div>

    <ul v-else class="gallery" id="gallery" >
      <li><ItemCard :item="prevItem" /></li>
      <li><ItemCard :item="currentItem" /></li>
      <li><ItemCard :item="nextItem" /></li>
    </ul>

    <div class="button" @click="toPrevItem"></div>
    <div class="button right" @click="toNextItem"></div>
</template>

<style lang="scss" scoped>
.gallery {
  font-size: 0;
  text-align: center;
  width: 300vw;
  height: 100%;
  margin-bottom: auto;
  overflow-y: auto;
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  transform: translateX(-100vw);

  > li {
    width: 100vw;
    height: calc(100vh - $header-height-small - $footer-height);
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
  height: 5rem;
  width: 5rem;
  background: black;
  border-radius: 50%;
  position: absolute;
  left: -2.5rem;

  &:hover {
    cursor: pointer;
  }

  &.right {
    right: -2.5rem;
    left: unset;
  }
}

</style>
