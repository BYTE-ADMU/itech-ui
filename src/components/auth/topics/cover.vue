<template>
  <div class="w-full mb-12">
    <div :class="coverStyle">
      <img :src="botStyle" class="bitBot" />

      <div class="block w-full h-full lg:pl-40 lg:flex">
        <div
          class="flex w-full pt-6 pl-6 pr-6 lg:items-center sm:w-1/2 sm:pl-10 sm:pt-10 lg:pt-0"
        >
          <div>
            <h2
              class="leading-tight text-white select-none text-feature font-neuemachina"
            >
              {{ topic.name }}
            </h2>
            <p class="text-lg font-bold text-white font-objectivity">
              Articles & Courses
            </p>
            <!-- <p class="mt-4 text-white font-objectivity">
              {{ topic.description }}
            </p> -->
          </div>
        </div>
        <div
          class="flex w-full pl-6 pr-6 text-white sm:pl-10 lg:pl-48 lg:pr-20 sm:pt-4 lg:items-center mobileWidth sm:w-3/4"
        >
          <p>
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
  top: 93px;
}
.heighter {
  height: 245px;
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

@media screen and (max-width: 1023px) {
  .heighter {
    height: 330px;
  }

  .bitBot {
    top: 170px;
    right: 0;
  }

  .text-feature {
    font-size: 64px;
  }
}

@media screen and (max-width: 640px) {
  .heighter {
    height: 390px;
  }

  .bitBot {
    top: 235px;
  }
}

@media screen and (max-width: 530px) {
  .text-feature {
    font-size: 36px;
  }

  .mobileWidth {
    width: 75%;
  }
}

@media screen and (max-width: 425px) {
  .text-feature {
    font-size: 32px;
    line-height: 40px;
  }

  .bitBot {
    width: 140px;
    top: 260px;
  }
}
</style>