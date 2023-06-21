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
    const anime_id = updatedAnime.anime_id
    delete updatedAnime["anime_id"]
    state.animeList.splice(anime_id, 1, updatedAnime);
  }
};

const actions = {
  addAnime({ commit }, anime) {
    let myAnimeList = [...state.animeList, anime];
    commit('saveAnime', myAnimeList);
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