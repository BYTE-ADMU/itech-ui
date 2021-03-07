<template>
  <g-link :to="`/articles/${article.id}`">
    <div class="relative mx-0 sm:mx-2 bg-gray-400 rounded-none sm:rounded-lg feature-height tg">
      <div class="absolute z-30 w-full h-full px-10 py-8 rounded-none sm:rounded-lg group">
        <p
          class="relative w-48 pt-32 pb-3 sm:py-3 text-2xl text-white uppercase font-neuemachina hover:opacity-100"
        >
          Featured
        </p>
        <p
          class="relative w-full py-3 text-white featured-title hover:opacity-100"
        >
          <i class="ion-alert-circled"></i> {{ article.title }}
        </p>
        <p
          class="relative py-1 text-lg text-white featured-author-name hover:opacity-100"
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
  height: 350px;
}

.featured-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 41px;
}

.featured-author-name {
  font-family: Objectivity;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
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

  .featured-author-name {
    font-size: 22px;
  }

  .featured-description {
    font-size: 18px;
    bottom: 10vh;
  }
}
</style>