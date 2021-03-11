<template>
  <div class="flex flex-col w-full mb-12 md:mb-0 md:w-3/12 px-2">
    <g-link :to="`/categories/${bb3}`">
      <div :class="botStyle">
        <div>
          <h2
            class="px-6 pt-6 pb-2 leading-tight text-white select-none text-feature font-neuemachina"
          >
            {{ botWord }}
          </h2>
          <g-link
            :to="`/categories/${bb3}`"
            class="px-6 text-white font-objectivity view-all"
            >View All</g-link
          >
        </div>
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
          return "Hacker";
        case "hipster":
          return "Hipster";
        case "hustler":
          return "Hustler";
        default:
          return "Hacker";
      }
    },
    botStyle() {
      const type = this.bb3;
      const defaultStyle = "w-full heighter rounded-xl relative py-1 catCard-hover";
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
  width: 189px;
  position: absolute;
  right: 0;
  bottom: -30px;
  transition: .20s ease-in-out;
  -webkit-transition: .20s ease-in-out;
  -moz-transition: .20s ease-in-out;
  -o-transition: .20s ease-in-out;
  
}
.heighter {
  height: 315px;
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
  line-height: 54.04px;
}

.view-all {
  font-size: 16px;
}

.catCard-hover:hover > .bitBot {
  animation: sway 2s infinite;
}

@keyframes sway {
  30% {
    transform: rotate(6deg);
  }
  60% {
    transform: rotate(-8deg);
  }
}

@media screen and (max-width: 1280px) {
  .bitBot {
    width: 170px;
  }

  .heighter {
    height: 340px;
  }

  .text-feature {
    font-size: 50px;
  }
}

@media screen and (max-width: 1025px) {
  .bitBot {
    width: 130px;
  }

  .heighter {
    height: 360px;
  }

  .text-feature {
    font-size: 33px;
  }
}

@media screen and (max-width: 768px) {
  .bitBot {
    position: absolute;
    width: 140px;
    bottom: -20px;
  }

  .heighter {
    height: 200px;
  }

  .text-feature {
    font-size: 56px;
  }
}

@media screen and (max-width: 375px) {
  .bitBot {
    width: 120px;
  }
}
</style>