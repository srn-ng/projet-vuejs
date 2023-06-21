import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  animeList: []
}

const mutations = {
  saveAnime(state, animeList) {
    state.animeList = animeList;
  },
  updateAnime(state, updatedAnime) {
    // Recherchez l'anime correspondant dans la liste et mettez à jour ses propriétés
    const index = state.animeList.findIndex(anime => anime.title === updatedAnime.title);
    if (index !== -1) {
      state.animeList[index] = { ...state.animeList[index], ...updatedAnime };
    }
  }
};

const actions = {
  addAnime({ commit }, anime) {
    let myAnimeList = [...state.animeList, anime];
    commit('saveAnime', myAnimeList);
    console.log(myAnimeList); // Vérifiez la liste animeList mise à jour dans la console
  },
  updateAnime({ commit }, updatedAnime) {
    commit('updateAnime', updatedAnime);
  }
};

const getters = {
  animeList: (state) => state.animeList,

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})