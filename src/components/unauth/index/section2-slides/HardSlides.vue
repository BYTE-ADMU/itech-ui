<!--Slides for all Slide components-->
<template >
  <div>
    <div v-if="articles === null || courses === null">
      <Loader />
    </div>
    <div v-else class="relative shadow-2xl carousel">
      <div class="relative w-full overflow-hidden carousel-inner">
        <!--START: each-slide component-->
        <!-- START:HACKER -->
        <div>
          <input
            class="carousel-open"
            type="radio"
            v-bind:id="[slides[0].order]"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            class="absolute flex items-center justify-center py-20 opacity-0 carousel-item hackerStyle"
          >
            <div class="mb-20 lg:container">
              <!-- START: DESCRIPTION -->
              <div class="mb-20 full-width-row">
                <div class="w-full text-center text-white">
                  <p
                    class="tracking-wide uppercase md:text-2xl font-objectivity"
                  >
                    Become a
                  </p>
                  <p class="text-5xl tracking-wider uppercase font-neuemachina">
                    {{ slides[0].categories }}
                  </p>
                  <p
                    class="px-2 tracking-wider md:px-12 lg:px-32 md:text-xl font-objectivity"
                  >
                    {{ slides[0].description }}
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
                    <CourseButton v-bind:course="filteredHackerCourses[0]" />
                    <CourseButton v-bind:course="filteredHackerCourses[1]" />
                  </div>
                  <ArticleButton
                    class="mt-4"
                    v-bind:article="filteredHackerArticles[0]"
                  ></ArticleButton>
                </div>
                <!-- END: FIRST COLUMN -->

                <!-- START: SECOND COLUMN -->
                <g-link
                  :to="`/categories/${slides[0].categories.toLowerCase()}`"
                  class="w-2/3 mx-auto bg-white rounded-lg lg:w-full"
                >
                  <g-image
                    src="@/assets/img/bitbots/bbhacker.svg"
                    class="w-full pt-20 mx-auto md:px-4"
                  />
                </g-link>
                <!-- END: SECOND COLUMN -->

                <!-- START: THIRD COLUMN -->
                <div class="grid hidden grid-cols-1 mx-auto lg:block">
                  <ArticleButton
                    class="mb-4"
                    v-bind:article="filteredHackerArticles[1]"
                  ></ArticleButton>
                  <div class="grid grid-cols-2 gap-4">
                    <CourseButton v-bind:course="filteredHackerCourses[2]" />
                    <CourseButton v-bind:course="filteredHackerCourses[3]" />
                  </div>
                </div>
                <!-- END: THIRD COLUMN -->
              </div>

              <!-- END: CAROUSEL -->
            </div>
          </div>
        </div>
        <!-- END: HACKER -->
        <!-- START: HIPSTER -->

        <div>
          <input
            class="carousel-open"
            type="radio"
            v-bind:id="[slides[1].order]"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            class="absolute flex items-center justify-center py-20 opacity-0 carousel-item hipsterStyle"
          >
            <div class="mb-20 lg:container">
              <!-- START: DESCRIPTION -->
              <div class="mb-20 full-width-row">
                <div class="w-full text-center text-white">
                  <p
                    class="tracking-wide uppercase md:text-2xl font-objectivity"
                  >
                    Become a
                  </p>
                  <p class="text-5xl tracking-wider uppercase font-neuemachina">
                    {{ slides[1].categories }}
                  </p>
                  <p
                    class="px-2 tracking-wider md:px-12 lg:px-32 md:text-xl font-objectivity"
                  >
                    {{ slides[1].description }}
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
                    <CourseButton v-bind:course="filteredHipsterCourses[0]" />
                    <CourseButton v-bind:course="filteredHipsterCourses[1]" />
                  </div>
                  <ArticleButton
                    class="mt-4"
                    v-bind:article="filteredHipsterArticles[0]"
                  ></ArticleButton>
                </div>
                <!-- END: FIRST COLUMN -->

                <!-- START: SECOND COLUMN -->
                <g-link
                  :to="`/categories/${slides[1].categories.toLowerCase()}`"
                  class="w-2/3 mx-auto bg-white rounded-lg lg:w-full"
                >
                  <g-image
                    <g-image
                    src="@/assets/img/bitbots/bbhipster.svg"
                    class="w-full pt-20 mx-auto md:px-4"
                  />
                </g-link>
                <!-- END: SECOND COLUMN -->

                <!-- START: THIRD COLUMN -->
                <div class="grid hidden grid-cols-1 mx-auto lg:block">
                  <ArticleButton
                    class="mb-4"
                    v-bind:article="filteredHipsterArticles[1]"
                  ></ArticleButton>
                  <div class="grid grid-cols-2 gap-4">
                    <CourseButton v-bind:course="filteredHipsterCourses[2]" />
                    <CourseButton v-bind:course="filteredHipsterCourses[3]" />
                  </div>
                </div>
                <!-- END: THIRD COLUMN -->
              </div>

              <!-- END: CAROUSEL -->
            </div>
          </div>
        </div>
        <!-- END: HIPSTER -->

        <!-- START: HUSTLER -->
        <div>
          <input
            class="carousel-open"
            type="radio"
            v-bind:id="[slides[2].order]"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            class="absolute flex items-center justify-center py-20 opacity-0 carousel-item hustlerStyle"
          >
            <div class="mb-20 lg:container">
              <!-- START: DESCRIPTION -->
              <div class="mb-20 full-width-row">
                <div class="w-full text-center text-white">
                  <p
                    class="tracking-wide uppercase md:text-2xl font-objectivity"
                  >
                    Become a
                  </p>
                  <p class="text-5xl tracking-wider uppercase font-neuemachina">
                    {{ slides[2].categories }}
                  </p>
                  <p
                    class="px-2 tracking-wider md:px-12 lg:px-32 md:text-xl font-objectivity"
                  >
                    {{ slides[2].description }}
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
                    <CourseButton v-bind:course="filteredHustlerCourses[0]" />
                    <CourseButton v-bind:course="filteredHustlerCourses[1]" />
                  </div>
                  <ArticleButton
                    class="mt-4"
                    v-bind:article="filteredHustlerArticles[0]"
                  ></ArticleButton>
                </div>
                <!-- END: FIRST COLUMN -->

                <!-- START: SECOND COLUMN -->
                <g-link
                  :to="`/categories/${slides[2].categories.toLowerCase()}`"
                  class="w-2/3 mx-auto bg-white rounded-lg lg:w-full"
                >
                  <g-image
                    src="@/assets/img/bitbots/bbhustler.svg"
                    class="w-full pt-20 mx-auto md:px-4"
                  />
                </g-link>
                <!-- END: SECOND COLUMN -->

                <!-- START: THIRD COLUMN -->
                <div class="grid hidden grid-cols-1 mx-auto lg:block">
                  <ArticleButton
                    class="mb-4"
                    v-bind:article="filteredHustlerArticles[1]"
                  ></ArticleButton>
                  <div class="grid grid-cols-2 gap-4">
                    <CourseButton v-bind:course="filteredHustlerCourses[2]" />
                    <CourseButton v-bind:course="filteredHustlerCourses[3]" />
                  </div>
                </div>
                <!-- END: THIRD COLUMN -->
              </div>

              <!-- END: CAROUSEL -->
            </div>
          </div>
        </div>
        <!-- END: HUSTLER -->
        <!--END: each-slide component-->

        <!-- Indicators for each slide-->
        <div class="relative">
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-white"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-white"
                >•</label
              >
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="block text-4xl text-white cursor-pointer carousel-bullet hover:text-white"
                >•</label
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleButton from "./ArticleButton";
import CourseButton from "./CourseButton";

import Loader from "../../../Loader";
import axios from "axios";
export default {
  name: "HardSlides",
  props: ["slides"],
  components: {
    ArticleButton,
    CourseButton,
    Loader,
  },

  data() {
    return {
      articles: null,
      courses: null,
    };
  },

  async mounted() {
    this.articles = await this.getArticles();
    this.courses = await this.getCourses();
  },

  methods: {
    async getArticles() {
      // const data = this.$store.state.articlesStore.articles.reverse();
      // console.log(data);
      // return data;
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/articles/?_sort=published_at`
      );

      return data.reverse();
    },

    async getCourses() {
      // const data = this.$store.state.coursesStore.courses.reverse();
      // console.log(data);

      // return data;
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/courses/?_sort=published_at`
      );

      return data.reverse();
    },
  },

  computed: {
    // articles() {
    //   const data = this.$store.state.articlesStore.articles.reverse();
    //   return data;
    // },

    // courses() {
    //   const data = this.$store.state.coursesStore.courses.reverse();
    //   return data;
    // },

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
