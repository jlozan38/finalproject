import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchItem: []
  },
  getters: {
    getSearchItem: state => state.searchItem,
  },
  mutations: {
    settingSearchItem: (state, seatchItem) => (state.searchItem = seatchItem),
  },
  actions: {
    setSearchItem: ({commit, }, searchItem) =>
      commit("settingSearchItem", searchItem)
  },
  modules: {}
});
