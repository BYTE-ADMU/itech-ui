<!--Slides for all Slide components-->
<template >
  <div>
    <div v-if="articles === null || courses === null">
      <Loader />
    </div>
    <div v-else class="relative shadow-2xl carousel">
      <div class="relative w-full overflow-hidden carousel-inner">
        <!--START: SLIDES-->

        <div v-for="slide in slides" :id="slide.id">
          <Slide :slide="slide" :courses="courses" :articles="articles" />
        </div>

        <!--END: SLIDES-->

        <!-- START: SLIDE INDICATORS-->
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
        <!-- START: SLIDE INDICATORS-->
      </div>
    </div>
  </div>
</template>

<script>
import ArticleButton from "./ArticleButton";
import CourseButton from "./CourseButton";
import Slide from "./Slide";

import Loader from "../../../Loader";
import axios from "axios";
export default {
  name: "HardSlides",
  props: ["slides"],
  components: {
    ArticleButton,
    CourseButton,
    Slide,
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
      // return data;
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/articles/?_sort=published_at`
      );
      return data.reverse();
    },

    async getCourses() {
      // const data = this.$store.state.coursesStore.courses.reverse();
      // return data;
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/courses/?_sort=published_at`
      );
      return data.reverse();
    },
  },

  computed: {
    articles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      return data;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses.reverse();
      return data;
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
