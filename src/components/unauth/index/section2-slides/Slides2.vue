<template>
  <div class="relative">
    <div v-if="articles === null || courses === null">
      <Loader />
    </div>
    <div
      v-else
      class="object-contain w-screen h-auto min-h-screen carousel carousel--translate"
    >
      <input
        class="carousel__activator"
        type="radio"
        name="carousel"
        id="carousel-1"
        checked="checked"
      />
      <input
        class="carousel__activator"
        type="radio"
        name="carousel"
        id="carousel-2"
      />
      <input
        class="carousel__activator"
        type="radio"
        name="carousel"
        id="carousel-3"
      />

      <div class="carousel__track">
        <!-- <div
          class="carousel__slide"
          style="background-color: blue"
          v-for="slide in slides"
          :key="slide.id"
        >
          <h1>2</h1>
        </div> -->
        <Slide
          class="py-24 carousel__slide"
          v-for="slide in slides"
          :key="slide.id"
          :slide="slide"
          :courses="courses"
          :articles="articles"
        />
      </div>

      <div class="relative carousel__indicators">
        <label class="carousel__indicator" for="carousel-1"></label>
        <label class="carousel__indicator" for="carousel-2"></label>
        <label class="carousel__indicator" for="carousel-3"></label>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleButton from "./ArticleButton";
import CourseButton from "./CourseButton";
import Slide from "./Slide2";

import Loader from "../../../Loader";
import axios from "axios";

export default {
  name: "Slides2",
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

<style>
.carousel__controls,
.carousel__activator {
  display: none;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__track {
  transform: translateX(0%);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__slide:nth-of-type(1) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(1):checked
  ~ .carousel__controls:nth-of-type(1) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(1):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(1) {
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__track {
  transform: translateX(-100%);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__slide:nth-of-type(2) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(2):checked
  ~ .carousel__controls:nth-of-type(2) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(2) {
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__track {
  transform: translateX(-200%);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__slide:nth-of-type(3) {
  transition: opacity 0.5s, transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transform: scale(1);
}
.carousel__activator:nth-of-type(3):checked
  ~ .carousel__controls:nth-of-type(3) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked
  ~ .carousel__indicators
  .carousel__indicator:nth-of-type(3) {
  opacity: 1;
}

.carousel__indicators {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.carousel__indicator {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  opacity: 0.35;
  margin: 0 2.5px 0 2.5px;
}
.carousel__indicator:hover {
  opacity: 0.75;
}
.carousel__track {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease 0s;
}
.carousel__track .carousel__slide {
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
}
.carousel__track .carousel__slide:nth-of-type(1) {
  transform: translateX(0%);
}
.carousel__track .carousel__slide:nth-of-type(2) {
  transform: translateX(100%);
}
.carousel__track .carousel__slide:nth-of-type(3) {
  transform: translateX(200%);
}
.carousel__track .carousel__slide:nth-of-type(4) {
  transform: translateX(300%);
}
.carousel__track .carousel__slide:nth-of-type(5) {
  transform: translateX(400%);
}
.carousel--scale .carousel__slide {
  transform: scale(0);
}
.carousel__slide {
  height: 100%;
  position: absolute;
  overflow-y: auto;
  opacity: 0;
}

.carousel__slide {
  overflow: hidden;
}
.carousel--thumb .carousel__indicator {
  height: 30px;
  width: 30px;
}
.carousel__indicator {
  background-color: #fafafa;
}
</style>