<template>
<nav id="navbar" class="nav">
  <div class="container mx-auto px-10 py-5 flex justify-between items-center">
    <g-link class="nav__link" to="/"><img :src="require('@/assets/img/logo-primary.svg')" class="w-40 py-2" /></g-link>
    <g-link class="nav__link text-lg font-bold uppercase" to="/login/">Login</g-link>
  </div>
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
