<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "unauth-index",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity-Medium.otf");
}

@font-face {
  font-family: Neue Machina;
  src: url("../assets/font/NeueMachina-Ultrabold.woff");
}
</style>
