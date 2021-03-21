<template>
  <nav>
    <!-- START: MODAL -->
    <div id="logoutModal" class="fixed z-50 hidden w-screen h-screen">
      <div class="table-cell text-center align-middle bg-modal">
        <div class="relative py-16 mx-auto bg-white border border-white rounded-xl modal-size">
          <button @click="closeModal" class="w-full">
            <g-image
              :src="require('@/assets/img/unauth/close-modal-vector.svg')"
              class="absolute x-icon" style="right: 23px; top: 23px"/>
          </button>
          <h1 class="px-5 mb-10 text-xl font-neuemachina sm:text-2xl md:text-4xl sm:mb-12">
            Are you sure you want to sign out?
          </h1>
          <!-- class="flex flex-col justify-center px-20 align-middle sm:flex-row" -->
          <div class="flex flex-col-reverse w-2/3 mx-auto sm:grid sm:grid-cols-2 lg:w-1/2">
            <button @click="closeModal" class="px-6 py-3 mx-auto mt-2 text-sm font-bold cancel_button sm:text-base sm:mt-0">
              Cancel
            </button>
            <button @click="logout" class="px-6 py-3 mx-auto text-sm font-bold signout_button sm:text-base">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- logout -->
    <div id="successfulLogout" class="fixed z-50 hidden w-screen h-screen">
      <div class="table-cell text-center align-middle bg-modal">
        <div class="relative py-16 mx-auto bg-white border border-white rounded-xl modal-size">
          <g-link @click="closeSuccess" to="/login/" class="w-full">
            <g-image
              :src="require('@/assets/img/unauth/close-modal-vector.svg')"
              class="absolute x-icon" style="right: 23px; top: 23px"/>
          </g-link>
          <h1 class="px-6 text-xl font-neuemachina sm:text-2xl md:text-4xl">
            You have signed out.
          </h1>
        </div>
      </div>
    </div>
    <!-- END: MODAL -->
    <!-- START: DESKTOP MODE -->

    <div
      class="flex flex-wrap items-center justify-between w-screen px-4 py-2 bg-white shadow-md md:px-20 nav"
    >

      <div
        class="flex flex-wrap items-center justify-between w-screen mx-auto lg:container"
      >
        <!-- START: ITECH LOGO BUTTON -->
        <div class="flex items-center text-white flex-no-shrink">
          <!-- Start: If User isn't Authenticated -->
          <g-link v-if="!isAuthenticated" to="/">
            <g-image
              :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
              class="w-40 py-2"
            />
          </g-link>
          <!-- End: If User isn't Authenticated -->

          <!-- Start: If User is Authenticated -->
          <g-link v-else to="/dashboard">
            <g-image
              :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
              class="w-40 py-2"
            />
          </g-link>
          <!-- End: If User is Authenticated -->
        </div>
        <!-- END: ITECH LOGO BUTTON -->

        <div class="flex items-center flex-grow ml-8">
          <!-- START: SEARCH BAR / EMPTY  -->
          <div class="flex items-center flex-grow">
            <!-- Start: If User isn't Authenticated -->
            <!-- <div v-if="!isAuthenticated" class="mx-auto"></div> -->
            <!-- End: If User isn't Authenticated -->

            <!-- Start: If User is Authenticated -->
            <div class="relative flex-grow mx-auto">
              <SearchBar />
            </div>
            <!-- End: If User is Authenticated -->
          </div>
          <!-- END: SEARCH BAR / EMPTY  -->

          <!-- START: CATEGORY BUTTONS -->
          <div class="hidden xl:block">
            <g-link
              to="/categories/hacker"
              class="ml-10 font-bold xl:ml-16 text-md font-objectivity"
            >
              Hacker
            </g-link>
            <g-link
              to="/categories/hipster"
              class="ml-10 font-bold xl:ml-16 text-md font-objectivity"
            >
              Hipster
            </g-link>
            <g-link
              to="/categories/hustler"
              class="ml-10 font-bold xl:ml-16 text-md font-objectivity"
            >
              Hustler
            </g-link>
          </div>
          <!-- END: CATEGORY BUTTONS -->

          <!-- START: LOGIN/USER BUTTON -->
          <!-- Start: If User is NOT Authenticated -->
          <div v-if="!isAuthenticated">
            <g-link
              class="ml-10 xl:ml-16 block px-8 py-3 text-sm form_button ..."
              to="/login/"
            >
              Log In
            </g-link>
          </div>
          <!-- End: If User is NOT Authenticated -->

          <!-- Start: If User IS Authenticated -->
          <div class="relative inline-block ml-8 xl:ml-10" v-else>
            <button @click="toggleUserDropdown" class="p-5">
              <!-- Start: UserAccountIcon -->
              <g-image class="" src="@/assets/img/icons/UserAccount.svg" />
              <!-- End: UserAccountIcon -->
            </button>

            <!-- Start:UserAccountDropdown -->

            <div
              v-if="isOpenUserDropdown"
              class="absolute right-0 z-40 mt-2 overflow-hidden bg-white shadow-md"
              style="width: 285px"
            >
              <g-link
                to="/user-profile/"
                class="flex px-4 py-4 text-sm text-gray-800 border-b hover:bg-gray-200"
              >
                <g-image
                  class="mr-4 rounded-full w-16 h-16"
                  :src="userProfileImage"
                />

                <div class="overflow-hidden">
                  <p class="welcome-back">Welcome back,</p>
                  <p class="truncate username ...">{{ username }}</p>
                </div>
              </g-link>
              <g-link
                to="/my-list/"
                class="block w-full px-4 py-4 text-sm text-gray-800 uppercase border-b button-text hover:bg-gray-200"
              >
                My List
              </g-link>
              <g-link
                to="/user-profile/"
                class="block w-full px-4 py-4 text-sm text-gray-800 uppercase border-b button-text hover:bg-gray-200"
              >
                My Account
              </g-link>
              <button
                @click="logoutModal"
                class="block w-full px-4 py-4 text-sm text-left text-gray-800 uppercase border-b button-text hover:bg-gray-200"
              >
                Sign out
              </button>
            </div>
            <!-- End:UserAccountDropdown -->

            <!-- End: If User IS Authenticated -->
            <!-- END: LOGIN/USER BUTTON -->
          </div>
        </div>
      </div>
      <!-- END: DESKTOP MODE -->
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
import SearchBar from "./SearchBar";

