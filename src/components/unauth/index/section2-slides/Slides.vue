<template>
  <div class="relative overflow-x-hidden overflow-y-hidden slidesResponsive">
    <div v-if="articles === null || courses === null">
      <div class="object-contain w-screen carousel carousel--translate">
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
          <Slide
            class="py-24 carousel__slide"
            v-for="slide in slides"
            :key="slide.id"
            :slide="slide"
            :courses="null"
            :articles="null"
          />
        </div>

        <div class="relative carousel__indicators">
          <label class="carousel__indicator" for="carousel-1"></label>
          <label class="carousel__indicator" for="carousel-2"></label>
          <label class="carousel__indicator" for="carousel-3"></label>
        </div>
      </div>
    </div>
    <div
      v-else
      class="object-contain w-screen h-auto min-h-screen overflow-x-hidden carousel carousel--translate"
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
        <Slide
          class="carousel__slide"
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
import Slide from "./Slide";

import Loader from "../../../Loader";

export default {
  name: "Slides",
  props: ["slides"],
  components: {
    ArticleButton,
    CourseButton,
    Slide,
    Loader,
  },

  computed: {
    articles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      if (typeof data !== undefined && data.length !== 0) {
        return data;
      }
      return null;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses.reverse();
      if (typeof data !== undefined && data.length !== 0) {
        return data;
      }
      return null;
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

.slidesResponsive {
  height: 830px;
}

@media only screen and (min-width: 768px) {
  .slidesResponsive {
    height: 1000px;
  }
}

@media only screen and (min-width: 1024px) {
  .slidesResponsive {
    height: 930px;
  }
}
</style>