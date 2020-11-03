<template>
  <div id="app" class="flex flex-col justify-between">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
});
</script>
