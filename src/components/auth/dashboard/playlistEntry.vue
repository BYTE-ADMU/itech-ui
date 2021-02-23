<template>
  <g-link :to="`/courses/${course.node.id}`" class="w-3/12">
    <div class="relative mx-2 bg-gray-400 rounded-xl feature-height tg m-5 sm:m-1">
      <div class="absolute z-30 w-full h-full px-10 sm:px-5 rounded-lg group">
        <p
          class="relative w-min py-1 mt-12 text-3xl sm:text-lg md:text-md lg:text-2xl font-medium text-white font-objectivity hover:opacity-100"
          
        >
          {{ course.node.name }}
        </p>
        <p
          class="absolute sm:bottom-0 py-0 sm:py-3 font-light text-white font-objectivity hover:opacity-100"
        >
          {{ itemCount }} <span v-if="itemCount > 1">Items</span
          ><span v-else>Item</span>
        </p>
      </div>
      <img
        :src="course.node.thumbnail"
        class="relative object-cover w-full h-full rounded-xl tg"
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



