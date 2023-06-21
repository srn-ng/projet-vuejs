<template>
  <div>
    <!-- Formulaire de modification -->
    <b-modal @ok="SendEditedAnime" id="modal-edit-anime" ref="modal-edit-anime" title="BootstrapVue">
      <form>
        <label for="title">Title:</label>
        <input v-model="form.title" type="text" id="title" required />
        <br />
        <label for="episodes">Number of episodes:</label>
        <input v-model="form.episodes" type="number" id="episodes" required />
        <br />

        <label for="status">Status:</label>
        <select v-model="form.status" id="status" required>
          <option disabled value="">Select One</option>
          <option value="OnGoing">OnGoing</option>
          <option value="Finished">Finished</option>
        </select>
        <br />

        <label for="imgUrl">Image URL:</label>
        <input v-model="form.imgUrl" type="url" id="imgUrl" />
        <br />

      </form>
    </b-modal>
  </div>
</template>
  
  <script>
export default {
  props: {
    anime: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        title: this.anime.title,
        episodes: this.anime.episodes,
        status: this.anime.status,
        imgUrl: this.anime.imgUrl,
      },
    };
  },
  methods: {
    SendEditedAnime() {
      // Envoyer les données modifiées à l'extérieur du composant
      this.$emit("update-anime", this.form);
      this.$refs['modal-edit-anime'].hide()
    },
  },
};
</script>
  
  <style scoped>
label {
  color: aqua;
}
</style>
  