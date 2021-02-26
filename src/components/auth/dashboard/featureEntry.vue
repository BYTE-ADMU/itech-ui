<template>
  <g-link :to="`/articles/${article.id}`">
    <div class="relative mx-2 bg-gray-400 rounded-lg feature-height tg">
      <div class="absolute z-30 w-full h-full px-5 py-3 rounded-lg group">
        <p
          class="relative w-48 py-3 text-xl text-white uppercase font-neuemachina hover:opacity-100"
        >
          Featured
        </p>
        <p
          class="relative w-full py-3 text-3xl text-white featured-title hover:opacity-100"
        >
          <i class="ion-alert-circled"></i> {{ article.title }}
        </p>
        <p
          class="relative py-1 text-lg text-white featured-author-name hover:opacity-100"
        >
          {{ article.author.name }}
        </p>
        <p
          class="absolute bottom-0 py-3 text-white featured-description font-objectivity hover:opacity-100"
        >
          {{ article.description }}
          <!-- Description -->
        </p>
      </div>
      <g-image
        :src="article.thumbnailImage.url"
        class="relative object-cover w-full h-full rounded-lg tg"
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
  font-weight: normal;
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
</style>