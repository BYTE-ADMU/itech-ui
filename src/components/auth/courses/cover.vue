<template>
  <div class="w-full mb-12">
    <div class="relative w-full hustlerStyle heighter rounded-xl">
      <g-image :src="bitbot" class="bitBot" />
        <div class="flex items-center w-full h-full pl-56">
          <div>
            <h2
              class="leading-tight text-white select-none text-feature font-neuemachina"
            >
              {{ course.name }}
            </h2>
            <p class="text-white font-objectivity">{{ course.description }}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cover",
  props: ["course"],
  computed: {
    bitbot() {
      const bitbot = require("../../../assets/img/bitbots/bbwhite.svg");
      return bitbot;
    },
  },
};
</script>
<style scoped >
.bitBot {
  position: absolute;
  width: 189px;
  height: 193.13px;
  top: 56px;
}
.heighter {
  height: 204px;
}
.hackerStyle {
  background: linear-gradient(283.99deg, #4e6afa 7.28%, #9298ff 100%);
}
.hipsterStyle {
  background: linear-gradient(283.99deg, #ff7b92 7.28%, #e13894 100%);
  border-radius: 10px;
}
.hustlerStyle {
  background: linear-gradient(283.99deg, #b0ca88 7.28%, #70b9a2 100%);
  border-radius: 10px;
}
.text-feature {
  font-size: 79px;
  line-height: 71px;
}
</style>