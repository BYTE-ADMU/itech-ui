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
      <div class="mb-20 lg:container">
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
          class="grid items-center w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-3"
        >
          <!-- START: FIRST COLUMN -->

          <div class="grid hidden grid-cols-1 mx-auto lg:block">
            <div class="grid grid-cols-2 gap-4">
              <CourseButton v-bind:course="filteredCourses[0]" />
              <CourseButton v-bind:course="filteredCourses[1]" />
            </div>
            <ArticleButton
              class="mt-4"
              v-bind:article="filteredArticles[0]"
            ></ArticleButton>
          </div>
          <!-- END: FIRST COLUMN -->

          <!-- START: SECOND COLUMN -->
          <g-link
            :to="`/categories/${slide.categories.toLowerCase()}`"
            class="w-full mx-auto bg-white rounded-lg"
          >
            <g-image :src="botImage" class="w-full pt-20 mx-auto md:px-4" />
          </g-link>
          <!-- END: SECOND COLUMN -->

          <!-- START: THIRD COLUMN -->
          <div class="grid hidden grid-cols-1 mx-auto lg:block">
            <ArticleButton
              class="mb-4"
              v-bind:article="filteredArticles[1]"
            ></ArticleButton>
            <div class="grid grid-cols-2 gap-4">
              <CourseButton v-bind:course="filteredCourses[2]" />
              <CourseButton v-bind:course="filteredCourses[3]" />
            </div>
          </div>
          <!-- END: THIRD COLUMN -->
        </div>

        <!-- END: CAROUSEL -->
      </div>
    </div>
  </div>
</template>


<script>
import ArticleButton from "./ArticleButton";
import CourseButton from "./CourseButton";

import Loader from "../../../Loader";

export default {
  components: {
    ArticleButton,
    CourseButton,
    Loader,
  },

  name: "Slide",
  props: ["slide"],
  // data() {
  //   return {
  //     articles: null,
  //     courses: null,
  //   };
  // },

  computed: {
    category() {
      return this.slide.categories.toLowerCase();
    },

    articles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      return data;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses.reverse();
      return data;
    },

    botImage() {
      const hacker = require("@/assets/img/bitbots/bbhacker.svg");
      const hipster = require("@/assets/img/bitbots/bbhipster.svg");
      const hustler = require("@/assets/img/bitbots/bbhustler.svg");
      switch (this.category) {
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
      const defaultStyle =
        "absolute flex items-center justify-center opacity-0 carousel-item";
      switch (this.category) {
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

    filteredArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.toLowerCase().includes(this.category);
      });
    },

    filteredCourses() {
      return this.courses.filter((course) => {
        return course.categories[0].name.toLowerCase().includes(this.category);
      });
    },
  },
};
</script>

<style lang="css" scoped>
.hackerStyle {
  background: linear-gradient(283.99deg, #4e6afa 7.28%, #9298ff 100%);
}

.hipsterStyle {
  background: linear-gradient(283.99deg, #ff7b92 7.28%, #e13894 100%);
}

.hustlerStyle {
  background: linear-gradient(283.99deg, #b0ca88 7.28%, #70b9a2 100%);
}
</style>
