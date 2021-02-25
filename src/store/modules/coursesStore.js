import axios from 'axios';

const coursesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    courses: []
  }),

  // to handle state
  getters: {
    allCourses: (state) => state.courses,
  },

  //to handle actions
  actions: {
    async getCourses({ state, commit }) {
      await axios.get(`${state.API_URL}/courses${state.SORT}`)
        .then(response => {
          commit('SET_COURSES', response.data.reverse())
        })
    }
  },

  // to handle mutations
  mutations: {
    SET_COURSES: (state, courses) => state.courses = courses,
  }
}

export default coursesStore;