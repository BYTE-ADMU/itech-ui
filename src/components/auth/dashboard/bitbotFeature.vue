<template>
  <div class="flex flex-col w-3/12 px-2">
    <g-link :to="`/categories/${bb3}`">
      <div :class="botStyle">
        <h2
          class="px-6 pt-6 leading-tight text-white select-none text-feature font-neuemachina"
        >
          {{ botWord }}
        </h2>
        <g-link
          :to="`/categories/${bb3}`"
          class="px-6 text-white font-objectivity"
          >View All</g-link
        >
        <g-image :src="botImage" class="bitBot" />
      </div>
    </g-link>
  </div>
</template>
<script>
export default {
  name: "bitbotFeature",
  props: {
    bb3: {
      type: String,
      default: "hacker",
    },
  },
  data() {
    return {};
  },
  computed: {
    botWord() {
      const type = this.bb3;
      switch (type) {
        case "hacker":
          return "hack er";
        case "hipster":
          return "hips ter";
        case "hustler":
          return "hust ler";
        default:
          return "hack er";
      }
    },
    botStyle() {
      const type = this.bb3;
      const defaultStyle = "w-full h-48 heighter rounded-xl relative";
      switch (type) {
        case "hacker":
          return `hackerStyle ${defaultStyle}`;
        case "hipster":
          return `hipsterStyle ${defaultStyle}`;
        case "hustler":
          return `hustlerStyle ${defaultStyle}`;
        default:
          return `hackerStyle ${defaultStyle}`;
      }
    },
    botImage() {
      const type = this.bb3;
      const hacker = require("../../../assets/img/bitbots/bbhacker.svg");
      const hipster = require("../../../assets/img/bitbots/bbhipster.svg");
      const hustler = require("../../../assets/img/bitbots/bbhustler.svg");
      switch (type) {
        case "hacker":
          return hacker;
        case "hipster":
          return hipster;
        case "hustler":
          return hustler;
        default:
          return hacker;
      }
    },
    articleSet() {
      const type = this.bb3;
      switch (type) {
        case "hacker":
          return "";
        case "hipster":
          return "";
        case "hustler":
          return "";
        default:
          return "";
      }
    },
  },
};
</script>
<style scoped>
.bitBot {
  height: 160px;
  position: absolute;
  left: 145px;
}
.heighter {
  height: 350px;
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
  font-size: 90px;
  line-height: 90px;
}
</style>