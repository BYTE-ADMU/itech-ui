<template>
  <g-link :to="`/topics/${topic.name}`" class="w-full">
    <div class="flex flex-col h-16 mx-2 rounded-lg">
      <div class="absolute z-30 px-5 py-3 rounded-lg group">
        <p
          class="relative text-lg font-medium text-white font-objectivity hover:opacity-100"
          style="font-size: 17px"
        >
          {{ topic.name }}
        </p>
        <p
          class="font-light text-white font-objectivity hover:opacity-100"
          style="font-size: 13px"
        >
          <!-- {{ itemCount }} Items -->
        </p>
      </div>
      <img
        :src="topic.thumbnail"
        class="relative object-cover w-full h-full rounded-lg tg"
      />
    </div>
  </g-link>
</template>

<script>
export default {
  name: "articleHeader",
  props: ["topic"],

  computed: {
    itemCount() {
      return this.topic.courses.length;
    },
  },
};
</script>