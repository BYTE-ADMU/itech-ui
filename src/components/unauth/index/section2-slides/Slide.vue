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
          class="grid hidden grid-cols-1 mx-auto lg:block animate-pulse"
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
          <ArticleButton
            class="mt-4"
            v-bind:article="filteredArticles[0]"
          ></ArticleButton>
        </div>
        <!-- END: FIRST COLUMN -->

        <!-- START: SECOND COLUMN -->
        <g-link
          :to="`/categories/${slide.categories.toLowerCase()}`"
          class="w-2/3 mx-auto rounded-lg lg:w-full unauthBot-hover"
          :class="botBG"
        >
          <g-image
            :src="botImage"
            class="w-full pt-20 mx-auto md:px-4 unauthBot"
          />
        </g-link>
        <!-- END: SECOND COLUMN -->

        <!-- START: THIRD COLUMN -->
        <div
          v-if="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block animate-pulse"
        >
          <div class="mb-4 bg-white rounded-lg long-box"></div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg small-box"></div>
            <div class="bg-white rounded-lg small-box"></div>
          </div>
        </div>
        <div v-else class="grid hidden grid-cols-1 mx-auto lg:block">
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

  <!-- END: HACKER -->
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

    botBG() {
      const hacker = "hacker-bg";
      const hipster = "hipster-bg";
      const hustler = "hustler-bg";
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

    filteredHipsterCourses() {
      return this.courses.filter((course) => {
        return course.categories[0].name.toLowerCase().includes("hipster");
      });
    },

    filteredHustlerArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.toLowerCase().includes("hustler");
      });
    },

    filteredHustlerCourses() {
      return this.courses.filter((course) => {
        return course.categories[0].name.toLowerCase().includes("hustler");
      });
    },

    filteredArticles() {
      switch (this.slide.categories.toLowerCase()) {
        case "hacker":
          return this.filteredHackerArticles;
        case "hipster":
          return this.filteredHipsterArticles;
        case "hustler":
          return this.filteredHustlerArticles;
        default:
          return this.filteredHackerArticles;
      }
    },

    filteredCourses() {
      switch (this.slide.categories.toLowerCase()) {
        case "hacker":
          return this.filteredHackerCourses;
        case "hipster":
          return this.filteredHipsterCourses;
        case "hustler":
          return this.filteredHustlerCourses;
        default:
          return this.filteredHackerCourses;
      }
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

.hacker-bg {
  background-image: url("../../../../assets/img/unauth/index/section2/slides/HACKER-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.hipster-bg {
  background-image: url("../../../../assets/img/unauth/index/section2/slides/HIPSTER-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.hustler-bg {
  background-image: url("../../../../assets/img/unauth/index/section2/slides/HUSTLER-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.unauthBot {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.unauthBot-hover:hover > .unauthBot {
  animation: botBounce 900ms infinite;
}

@keyframes botBounce {
  30% {
    transform: scale(1.07);
  }
  50% {
    transform: scale(0.95);
  }
  80% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}
</style>
