<template>
  <nav
    class="flex flex-wrap items-center justify-between w-screen px-20 py-5 bg-white shadow-md nav"
  >
    <div
      class="flex flex-wrap items-center justify-between w-screen mx-auto lg:container"
    >
      <!-- LINK CONDITION START -->
      <div class="flex items-center text-white flex-no-shrink">
        <g-link v-if="!isAuthenticated" class="nav__link" to="/">
          <g-image
            :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
            class="w-40 py-2"
          />
        </g-link>

        <g-link v-else class="nav__link" to="/dashboard">
          <g-image
            :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
            class="w-40 py-2"
          />
        </g-link>
      </div>
      <!-- LINK CONDITION END -->
      <!-- <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
      >
        <svg
          class="w-3 h-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div> -->

      <div class="flex items-center flex-grow w-auto">
        <div class="flex-grow text-sm"></div>

        <div v-if="!isAuthenticated">
          <g-link
            class="block px-8 py-3 text-sm form_button ... nav__link"
            to="/login/"
          >
            Log In
          </g-link>
        </div>
        <div class="flex" v-else>
          <!-- <g-link
          to="/discover/"
          class="mx-8 font-bold uppercase text-md font-neuemachina nav__link"
        >
          Discover
        </g-link>
        <g-link
          to="/categories/hacker/"
          class="mx-8 font-bold uppercase text-md font-neuemachina nav__link"
        >
          Hacker
        </g-link>
        <g-link
          to="/categories/hipster/"
          class="mx-8 font-bold uppercase text-md font-neuemachina nav__link"
        >
          Hipster
        </g-link>

        <g-link
          to="/categories/hustler/"
          class="mx-8 font-bold uppercase text-md font-neuemachina nav__link"
        >
          Hustler
        </g-link> -->
          <div class="relative p-4 hover-trigger nav__link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.8C8 6.59086 9.79086 4.8 12 4.8C14.2091 4.8 16 6.59086 16 8.8C16 11.0091 14.2091 12.8 12 12.8C9.79086 12.8 8 11.0091 8 8.8Z"
                fill="#151316"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM1.6 12C1.6 6.25624 6.25624 1.6 12 1.6C17.7438 1.6 22.4 6.25624 22.4 12C22.4 14.9593 21.164 17.6299 19.1801 19.5238C18.9385 16.6538 16.5324 14.4 13.6 14.4H10.4C7.46758 14.4 5.06152 16.6538 4.81995 19.5238C2.83601 17.6299 1.6 14.9593 1.6 12Z"
                fill="#151316"
              />
            </svg>

            <div
              class="absolute right-0 z-20 mt-2 overflow-hidden bg-white rounded-md shadow-xl hover-target"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-800 border-b hover-trigger hover:bg-gray-200"
                >{{ identifier }}</a
              >
              <button
                @click="logout"
                class="block w-full px-4 py-2 text-sm text-right text-gray-800 border-b hover-trigger hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",

  computed: {
    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },
    identifier() {
      return this.$store.state.userStore.user.email;
    },
  },

  methods: {
    async logout() {
      if (confirm("Are you sure you want to log out? ")) {
        await this.$store.dispatch("userStore/logout", this.user);
        if (!this.$store.state.userStore.isAuthenticated) {
          alert("You have logged out!");
          this.$router.replace("/login/");
        }
      }
    },
  },
});
</script>

<style>
.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}
</style>