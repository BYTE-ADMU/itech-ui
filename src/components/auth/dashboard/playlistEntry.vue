<template>
  <a href="#" to="" class="w-3/12">
    <div class="relative mx-2 bg-gray-400 rounded-lg feature-height tg">
      <div class="absolute z-30 w-full h-full px-5 py-3 rounded-lg group">
        <p
          class="relative w-48 py-1 mt-12 text-lg font-medium text-white font-objectivity hover:opacity-100"
          style="font-size: 24px"
        >
          {{ articleTitle }}
        </p>
        <p
          class="absolute bottom-0 py-3 font-light text-white font-objectivity hover:opacity-100"
        >
          170+ items
        </p>
      </div>
      <img
        :src="resource"
        class="relative object-cover w-full h-full rounded-lg tg"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: "featureEntry",
  props: {
    resource: {
      type: String,
      default: "https://picsum.photos/960/350",
    },
    articleTitle: {
      type: String,
      default: "Title of the Playlist",
    },
  },
};
</script>

<style scoped>
.feature-height {
  height: 198px;
}
</style>