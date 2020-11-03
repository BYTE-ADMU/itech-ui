<template>
    <nav id="navbar">
        <div class="container mx-auto px-10 flex justify-between items-center">
            <img :src="require('@/assets/img/logo-primary.svg')"
            class="w-48 py-2" />
            <a href="#" class="text-lg font-bold uppercase">Login</a>
        </div>
    </nav>
</template>

<script lang="ts">
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
