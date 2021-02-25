<template>
  <g-link :to="`/courses/${course.id}`" class="w-3/12">
    <div
      class="relative m-5 mx-2 bg-gray-400 rounded-xl feature-height tg sm:m-1"
    >
      <div class="absolute z-30 w-full h-full px-10 rounded-lg sm:px-5 group">
        <p
          class="relative py-1 mt-12 text-3xl font-medium text-white w-min sm:text-lg md:text-md lg:text-2xl font-objectivity hover:opacity-100"
        >
          {{ course.name }}
        </p>
        <p
          class="absolute py-0 font-light text-white sm:bottom-0 sm:py-3 font-objectivity hover:opacity-100"
        >
          {{ itemCount }} <span v-if="itemCount > 1">Items</span
          ><span v-else>Item</span>
        </p>
      </div>
      <img
        :src="course.thumbnail.url"
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
      return this.course.articles.length;
    },
  },
};
</script>

<style scoped>
.feature-height {
  height: 198px;
}
</style>



