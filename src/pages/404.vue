<template>
  <div>
    <div class="flex sm:justify-center sm:mx-20">
      <g-image src="../assets/img/404.svg" class="notFoundDesktop"></g-image>
      <g-image src="../assets/img/404mobile.svg" class="notFoundMobile w-full"></g-image>

    </div>

    <g-link to="/dashboard" class="w-auto">
      <button class="block mx-auto mt-10 px-8 pb-3 pt-4 form_button uppercase font-objectivity ...">
        Back To Home
      </button>
    </g-link>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Not Found",
  },
}
</script>

<style scoped>
.notFoundMobile {
  display: none;
}

@media screen and (max-width: 640px) {
  .notFoundMobile {
    display: block;
  }

  .notFoundDesktop {
    display: none;
  }
}
</style>