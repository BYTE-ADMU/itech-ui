<template>
  <div class="self-center w-3/12 heighter">
    <div class="flex flex-col justify-between h-full mx-2 rounded-lg">
      <h2 class="text-5xl font-neuemachina">Topic of the Week ✨</h2>
      <div class="relative bg-gray-800 rounded-lg h-tall">
        <div class="absolute bottom-0 z-30 w-full px-5 py-3 text-white">
          <p class="text-2xl font-objectivity">
            <!-- {{ playlistTitle }} -->
            Coming Soon
          </p>
          <p class="font-thin font-objectivity text-md">{{ itemAmt }} Items</p>
        </div>
        <img :src="playlistImage" class="object-cover rounded-lg tg" />
        <img
          :src="require('@/assets/img/bitbots/bbwhite.svg')"
          class="absolute whitebb"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "playlistTall",
  props: {
    playlistImage: {
      type: String,
      default: "https://picsum.photos/304/400",
    },
    itemAmt: {
      type: String,
      default: "100",
    },
    playlistTitle: {
      type: String,
      default: "Title",
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