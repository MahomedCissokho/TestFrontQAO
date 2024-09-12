<script setup>
import { onMounted, computed } from 'vue';
import { useArtworksStore } from '../stores/store.js';
import SearchBarComponent from '@/components/SearchBarComponent.vue';
import CardComponent from '@/components/CardComponent.vue';

const artworksStore = useArtworksStore();

onMounted(() => {
  artworksStore.fetchArtworks();
});

const handleSearch = (searchQuery) => {
  artworksStore.searchArtworks(searchQuery);
};

const changePage = (page) => {
  if (page >= 1 && page <= artworksStore.pagination.totalPages) {
    artworksStore.changePage(page);
  }
};

const visiblePages = computed(() => {
  const totalPages = artworksStore.pagination.totalPages;
  const currentPage = artworksStore.pagination.currentPage;
  const pagesToShow = 2;
  const halfPagesToShow = Math.floor(pagesToShow / 2);

  let startPage = Math.max(1, currentPage - halfPagesToShow);
  let endPage = Math.min(totalPages, currentPage + halfPagesToShow);

  if (endPage - startPage < pagesToShow - 1) {
    if (currentPage < halfPagesToShow + 1) {
      endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    } else if (currentPage > totalPages - halfPagesToShow) {
      startPage = Math.max(endPage - pagesToShow + 1, 1);
    }
  }

  const pages = [];
  if (startPage > 1) pages.push(1);
  if (startPage > 2) pages.push('...');
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  if (endPage < totalPages - 1) pages.push('...');
  if (endPage < totalPages) pages.push(totalPages);
  
  return pages;
});
</script>

<template>
  <div class="max-w-6xl px-4 pb-4 mx-auto mb-10 sm:px-5">
    <div class="flex flex-col mb-8 sm:flex-row sm:items-center sm:justify-between sm:mb-16">
      <div class="w-full mb-4 sm:w-4/12 sm:mb-0">
        <SearchBarComponent @search="handleSearch" />
      </div>
      <div class="flex items-center justify-center translate-y-6 sm:justify-end">
        <button
          @click="changePage(artworksStore.pagination.currentPage - 1)"
          :disabled="artworksStore.pagination.currentPage === 1"
          class="px-2 sm:px-4 py-1 mx-1 text-white bg-[#B20937]/60 rounded disabled:opacity-50"
        >
          &laquo;
        </button>
        
        <span
          v-for="page in visiblePages"
          :key="page"
          @click="typeof page === 'number' && changePage(page)"
          class="px-2 sm:px-4 py-1 mx-1 text-sm sm:text-base font-medium rounded-md border border-[#B20937] cursor-pointer"
          :class="{
            'bg-[#B20937] text-white': page === artworksStore.pagination.currentPage,
            'bg-[#fff] text-[#8c0041]': page !== artworksStore.pagination.currentPage,
            'pointer-events-none': page === '...'
          }"
        >
          {{ page }}
        </span>
        
        <button
          @click="changePage(artworksStore.pagination.currentPage + 1)"
          :disabled="artworksStore.pagination.currentPage === artworksStore.pagination.totalPages"
          class="px-2 sm:px-4 py-1 mx-1 text-white bg-[#B20937]/60 rounded disabled:opacity-50"
        >
          &raquo;
        </button>
      </div>
    </div>

    <div v-if="artworksStore.loading" class="text-center">Chargement des œuvres d'art...</div>
    <div v-if="artworksStore.error" class="text-center text-red-500">{{ artworksStore.error }}</div>

    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
      <CardComponent
        v-for="art in artworksStore.filteredArtworks"
        :key="art.id"
        :art="art"
      />
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}

span.pointer-events-none {
  cursor: default;
}

@media (max-width: 640px) {
  .translate-y-6 {
    transform: translateY(0);
  }
}
</style>