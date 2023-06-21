    <!-- 
    <b-button href="#" variant="outline-primary" @click="editAnime">Edit</b-button>
  </b-card>

  methods: {
    editAnime() {
      // Émettre un événement personnalisé vers le composant parent (AnimeCards.vue)
      this.$emit("edit-anime", this.anime);
    },
  },
};
 --> 
 <template>
  <b-card
    :title="anime.title"
    :img-src="anime.imgUrl"
    :img-alt="`${anime.title}-Image`"
    img-top
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text>Number of episodes: {{ anime.episodes }}</b-card-text>
    <b-card-text>Status: {{ anime.status }}</b-card-text>
    <b-button v-if="!isEditing" @click="editAnime" variant="outline-primary">Edit</b-button>
    <edit-model v-else :anime="anime" @update-anime="updateAnime"></edit-model>
  </b-card>
</template>

<script>
import EditModel from "@/components/EditModel.vue";

export default {
  components: {
    EditModel,
  },
  props: {
    anime: {
      type: Object,
      default: () => ({
        title: "",
        episodes: 0,
        status: null,
        imgUrl: "",
      }),
    },
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    editAnime() {
      this.isEditing = true;
    },
    updateAnime(updatedAnime) {
      // Mettre  à jour l'anime avec les nouvelles données
      // Ici, on utilise une mutation Vuex pour mettre à jour l'anime dans le store
      console.log("Anime mis à jour :", updatedAnime);

      // Remettez l'état d'édition à false pour revenir à l'affichage de la carte
      this.isEditing = false;
    },
  },
};
</script>

<style>
</style>
