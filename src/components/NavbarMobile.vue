<template>
  <nav>
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
              to="/my-list/"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              My List
            </g-link>
            <g-link
              v-if="isAuthenticated"
              to="/user-profile/"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              My Account
            </g-link>

            <button
              v-if="isAuthenticated"
              @click="logout"
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

    openUserDropdown() {
      this.$store.dispatch("userStore/updateIsOpenUserDropdown", true);
    },
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
</style>