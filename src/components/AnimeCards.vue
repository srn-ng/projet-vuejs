

<template>
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4" v-for="(anime, index) in animeList" :key="index">
      <anime-card :anime="anime" :anime_id="index" @edit-anime="editAnime"></anime-card>
    </div>
    <b-modal v-if="selectedAnime" v-model="editModalVisible" @ok="updateAnime">
      <anime-form :anime="selectedAnime"></anime-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AnimeCard from "./AnimeCard.vue";
import AnimeForm from "./AnimeForm.vue";

export default {
  components: {
    AnimeCard,
    AnimeForm,
  },
  computed: {
    ...mapGetters(["animeList"]),
  },
  data() {
    return {
      selectedAnime: null,
      editModalVisible: false,
    };
  },
  methods: {
    editAnime(anime) {
      // Mettre à jour l'anime sélectionné
      this.selectedAnime = anime;
      // Afficher le modal d'édition
      this.editModalVisible = true;
    },
    updateAnime() {
      // Effectuer la mise à jour de l'anime dans logique d'application
      // Utilisez une mutation Vuex pour mettre à jour l'anime dans le store
      this.$store.commit("updateAnime", this.selectedAnime);
      // Masquer le modal d'édition
      this.editModalVisible = false;
      // Réinitialiser l'anime sélectionné
      this.selectedAnime = null;
    },
  },
};
</script>

<style>
</style>
