import axios from 'axios';

const teamMembersStore = {
  namespaced: true,

  // to handle state
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',
    SORT: '?_sort=published_at',
    teamMembers: []
  }),

  // to handle state
  getters: {
    allTeamMembers: (state) => state.teamMembers,
  },

  //to handle actions
  actions: {
    getTeamMembers({ state, commit }) {
      axios.get(`${state.API_URL}/team-members${state.SORT}`).then(response => {
        commit('SET_TEAMMEMBERS', response.data);
        return response.data;
      })
    }
  },

  // to handle mutations
  mutations: {
    SET_TEAMMEMBERS: (state, teamMembers) => state.teamMembers = teamMembers,
  }
}

export default teamMembersStore;