<!--Slide Component-->
<template>
  <div>
    <input
      class="carousel-open"
      type="radio"
      v-bind:id="[slide.order]"
      name="carousel"
      aria-hidden="true"
      hidden=""
      checked="checked"
    />
    <div :class="slideStyle" class="py-20">
      <div class="container mb-20">
        <!-- START: DESCRIPTION -->
        <div class="mb-20 full-width-row">
          <div class="w-full text-center text-white">
            <p class="tracking-wide uppercase md:text-2xl font-objectivity">
              Become a
            </p>
            <p class="text-5xl tracking-wider uppercase font-neuemachina">
              {{ slide.categories }}
            </p>
            <p class="px-2 tracking-wider lg:px-32 md:text-xl font-objectivity">
              {{ slide.description }}
            </p>
          </div>
        </div>
        <!-- END: DESCRIPTION -->

        <!-- START: CAROUSEL -->
        <div
          class="grid items-center w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-3 lg:container"
        >
          <!-- START: FIRST COLUMN -->
          <div class="hidden mx-auto lg:block">
            <div class="flex">
              <div
                class="bg-white rounded-lg small-box"
                v-bind:class="[slide.classes[2]]"
              >
                &nbsp;
              </div>
              <div
                class="ml-4 bg-white rounded-lg small-box"
                v-bind:class="[slide.classes[1]]"
              >
                &nbsp;
              </div>
            </div>
            <div
              class="mt-4 bg-white rounded-lg long-box"
              v-bind:class="[slide.classes[3]]"
            >
              &nbsp;
            </div>
          </div>

          <!-- END: FIRST COLUMN -->

          <!-- START: SECOND COLUMN -->
          <div class="mx-auto bg-white rounded-lg big-box">
            <g-image :src="botImage" class="w-full pt-20 mx-auto md:px-4" />
          </div>
          <!-- END: SECOND COLUMN -->

          <!-- START: THIRD COLUMN -->

          <div class="hidden mx-auto lg:block">
            <div
              class="mb-4 bg-white rounded-lg long-box"
              v-bind:class="[slide.classes[3]]"
            >
              &nbsp;
            </div>
            <div class="flex">
              <div
                class="bg-white rounded-lg small-box"
                v-bind:class="[slide.classes[2]]"
              >
                &nbsp;
              </div>
              <div
                class="ml-4 bg-white rounded-lg small-box"
                v-bind:class="[slide.classes[1]]"
              >
                &nbsp;
              </div>
            </div>
          </div>
          <!-- END: THIRD COLUMN -->
        </div>

        <!-- END: CAROUSEL -->

        <!-- <div>
          <div class="flex">
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[2]]"
            >
              &nbsp;
            </div>
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[1]]"
            >
              &nbsp;
            </div>
          </div>
          <div
            class="mt-4 ml-4 bg-white rounded-lg long-box"
            v-bind:class="[slide.classes[3]]"
          >
            &nbsp;
          </div>
        </div> -->

        <!-- <div>
          <div class="py-6 mx-auto bg-white rounded-lg big-box"></div>
        </div> -->

        <!-- <div>
          <div
            class="mb-4 ml-4 bg-white rounded-lg long-box"
            v-bind:class="[slide.classes[3]]"
          >
            &nbsp;
          </div>
          <div class="flex">
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[2]]"
            >
              &nbsp;
            </div>
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[1]]"
            >
              &nbsp;
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  name: "Slide",
  props: ["slide"],

  computed: {
    botImage() {
      const type = this.slide.categories;
      const hacker = require("@/assets/img/bitbots/bbhacker.svg");
      const hipster = require("@/assets/img/bitbots/bbhipster.svg");
      const hustler = require("@/assets/img/bitbots/bbhustler.svg");
      switch (type) {
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
    slideStyle() {
      const type = this.slide.categories;
      const defaultStyle =
        "absolute flex items-center justify-center min-h-screen opacity-0 carousel-item";
      switch (type.toLowerCase()) {
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
  },
});
</script>

<style lang="css" scoped>
.grid-container {
  display: grid;
  grid-gap: 20px;
  justify-content: center;
}

.full-width-row {
  grid-column-start: 1;
  grid-column-end: 4;
}

.hackerStyle {
  background: linear-gradient(283.99deg, #4e6afa 7.28%, #9298ff 100%);
}

.hipsterStyle {
  background: linear-gradient(283.99deg, #ff7b92 7.28%, #e13894 100%);
}

.hustlerStyle {
  background: linear-gradient(283.99deg, #b0ca88 7.28%, #70b9a2 100%);
}

.bitBot {
  height: 160px;
  position: absolute;
  left: 145px;
}
</style>
