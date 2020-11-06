<template>
<nav class="nav flex items-center justify-between flex-wrap bg-white px-64 py-5 shadow-md">

  <div class="flex items-center flex-no-shrink text-white">
    <g-link class="nav__link" to="/"><img :src="require('@/assets/img/logo-primary.svg')" class="w-40 py-2" /></g-link>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
      <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>

  <div class="w-full block flex-grow lg:flex lg:items-center  lg:w-auto">
    <div class="text-sm lg:flex-grow"></div>
    <!-- <div>
      <g-link class="nav__link text-lg font-bold uppercase mx-8" to="/login/">Topics</g-link>
    </div>
    <div>
      <g-link class="nav__link text-lg font-bold uppercase mx-8" to="/login/">Profile</g-link>
    </div>
    <div>
      <g-link class="nav__link text-lg font-bold uppercase mx-8" to="/login/">Calendar</g-link>
    </div> -->
    <div>
      <g-link class="nav__link text-lg font-bold uppercase ml-8" to="/login/">Login</g-link>
    </div>
  </div>


  <!--
<div class="container mx-auto px-10 py-5 flex justify-between items-center">
  <g-link class="nav__link" to="/"><img :src="require('@/assets/img/logo-primary.svg')" class="w-40 py-2" /></g-link>
  <g-link class="nav__link text-lg font-bold uppercase" to="/login/">Login</g-link>
</div> -->
</nav>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
});
</script>

<style scoped>
#navbar {
  background: #F2F4FA;
}
</style>
