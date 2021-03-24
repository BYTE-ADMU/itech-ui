import axios from 'axios';

const itechStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    teamCommittees: [],
    teamMembers: []
  }),

  // to handle state
  getters: {
    allTeamCommittees: (state) => state.teamCommittees,
    allTeamMembers: (state) => state.teamMembers,
  },

  //to handle actions
  actions: {
    getTeamCommiittees({ state, commit }) {
      axios.get(`${state.API_URL}/team-committees${state.SORT}`).then(response => {
        commit('SET_TEAMCOMMITTEES', response.data);
        return response.data;
      })
    },

    getTeamMembers({ state, commit }) {
      axios.get(`${state.API_URL}/team-members${state.SORT}`).then(response => {
        commit('SET_TEAMMEMBERS', response.data);
        return response.data;
      })
    }
  },

  // to handle mutations
  mutations: {
    SET_TEAMCOMMITTEES: (state, teamCommittees) => state.teamCommittees = teamCommittees,
    SET_TEAMMEMBERS: (state, teamMembers) => state.teamMembers = teamMembers,
  }
}

export default itechStore;