import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  test: 'hello world'
};

export default new Vuex.Store({
  state
})
