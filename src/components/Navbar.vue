<template>
  <nav
    class="flex flex-wrap items-center justify-between px-64 py-5 bg-white shadow-md nav"
  >
    <div class="flex items-center text-white flex-no-shrink">
      <g-link class="nav__link" to="/"
        ><img
          :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
          class="w-40 py-2"
      /></g-link>
    </div>
    <div class="block lg:hidden">
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
    </div>

    <div class="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow"></div>
      <!-- <div>
      <g-link class="mx-8 text-lg font-bold uppercase nav__link" to="/login/">Topics</g-link>
    </div>
    <div>
      <g-link class="mx-8 text-lg font-bold uppercase nav__link" to="/login/">Profile</g-link>
    </div>
    <div>
      <g-link class="mx-8 text-lg font-bold uppercase nav__link" to="/login/">Calendar</g-link>
    </div> -->
      <div>
        <g-link
          class="ml-8 text-lg font-bold uppercase font-neuemachina nav__link"
          to="/login/"
          >Login</g-link
        >
      </div>
    </div>

    <!--
<div class="container flex items-center justify-between px-10 py-5 mx-auto">
  <g-link class="nav__link" to="/"><img :src="require('@/assets/img/logo-primary.svg')" class="w-40 py-2" /></g-link>
  <g-link class="text-lg font-bold uppercase nav__link" to="/login/">Login</g-link>
</div> -->
  </nav>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
});
</script>