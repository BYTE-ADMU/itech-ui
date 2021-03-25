<template>
  <nav>
    <!-- START: MODAL -->
    <div
      id="logoutModal"
      ref="logoutModal"
      class="fixed hidden w-screen h-screen logout-modal"
    >
      <div class="table-cell text-center align-middle bg-modal">
        <div
          class="relative py-16 mx-auto my-auto align-middle bg-white border border-white rounded-xl modal-size"
        >
          <button @click="closeModal" class="w-full">
            <g-image
              :src="require('@/assets/img/unauth/close-modal-vector.svg')"
              class="absolute x-icon"
              style="right: 23px; top: 23px"
            />
          </button>
          <h1
            class="px-5 mb-10 text-xl font-neuemachina sm:text-2xl md:text-4xl sm:mb-12"
          >
            Are you sure you want to sign out?
          </h1>
          <!-- class="flex flex-col justify-center px-20 align-middle sm:flex-row" -->
          <div
            class="flex flex-col-reverse w-2/3 mx-auto sm:grid sm:grid-cols-2 lg:w-1/2"
          >
            <button
              @click="closeModal"
              class="px-6 py-3 mx-auto mt-2 text-sm font-bold cancel_button sm:text-base sm:mt-0"
            >
              Cancel
            </button>
            <button
              @click="logout"
              class="px-6 py-3 mx-auto text-sm font-bold signout_button sm:text-base"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- logout -->
    <div
      id="successfulLogout"
      ref="successfulLogout"
      class="fixed hidden w-screen h-screen logout-modal"
    >
      <div
        class="table-cell w-screen h-screen text-center align-middle bg-modal"
      >
        <div
          class="relative py-16 mx-auto bg-white border border-white rounded-xl modal-size"
        >
          <g-link @click="closeSuccess" to="/login/" class="w-full">
            <g-image
              :src="require('@/assets/img/unauth/close-modal-vector.svg')"
              class="absolute x-icon"
              style="right: 23px; top: 23px"
            />
          </g-link>
          <h1 class="px-6 text-xl font-neuemachina sm:text-2xl md:text-4xl">
            You have signed out.
          </h1>
        </div>
      </div>
    </div>
    <!-- END: MODAL -->
    <!-- START: MOBILE MODE -->
    <button
      @click="isOpenMobileMenu = !isOpenMobileMenu"
      class="fixed z-50 rounded-full mobile-menu"
    >
      <g-image
        v-if="!isOpenMobileMenu"
        class="p-2"
        style="width: 120px"
        src="@/assets/img/icons/MenuIcon.svg"
      />
      <g-image
        v-else
        class="p-2"
        style="width: 120px"
        src="@/assets/img/icons/CloseIcon.svg"
      />
    </button>

    <!-- END: MOBILE MODE -->

    <div
      v-if="isOpenMobileMenu"
      class="flex flex-col block overflow-y-auto bg-white lg:hidden"
    >
      <div
        class="fixed z-40 w-screen h-auto min-h-screen pt-24 pb-2 bg-white nav"
      >
        <!-- START: SEARCH BAR / EMPTY  -->
        <div class="flex flex-none flex-grow px-4 sm:px-32">
          <!-- Start: If User is Authenticated -->
          <div class="relative flex-grow mx-auto">
            <SearchBar />
          </div>
          <!-- End: If User is Authenticated -->
        </div>
        <!-- END: SEARCH BAR / EMPTY  -->

        <div
          style="height: calc(100vh - 150px)"
          class="overflow-y-auto oveflow-x-hidden"
        >
          <div
            class="grid flex-grow h-auto grid-cols-1 gap-10 pt-10 pb-24 mx-auto"
          >
            <!-- START: CATEGORY BUTTONS -->
            <g-link
              to="/categories/hacker"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              Hacker
            </g-link>
            <g-link
              to="/categories/hipster"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              Hipster
            </g-link>
            <g-link
              to="/categories/hustler"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              Hustler
            </g-link>
            <!-- END: CATEGORY BUTTONS -->

            <!-- START: LOGIN/USER BUTTON -->
            <!-- Start: If User is NOT Authenticated -->
            <div v-if="!isAuthenticated">
              <g-link
                class="mx-auto block px-8 py-3 text-xl form_button ..."
                to="/login/"
                style="max-width: 150px"
              >
                Log In
              </g-link>
            </div>
            <!-- End: If User is NOT Authenticated -->
            <!-- Start: If User IS Authenticated -->

            <g-link
              v-if="isAuthenticated"
              to="/user/saved-list/"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              My List
            </g-link>
            <g-link
              v-if="isAuthenticated"
              to="/user/account/"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              My Account
            </g-link>

            <button
              v-if="isAuthenticated"
              @click="logoutModal"
              class="mx-auto block px-8 py-3 text-xl form_button ..."
              to="/login/"
              style="max-width: 150px"
            >
              Log out
            </button>
            <!-- End: If User is NOT Authenticated -->
            <!-- END: LOGIN/USER BUTTON -->
          </div>
        </div>
        <!-- START: ITECH LOGO BUTTON -->
        <div class="fixed bottom-0 w-full py-4 bg-white">
          <!-- Start: If User isn't Authenticated -->
          <g-link v-if="!isAuthenticated" to="/">
            <g-image
              class="mx-auto text-xl font-bold font-objectivity"
              :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
              style="max-width: 150px"
            />
          </g-link>
          <!-- End: If User isn't Authenticated -->
          <!-- Start: If User is Authenticated -->
          <g-link class="w-full" v-else to="/dashboard">
            <g-image
              class="mx-auto text-xl font-bold font-objectivity"
              :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
              style="max-width: 150px"
            />
          </g-link>
          <!-- End: If User is Authenticated -->
        </div>
        <!-- END: ITECH LOGO BUTTON -->
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";
import SearchBar from "./SearchBar";

export default Vue.extend({
  name: "NavbarMobile",

  components: {
    SearchBar,
  },

  data() {
    return {
      isOpenMobileMenu: false,
    };
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
    //END: USER RELATED
  },

  methods: {
    logoutModal() {
      // const modal = document.getElementById("logoutModal");
      const modal = this.$refs.logoutModal;
      modal.classList.remove("hidden");
      modal.classList.add("table");
    },
    closeModal() {
      // const modal = document.getElementById("logoutModal");
      const modal = this.$refs.logoutModal;
      modal.classList.add("hidden");
    },
    closeSuccess() {
      // const modal = document.getElementById("successfulLogout");
      const modal = this.$refs.successfulLogout;
      modal.classList.add("hidden");
    },
    // START: LOGOUT
    async logout() {
      // const modal = document.getElementById("logoutModal");
      const modal = this.$refs.logoutModal;
      modal.classList.add("hidden");
      await this.$store.dispatch("userStore/logout", this.user);
      if (!this.$store.state.userStore.isAuthenticated) {
        // const successfulLogout = document.getElementById("successfulLogout");
        const successfulLogout = this.$refs.successfulLogout;
        successfulLogout.classList.remove("hidden");
        successfulLogout.classList.add("table-cell");
        // alert("You have logged out!");
        // this.$router.replace("/login/");
      }
    },
    // END: LOGOUT
  },
});
</script>

<style scoped>
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

.logout-modal {
  z-index: 1000;
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

@media screen and (max-width: 640px) {
  .signout_button,
  .cancel_button {
    font-size: 14px;
    width: 110px;
  }
}
</style>