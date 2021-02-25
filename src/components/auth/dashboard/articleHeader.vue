<template>
  <g-link :to="`/topics/${topic.id}`" class="w-full">
    <div class="flex flex-col h-16 mx-2 rounded-lg">
      <div class="absolute z-30 px-5 py-3 rounded-lg group">
        <p
          class="relative text-white topic-name hover:opacity-100"
          style="font-size: 17px"
        >
          {{ topic.name }}
        </p>
        <p class="text-white hover:opacity-100 topic-items">
          {{ itemCount }} <span v-if="itemCount > 1">Items</span
          ><span v-else>Item</span>
        </p>
      </div>
      <g-image
        :src="topic.thumbnail.url"
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

<style scoped>
.topic-name {
  font-family: Objectivity;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
}

.topic-items {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
}
</style>