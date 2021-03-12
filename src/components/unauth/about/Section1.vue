<template>
  <div
    class="relative mx-0 bg-gray-400 rounded-none sm:mx-2 sm:rounded-lg feature-height tg"
  >
    <div
      class="absolute z-30 w-full h-full px-4 py-8 rounded-none sm:px-10 sm:rounded-lg group"
    >
      <p
        class="relative w-48 pt-24 pb-2 text-2xl text-white uppercase sm:py-3 sm:text-3xl font-neuemachina hover:opacity-100 bg-fountain-blue-500"
      >
        Featured
      </p>
    </div>
    <g-image
      src="@/assets/img/unauth/about/section1bg.svg"
      class="relative object-cover w-full h-full rounded-none sm:rounded-lg tg"
    />
  </div>
</template>

<script>
export default {
  name: "About-Section1",
};
</script>

<style scoped>
.feature-height {
  height: 446px;
}

.featured-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 37.08px;
}

.featured-author-name {
  font-family: Objectivity;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24.72px;
}

.featured-description {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
}

@media screen and (max-width: 640px) {
  .feature-height {
    height: 100vh;
  }

  .featured-title {
    font-size: 20px;
    line-height: 28px;
  }

  .featured-author-name {
    font-size: 16px;
    line-height: 25px;
  }

  .featured-description {
    font-size: 14px;
    bottom: 30vh;
    max-height: 145px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
}

@media screen and (max-width: 480px) {
  .featured-description {
    font-size: 14px;
    bottom: 14vh;
    max-height: 145px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
}
</style>