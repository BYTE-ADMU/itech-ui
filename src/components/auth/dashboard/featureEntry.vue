<template>
  <g-link :to="`/articles/${article.id}`">
    <div class="relative mx-2 bg-gray-400 rounded-lg feature-height tg">
      <div class="absolute z-30 w-full h-full px-5 py-3 rounded-lg group">
        <p
          class="relative w-48 py-3 text-xl text-white uppercase font-objectivity hover:opacity-100"
        >
          Featured
        </p>
        <p
          class="relative w-full py-3 text-3xl font-medium text-white font-objectivity hover:opacity-100"
        >
          <i class="ion-alert-circled"></i> {{ article.title }}
        </p>
        <p
          class="relative w-48 py-1 text-lg text-white font-objectivity hover:opacity-100"
        >
          {{ article.author.name }}
        </p>
        <p
          class="absolute bottom-0 py-3 font-light text-white font-objectivity hover:opacity-100"
        >
          {{ article.title }}
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
</style>