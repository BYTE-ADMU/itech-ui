<template>
  <nav>
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
                  class="mr-4"
                  src="@/assets/img/icons/DefaultUserIcon.svg"
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
                @click="logout"
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

      <!-- START: DESKTOP USER PROFILE DROPDOWN -->
      <!-- <div
      class="absolute flex flex-wrap items-center justify-between w-screen px-4 md:px-20 nav"
    >
      <div
        class="flex flex-row-reverse flex-wrap items-center justify-between w-screen mx-auto lg:container"
      > -->
      <!-- Start:UserAccountDropdown -->

      <!-- <div
          v-if="isOpenUserDropdown"
          class="z-40 overflow-hidden bg-white shadow-md r-0 mt-7"
          style="width: 285px"
        >
          <g-link
            to="/user-profile/"
            class="flex px-4 py-4 text-sm text-gray-800 border-b hover:bg-gray-200"
          >
            <g-image
              class="mr-4"
              src="@/assets/img/icons/DefaultUserIcon.svg"
            /> -->

      <!-- <div class="overflow-hidden">
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
            @click="logout"
            class="block w-full px-4 py-4 text-sm text-left text-gray-800 uppercase border-b button-text hover:bg-gray-200"
          >
            Sign out
          </button>
        </div> -->
      <!-- End:UserAccountDropdown -->
      <!-- </div>
    </div> -->
      <!-- END: DESKTOP USER PROFILE DROPDOWN -->
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
    //END: USER RELATED
  },

  methods: {
    // START: LOGOUT
    async logout() {
      if (confirm("Are you sure you want to log out? ")) {
        await this.$store.dispatch("userStore/logout", this.user);
        if (!this.$store.state.userStore.isAuthenticated) {
          alert("You have logged out!");
          this.$router.replace("/login/");
        }
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
</style>