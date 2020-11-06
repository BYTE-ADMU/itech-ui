<template>
<div class="layout">
  <Navbar />

  <div style="height:100vh">
    <slot />
  </div>

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
