<template>
  <div class="w-full mb-12">
    <div :class="coverStyle">
      <img :src="botStyle" class="bitBot" />

      <div class="flex w-full h-full">
        <div class="flex items-center w-1/2 pl-56">
          <div>
            <h2
              class="leading-tight text-white select-none text-feature font-neuemachina"
            >
              {{ categoryText }}
            </h2>
            <p class="text-white font-objectivity">Articles & Courses</p>
          </div>
        </div>
        <div class="flex items-center w-1/2 px-40 text-white">
          <p>
            {{ categoryDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cover",
  props: {
    category: {
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
          return "hacker";
        case "hipster":
          return "hipster";
        case "hustler":
          return "hustler";
        default:
          return "hacker";
      }
    },
    coverStyle() {
      const defaultStyle = "w-full heighter rounded-xl relative";
      switch (this.category) {
        case "/categories/hacker":
          return `hackerStyle ${defaultStyle}`;
        case "/categories/hipster":
          return `hipsterStyle ${defaultStyle}`;
        case "/categories/hustler":
          return `hustlerStyle ${defaultStyle}`;
        default:
          return `hackerStyle ${defaultStyle}`;
      }
    },
    botStyle() {
      const hacker = require("../../../assets/img/bitbots/bbhacker.svg");
      const hipster = require("../../../assets/img/bitbots/bbhipster.svg");
      const hustler = require("../../../assets/img/bitbots/bbhustler.svg");
      switch (this.category) {
        case "/categories/hacker":
          return hacker;
        case "/categories/hipster":
          return hipster;
        case "/categories/hustler":
          return hustler;
        default:
          return hacker;
      }
    },
    categoryText() {
      switch (this.category) {
        case "/categories/hacker":
          return "hacker";
        case "/categories/hipster":
          return "hipster";
        case "/categories/hustler":
          return "hustler";
        default:
          return "hacker";
      }
    },

    categoryDescription() {
      switch (this.category) {
        case "/categories/hacker":
          return "Hackers turn a tech idea into a product, whether it be a website or an application, using different programming languages and techniques.";
        case "/categories/hipster":
          return "Design is at the core of being a hipster. If you're interested in marketing, design systems, or web & mobile design, this track is for you!";
        case "/categories/hustler":
          return "Being a hustler entails knowledge about building a business from the idea to its execution and management. Entrepreneurship and finance are some of the topics that are tackled under this track.";
        default:
          return "Hackers turn a tech idea into a product, whether it be a website or an application, using different programming languages and techniques.";
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