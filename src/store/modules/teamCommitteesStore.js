import axios from 'axios';

const teamCommitteesStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    teamCommittees: []
  }),

  // to handle state
  getters: {
    allTeamCommittees: (state) => state.teamCommittees,
  },

  //to handle actions
  actions: {
    getTeamCommiittees({ state, commit }) {
      axios.get(`${state.API_URL}/team-committees${state.SORT}`).then(response => {
        commit('SET_TEAMCOMMITTEES', response.data);
        return response.data;
      })
    }
  },

  // to handle mutations
  mutations: {
    SET_TEAMCOMMITTEES: (state, teamCommittees) => state.teamCommittees = teamCommittees,
  }
}

export default teamCommitteesStore;