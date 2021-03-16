<template>
  <div class="w-full mb-12">
    <div :class="coverStyle">
      <g-image :src="botStyle" class="bitBot" />

      <div
        class="w-full h-full pt-10 pl-10 pr-20 lg:pt-16 lg:pl-56 sm:pr-32 lg:pr-12"
      >
        <div>
          <h2
            class="text-white truncate select-none text-feature font-neuemachina lg:mb-2"
          >
            {{ course.name }}
          </h2>

          <h3
            class="mb-2 text-base text-white font-objectivity articlesBold lg:hidden"
          >
            Articles
          </h3>
          <p class="text-sm text-white font-objectivity">
            {{ course.description }}
          </p>
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
  top: 80px;
}
.heighter {
  height: 230px;
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
  line-height: 50px;
}

.articlesBold {
  font-weight: 700;
}

@media screen and (max-width: 1023px) {
  .heighter {
    height: 320px;
  }

  .bitBot {
    top: 170px;
    right: 0;
  }
}

@media screen and (max-width: 640px) {
  .text-feature {
    font-size: 46px;
  }

  .heighter {
    height: 340px;
  }

  .bitBot {
    width: 140px;
    top: 200px;
  }
}

@media screen and (max-width: 475px) {
  .text-feature {
    font-size: 36px;
    line-height: 40px;
  }
}
</style>