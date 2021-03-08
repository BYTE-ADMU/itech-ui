<template>
  <g-link :to="`/articles/${article.id}`">
    <div class="relative mx-0 sm:mx-2 bg-gray-400 rounded-none sm:rounded-lg feature-height tg">
      <div class="absolute z-30 w-full h-full px-4 sm:px-10 py-8 rounded-none sm:rounded-lg group">
        <p
          class="relative w-48 pt-24 pb-2 sm:py-3 text-2xl sm:text-3xl text-white uppercase font-neuemachina hover:opacity-100"
        >
          Featured
        </p>
        <p
          class="relative w-full py-3 text-white featured-title hover:opacity-100"
        >
          <i class="ion-alert-circled"></i> {{ article.title }}
        </p>
        <p
          class="relative py-1 text-white featured-author-name hover:opacity-100"
        >
          {{ article.author.name }}
        </p>
        <p
          class="absolute bottom-0 pt-3 pb-8 pr-10 text-white featured-description font-objectivity hover:opacity-100"
        >
          {{ article.description }}
          <!-- Description -->
        </p>
      </div>
      <g-image
        :src="article.thumbnailImage.url"
        class="relative object-cover w-full h-full rounded-none sm:rounded-lg tg"
      />
    </div>
  </g-link>
</template>

<script>
export default {
  name: "featureEntry",
  props: ["article"],
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