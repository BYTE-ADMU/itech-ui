<template>
  <div class="w-full mb-12">
    <div :class="coverStyle">
      <g-image :src="botStyle" class="bitBot" />

        <div class="flex items-center w-full h-full pl-10 lg:pl-56 pr-20 sm:pr-40 lg:pr-12">
          <div>
            <h2
              class="leading-tight text-white select-none text-feature font-neuemachina"
            >
              {{ course.name }}
            </h2>
            <p class="text-white text-base font-objectivity">{{ course.description }}</p>
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
    botStyle() {
      const hacker = require("../../../assets/img/bitbots/bbhacker.svg");
      const hipster = require("../../../assets/img/bitbots/bbhipster.svg");
      const hustler = require("../../../assets/img/bitbots/bbhustler.svg");
      switch (this.course.categories[0].name) {
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
      switch (this.course.categories[0].name) {
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
  top: 100px;
}
.heighter {
  height: 250px;
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
  font-size: 56px;
  line-height: 71px;
}

@media screen and (max-width: 1020px) {
  .heighter {
    height: 450px;
  }

  .bitBot {
    top: 300px;
    right: 0;
  }
}

@media screen and (max-width: 640px) {
  .text-feature {
    font-size: 46px;
  }

  .heighter {
    height: 480px;
  }

  .bitBot {
    width: 140px;
    top: 340px;
  }
}

@media screen and (max-width: 475px) {
  .text-feature {
    font-size: 36px;
  }
}
</style>