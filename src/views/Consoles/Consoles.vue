<script setup>
  import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
  import { useConsolesStore } from '../../stores/consoles';
  import { useRouter } from 'vue-router';
  import DataTable from './../../components/DataTable/DataTable.vue';
  import Modal from './../../components/Modal/Modal.vue';
  import { TableHeaders } from './constants/TableHeaders';
  import { CompactTableHeaders } from './constants/CompactTableHeaders';
  import { PacmanLoader } from 'vue3-spinner';
  import ArticleWrapper from '../../components/ArticleWrapper/ArticleWrapper.vue';

  const router = useRouter();
  const store = useConsolesStore();

  const loading = ref(true); // ref for the loading property
  const modalOpen = ref(false); // ref for the modal open state
  const compactHeaders = ref(window.innerWidth < 640); // ref for keeping track of window width
  const isLoading = computed(() => loading.value); // computed to keep track of loading state (little overkill maybe)

  // fetch console data on mount
  onMounted(async () => {
    await store.fetchConsoles();
  });

  watch(store.consoles, (newValue, oldValue) => {
    if (newValue && newValue.length) {
      loading.value = false;
    }
  });

  // helper method to fetch console info for the given link from the store
  const fetchConsoleInfo = async link => {
    await store.fetchConsoleInfo(link)
        .then(() => {
          if (store.consoleInfo.value) {
            openModal();
          } else {
            throw new Error(`could not fetch information for ${link}`)
          }
        })
        .catch(() => {
          // log error
        });
  }

  // callback for items with a link
  const openItem = item => {
    if (item && item.link) {
      fetchConsoleInfo(item.link);
    }
  };

  const openModal = () => {
    modalOpen.value = true;
  }

  const closeModal = () => {
    modalOpen.value = false;
  }

  const updateCompactHeaders = () => {
    compactHeaders.value = window.innerWidth < 640;
  };

  onMounted(() => {
    window.addEventListener('resize', updateCompactHeaders);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateCompactHeaders);
  });
</script>

<template>
  <div class="inner-wrapper">
    <template v-if="isLoading" class="loader">
      <PacmanLoader
          color="#ffffff"
          size="25" />
    </template>
    <div v-else class="modal-and-article-wrapper">
      <Modal
          v-if="modalOpen"
          :content="store.consoleInfo.value"
          :closeModal="closeModal"
      />
      <ArticleWrapper>
        <h2>My consoles</h2>
        <p>
          I'm a collector of old game consoles and game computers. Ultimately I want to own every gaming platform out there. This means I dont collect 'variants' per se (eg. the same console in 14 different colours). Here is my collection visualised in a nice sortable table! Some of them can be clicked on for further information.
        </p>

        <DataTable
            :items="store.consoles.value"
            :headers="compactHeaders ? CompactTableHeaders : TableHeaders"
            :openItem="openItem"
            sortBy="title"
        />
      </ArticleWrapper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* todo: consider making a component out of inner-wrapper, too */
.inner-wrapper {
  width: 100%;
  height: 100%;
  background: chocolate;
  text-align: center;
  padding: 1rem 1rem 1rem;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 1.5rem 1rem 1rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 2rem 2rem 2rem;
  }

  .loader {
    width: 100px;
    margin-left: calc(50% - 50px);
  }

  .modal-and-article-wrapper {
    position: relative;
  }
}
</style>