export default Vue.extend({
  name: "Navbar",

  components: {
    SearchBar,
  },

  computed: {
    //START: USER RELATED
    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },
    username() {
      return this.$store.state.userStore.user.username;
    },
    isOpenUserDropdown() {
      return this.$store.state.userStore.isOpenUserDropdown;
    },
    userProfileImage() {
      try {
        const data = this.$store.state.userStore.user.profileImage.url;
        return data;
      } catch (error) {
        return require("../assets/img/icons/DefaultUserIcon.svg");
      }
    }
    //END: USER RELATED
  },

  methods: {
    logoutModal() {
      const modal = document.getElementById('logoutModal');
      modal.classList.remove('hidden');
      modal.classList.add('table');
    },
    closeModal() {
      const modal = document.getElementById('logoutModal');
      modal.classList.add('hidden');
    },
    closeSuccess() {
      const modal = document.getElementById('successfulLogout');
      modal.classList.add('hidden');
    },
    // START: LOGOUT
    async logout() {
      const modal = document.getElementById('logoutModal');
      modal.classList.add('hidden');
      await this.$store.dispatch("userStore/logout", this.user);
      if (!this.$store.state.userStore.isAuthenticated) {
        const successfulLogout = document.getElementById('successfulLogout');
        successfulLogout.classList.remove('hidden');
        successfulLogout.classList.add('table');
        // alert("You have logged out!");
        // this.$router.replace("/login/");
      }
    },
    // END: LOGOUT

    toggleUserDropdown() {
      this.$store.dispatch(
        "userStore/updateIsOpenUserDropdown",
        !this.isOpenUserDropdown
      );
    },
  },
});
</script>

<style scoped>
.welcome-back {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
}

.username {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
}

.button-text {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
}


.signout_button {
  background: #ff0000;
  border-radius: 34px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #f9f7f2;
  transition: all ease-in-out 200ms;
  outline: none;
}

.signout_button:hover {
  background-color: #b80202;
}

.cancel_button {
  background: #64c0c1;
  border-radius: 34px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  color: #f9f7f2;
  transition: all ease-in-out 200ms;
  outline: none;
}

.cancel_button:hover {
  background-color: #40a5a6;
}

.mobile-menu {
  position: fixed;
  width: 50px;
  height: 50px;
  top: 4%;
  left: 4%;
  background: #f9f7f2;
  box-shadow: 0px 16px 16px rgba(50, 50, 71, 0.08),
    0px 24px 32px rgba(50, 50, 71, 0.08);
}

@media screen and (max-width: 640px) {
  .signout_button, .cancel_button {
    font-size: 14px;
    width: 110px;
  }
  
}

</style>