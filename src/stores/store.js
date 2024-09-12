import { defineStore } from 'pinia';
import { getAllData, searchData } from '@/api/api.js';

export const useArtworksStore = defineStore('artworks', {
  state: () => ({
    artworks: [],
    filteredArtworks: [],
    loading: true,
    error: null,
    pagination: {
      currentPage: 1,
      totalPages: 0,
      limit: 30,
    },
  }),

  actions: {
    async fetchArtworks(page = 1) {
      this.loading = true;
      try {
        const { artworks, pagination } = await getAllData(page, this.pagination.limit);
        this.artworks = artworks;
        this.filteredArtworks = artworks;
        this.pagination.currentPage = pagination.current_page;
        this.pagination.totalPages = pagination.total_pages;
      } catch (err) {
        this.error = 'Échec du chargement des œuvres d\'art. Veuillez réessayer plus tard.';
      } finally {
        this.loading = false;
      }
    },

    async searchArtworks(searchQuery, page = 1) {
      this.loading = true;
      try {
        const { artworks, pagination } = await searchData(searchQuery, page, this.pagination.limit);
        this.filteredArtworks = artworks;
        this.pagination.currentPage = pagination.current_page;
        this.pagination.totalPages = pagination.total_pages;
        this.error = artworks.length === 0 ? `Aucune œuvre trouvée pour "${searchQuery}"` : null;
      } catch (err) {
        this.error = 'Erreur lors de la recherche. Veuillez réessayer plus tard.';
      } finally {
        this.loading = false;
      }
    },

    changePage(page) {
      this.pagination.currentPage = page;
      if (this.searchQuery) {
        this.searchArtworks(this.searchQuery, page);
      } else {
        this.fetchArtworks(page);
      }
    },
  },
});
