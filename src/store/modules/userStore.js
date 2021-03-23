import axios from 'axios';

const userStore = {
  namespaced: true,
  // START: STATE ===== ===== ===== ===== =====
  state: () => ({
    API_URL: 'https://calm-everglades-39473.herokuapp.com',

    // Start: User Information
    token: '',
    user: {},
    // user = {
    //   id: data.user.id,
    //   username: data.user.username,
    //   email: data.user.email,
    //   year: data.user.year,
    //   course: data.user.course,
    //   profileImage: data.user.profileImage.url
    // }
    isAuthenticated: false,
    // Emd: User Information

    //Start: User Experience
    userSearch: "",
    isOpenSearchDropdown: false,
    isOpenUserDropdown: false,
    //End: User Experience
  }),
  // END: STATE ===== ===== ===== ===== =====


  //START: ACTIONS ===== ===== ===== ===== =====
  actions: {
    //Start: Actions for User Experience
    updateUserSearch({ state, commit }, value) {
      commit('setUserSearch', value);
    },

    updateIsOpenSearchDropdown({ state, commit }, value) {
      commit('setIsOpenSearchDropdown', value);
    },

    updateIsOpenUserDropdown({ state, commit }, value) {
      commit('setIsOpenUserDropdown', value);
    },
    //End: Actions for User Experience

    // Start: Login
    async login({ state, commit }, { email, password }) {
      try {
        const { data } = await axios.post(`${state.API_URL}/auth/local`, {
          identifier: email,
          password: password,
        });

        commit('setToken', data.jwt); //Set Current User JWT
        commit('setUser', data.user); //Set Current User Data
        commit('toggleAuthenticated'); //Set Current User Status

      } catch (e) { console.log(e) }
    },
    // End: Login

    // Start: Logout
    async logout({ state, commit }) { commit('toggleLogout'); },
    // End: Logout

    // Start: Register
    async register({ state, commit }, newUser) {
      try {
        const res = await axios.post(`${state.API_URL}/auth/local/register`, newUser)
      } catch (e) { console.log(e) }
    },
    // End: Register

    // Start: Get User
    getUser({ state, commit }) {
      axios.get(`${state.API_URL}/users/${state.user.id}`)
        .then((response) => {
          console.log("Get User", response.data)
          commit('setUser', response.data); //Set Current User Data
        })
        .catch((error) => console.log(error));
    },
    // End: Get User


    // Start: Update User
    updateUser({ state, commit }, updatedUser) {
      axios.put(`${state.API_URL}/users/${state.user.id}`, updatedUser)
        .then((response) => {
          commit('setUser', response.data); //Set Current User Data
        })
        .catch((error) => console.log(error));
    },
    // End: Update User

    //Start:Update User profileImage
    async updateUserImage({ state, commit }, imageFile) {
      const oldUserImageId = (state.user.profileImage !== null) ? state.user.profileImage.id : null; //Old User Profile Image Id for Deletion

      //Formatting Data of New User Profile Image
      const updatedUserImage = new FormData();
      updatedUserImage.append("files", imageFile);
      updatedUserImage.append("path", `user/${state.user.id}`);
      updatedUserImage.append("refId", state.user.id);
      updatedUserImage.append("ref", "user");
      updatedUserImage.append("field", "profileImage");
      updatedUserImage.append("source", "users-permissions");

      try {
        //Add and Replace User Profile Image
        const updateUserImageResponse = await axios.post(
          `${state.API_URL}/upload`,
          updatedUserImage
        );

        //Delete Old User Profile Image IF user has before
        if (oldUserImageId !== null) {
          const deleteOldUserImageResponse = await axios.delete(`${state.API_URL}/upload/files/${oldUserImageId}`);
        }

        return updateUserImageResponse.data[0];
      } catch (error) {
        console.log(error);
      }
    },
    //End:Update User profileImage


  },
  //END: ACTIONS ===== ===== ===== ===== =====

  // START: MUTATIONS ===== ===== ===== ===== =====
  mutations: {
    // Start: User Information
    setToken(state, token) { state.token = token },
    setUser(state, user) { state.user = user },
    toggleAuthenticated(state) { state.isAuthenticated = true },
    toggleLogout(state) { state.isAuthenticated = false },
    // End: User Information

    //Start: User Experience
    setUserSearch(state, value) { state.userSearch = value },
    setIsOpenSearchDropdown(state, value) { state.isOpenSearchDropdown = value },
    setIsOpenUserDropdown(state, value) { state.isOpenUserDropdown = value },
    //End: User Experience
  }
  // END: MUTATIONS ===== ===== ===== ===== =====
}
export default userStore;