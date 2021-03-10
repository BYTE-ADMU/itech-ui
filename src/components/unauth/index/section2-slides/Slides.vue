<template>
  <div class="relative">
    <div v-if="articles === null || courses === null">
      <div
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
import Vue from "vue";
import Slide from "./Slide.vue";
export default Vue.extend({
  name: "Slides",

  //Components
  components: {
    Slide,
  },

  //props
  props: ["slides"],
});
</script>
