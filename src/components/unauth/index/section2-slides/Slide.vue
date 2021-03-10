<!--Slide Component-->
<template>
  <div :class="slideStyle">
    <div class="mx-auto mb-20 lg:container">
      <!-- START: DESCRIPTION -->
      <div class="mb-20">
        <div class="w-full text-center text-white">
          <p class="tracking-wide uppercase md:text-2xl font-objectivity">
            Become a
          </p>
          <p class="text-5xl tracking-wider uppercase font-neuemachina">
            {{ slide.categories }}
          </p>
          <p
            class="px-2 tracking-wider md:px-12 lg:px-32 md:text-xl font-objectivity"
          >
            {{ slide.description }}
          </p>
        </div>
      </div>
      <!-- END: DESCRIPTION -->

      <!-- START: CAROUSEL -->
      <div
        class="grid items-center w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-3"
      >
        <!-- START: FIRST COLUMN -->
        <div
          v-if="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block"
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg small-box"></div>
            <div class="bg-white rounded-lg small-box"></div>
          </div>
          <div class="mt-4 bg-white rounded-lg long-box"></div>
        </div>

        <div v-else class="grid hidden grid-cols-1 mx-auto lg:block">
          <div class="grid grid-cols-2 gap-4">
            <CourseButton v-bind:course="filteredCourses[0]" />
            <CourseButton v-bind:course="filteredCourses[1]" />
          </div>
        </div>

        <div>
          <div class="py-6 mx-auto bg-white rounded-lg big-box"></div>
        </div>

        <!-- START: THIRD COLUMN -->
        <div
          v-if="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block"
        >
          <div class="mb-4 bg-white rounded-lg long-box"></div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg small-box"></div>
            <div class="bg-white rounded-lg small-box"></div>
          </div>
        </div>
        <div
          v-else="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block"
        >
          <ArticleButton
            class="mb-4"
            v-bind:article="filteredArticles[1]"
          ></ArticleButton>
          <div class="grid grid-cols-2 gap-4">
            <CourseButton v-bind:course="filteredCourses[2]" />
            <CourseButton v-bind:course="filteredCourses[3]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  name: "Slide",
  props: ["slide", "courses", "articles"],

  computed: {
    botImage() {
      const hacker = require("@/assets/img/bitbots/bbhacker.svg");
      const hipster = require("@/assets/img/bitbots/bbhipster.svg");
      const hustler = require("@/assets/img/bitbots/bbhustler.svg");
      switch (this.slide.categories.toLowerCase()) {
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

    slideStyle() {
      const defaultStyle = "py-20 ";
      switch (this.slide.categories.toLowerCase()) {
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

    filteredHackerArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.toLowerCase().includes("hacker");
      });
    },

    filteredHackerCourses() {
      return this.courses.filter((course) => {
        return course.categories[0].name.toLowerCase().includes("hacker");
      });
    },

    filteredHipsterArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.toLowerCase().includes("hipster");
      });
    },

  //props
  props: ["slide"],
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
</style>
