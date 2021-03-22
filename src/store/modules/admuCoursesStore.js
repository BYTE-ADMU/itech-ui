import axios from 'axios';

const admuCoursesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    admuCourses: []
  }),

  // to handle state
  getters: {
    allAdmuCourses: (state) => state.admuCourses,
  },

  //to handle actions
  actions: {
    getAdmuCourses({ state, commit }) {
      axios.get(`${state.API_URL}/admu-courses${state.SORT}`).then(response => {
        commit('SET_ADMUCOURSES', response.data);
        return response.data;
      })
    }
  },

  // to handle mutations
  mutations: {
    SET_ADMUCOURSES: (state, admuCourses) => state.admuCourses = admuCourses,
  }
}

export default admuCoursesStore;