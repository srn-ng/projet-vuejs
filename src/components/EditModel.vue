<template>
    <div>
      <!-- Formulaire de modification -->
      <form @submit="submitForm">
        <label for="title">Title:</label>
        <input v-model="form.title" type="text" id="title" required>
  
        <label for="episodes">Number of episodes:</label>
        <input v-model="form.episodes" type="number" id="episodes" required>
  
        <label for="status">Status:</label>
        <select v-model="form.status" id="status" required>
          <option disabled value="">Select One</option>
          <option value="OnGoing">OnGoing</option>
          <option value="Finished">Finished</option>
        </select>
  
        <label for="imgUrl">Image URL:</label>
        <input v-model="form.imgUrl" type="url" id="imgUrl">
  
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      anime: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        form: {
          title: this.anime.title,
          episodes: this.anime.episodes,
          status: this.anime.status,
          imgUrl: this.anime.imgUrl
        }
      };
    },
    methods: {
      submitForm(event) {
        event.preventDefault();
        // Envoyer les données modifiées à l'extérieur du composant
        this.$emit("update-anime", this.form);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles CSS spécifiques au composant EditModel.vue */
  </style>
  