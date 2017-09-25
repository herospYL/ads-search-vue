/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import sampleData from '../../test/sample-response';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    displayRes: [],
    displayTotalCount: 0,
    displayLoading: true,
  },
  mutations: {
    resetDisplay(state) {
      state.displayRes = [];
      state.displayTotalCount = 0;
      state.displayLoading = true;
    },
    beforeSendSearch(state) {
      state.displayLoading = true;
    },
    afterSendSearch(state, contentArray) {
      state.displayRes = contentArray;
      state.displayTotalCount = contentArray.length;
      state.displayLoading = false;
    },
  },
  actions: {
    sendSearch({ commit }, searchStr) {
// eslint-disable-next-line no-console
      console.log(searchStr);
      commit('beforeSendSearch');
      setTimeout(() => {
        commit('afterSendSearch', sampleData);
      }, 1000);
    //  Add real api call
    },
  },
});
