import { defineStore } from 'pinia';
import { getAllData } from '@/api/api.js'; 

export const useArtworksStore = defineStore('artworks', {
  state: () => ({
    artworks: [],
    loading: true,
    error: null,
    filteredArtworks: []
  }),

  actions: {
    async fetchArtworks() {
      this.loading = true;
      try {
        this.artworks = await getAllData();
        this.filteredArtworks = this.artworks;
      } catch (err) {
        this.error = 'Échec du chargement des œuvres d\'art. Veuillez réessayer plus tard.';
      } finally {
        this.loading = false;
      }
    },

    searchArtworks(searchQuery) {
      if (!searchQuery) {
        this.filteredArtworks = this.artworks;
        return;
      }

      const query = searchQuery.toLowerCase();

      this.filteredArtworks = this.artworks.filter(art => {
        const matchesId = art.id.toString().includes(query);
        const matchesTitle = art.title.toLowerCase().includes(query);
        const matchesArtist = art.artist.toLowerCase().includes(query);
        const matchesThemes = art.themes.some(theme => theme.toLowerCase().includes(query));

        return matchesId || matchesTitle || matchesArtist || matchesThemes;
      });

      if (this.filteredArtworks.length === 0) {
        this.error = `Aucune œuvre trouvée pour "${searchQuery}"`;
      } else {
        this.error = null;
      }
    }
  }
});
