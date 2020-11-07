<template>
<div class="layout">
  <Navbar />
  <slot />
  <Footer />
</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
