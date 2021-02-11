<template>
  <g-link :to="`/courses/${course.node.id}`" class="w-3/12">
    <div class="relative mx-2 bg-gray-400 rounded-lg feature-height tg">
      <div class="absolute z-30 w-full h-full px-5 py-3 rounded-lg group">
        <p
          class="relative w-48 py-1 mt-12 text-lg font-medium text-white font-objectivity hover:opacity-100"
          style="font-size: 24px"
        >
          {{ course.node.name }}
        </p>
        <p
          class="absolute bottom-0 py-3 font-light text-white font-objectivity hover:opacity-100"
        >
          {{ itemCount }} Items
        </p>
      </div>
      <img
        :src="course.node.thumbnail"
        class="relative object-cover w-full h-full rounded-lg tg"
      />
    </div>
  </g-link>
</template>

<script>
export default {
  name: "featureEntry",
  props: ["course"],

  computed: {
    itemCount() {
      return this.course.node.articles.length;
    },
  },
};
</script>

<style scoped>
.feature-height {
  height: 198px;
}
</style>



