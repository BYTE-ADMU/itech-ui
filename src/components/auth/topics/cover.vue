<template>
  <div class="w-full mb-12">
    <div :class="coverStyle">
      <img :src="botStyle" class="bitBot" />

      <div class="flex items-center w-full h-full pl-56">
        <div class="w-full">
          <h2
            class="leading-tight text-white select-none text-feature font-neuemachina w-1/2"
          >
            {{ topic.name }}
          </h2>
          <p class="mt-4 text-white font-objectivity">
            {{ topic.description }}
          </p>
        </div>
        <!-- <div class="flex items-center w-2/3 px-40 text-white">
          <p>{{ topic.description }}</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cover",
  props: ["topic"],
  computed: {
    botStyle() {
      const hacker = require("../../../assets/img/bitbots/bbhacker.svg");
      const hipster = require("../../../assets/img/bitbots/bbhipster.svg");
      const hustler = require("../../../assets/img/bitbots/bbhustler.svg");
      switch (this.topic.categories[0].name) {
        case "Hacker":
          return hacker;
        case "Hipster":
          return hipster;
        case "Hustler":
          return hustler;
        default:
          return hacker;
      }
    },
    coverStyle() {
      const defaultStyle = "w-full heighter rounded-xl relative";
      switch (this.topic.categories[0].name) {
        case "Hacker":
          return `hackerStyle ${defaultStyle}`;
        case "Hipster":
          return `hipsterStyle ${defaultStyle}`;
        case "Hustler":
          return `hustlerStyle ${defaultStyle}`;
        default:
          return `hackerStyle ${defaultStyle}`;
      }
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