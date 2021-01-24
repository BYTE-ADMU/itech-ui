<template>
  <g-link
    :to="`/courses/${course.node.id}`"
    class="self-center w-3/12 heighter"
  >
    <div class="flex flex-col justify-between h-full mx-2 rounded-lg">
      <h2 class="text-5xl font-neuemachina">Topic of the Week ✨</h2>
      <div class="relative bg-gray-800 rounded-lg h-tall">
        <div class="absolute bottom-0 z-30 w-full px-5 py-3 text-white">
          <p class="text-2xl font-objectivity">
            {{ course.node.name }}
          </p>
          <p class="font-thin font-objectivity text-md">
            {{ itemCount }} Items
          </p>
        </div>
        <img :src="course.node.thumbnail" class="object-cover rounded-lg tg" />
        <img
          :src="require('@/assets/img/bitbots/bbwhite.svg')"
          class="absolute whitebb"
        />
      </div>
    </div>
  </g-link>
</template>
<script>
export default {
  name: "playlistTall",
  props: ["course"],
  computed: {
    itemCount() {
      return this.course.node.articles.length;
    },
  },
};
</script>
<style scoped>
.heighter {
  height: 592px;
}
.h-tall {
  height: 400px;
}
.whitebb {
  top: 290px;
  right: 0;
}
</style>