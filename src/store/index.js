import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.setItem('token', process.env.VUE_APP_TOKEN),
    response: [],

  },
  getters: {
    returnToken: state => state.token,
    returnResponse: state => state.response
  },
  mutations: {
    responseMutation(state, response) {
      state.response = response;
    },

  },
  actions: {
    fetchQuestions({
      commit
    }) {
      return new Promise((resolve, reject) => {
        //process.env.VUE_APP_URL can be found in .env file, it's called environment variable
        const url = `${process.env.VUE_APP_URL}?x-access-token=${localStorage.getItem('token')}`;

        axios.get(`${url}`).then((response) => {
          response.data.questions
          commit('responseMutation',
            Object.assign({}, response.data.questions)); // commit a mutation and also convert the response array to object

          resolve();
        }).catch(() => {
          reject();
        })
      })
    }
  }
})