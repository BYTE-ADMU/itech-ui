<template>
<div class="layout">
  <nav id="navbar">
    <div class="container mx-auto px-10 flex justify-between items-center">
      <img :src="require('@/assets/img/logo-primary.svg')" class="w-48 py-2" />
      <a href="#" class="text-lg font-bold uppercase">Login</a>
    </div>
  </nav>

  <footer class="bg-hacker-primary">
    <div class="container mx-auto px-20 flex flex-col">
      <div class="flex justify-between items-center border-t">
        <img :src="require('@/assets/img/logo-white.svg')" class="w-32 py-4" />
        <p class="text-white text-sm font-light tracking-wide">
          © 2020 ITECH. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  <!-- <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Home</g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
    </nav>
  </header>-->
  <slot />
  <Navbar />
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
import Navbar from "../components/Navbar.vue";
</script>

<style>

</style>
