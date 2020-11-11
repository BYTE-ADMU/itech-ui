<template lang="html">
  <!--SlideCarousel for all slides component-->
  <div class="w-100 bg-white font-sans leading-normal tracking-normal">
    <div class="carousel relative shadow-2xl bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">

        <!--START: each-slide component-->
        <div v-for="slide in slides" v-bind:key="slide.id" >
          <Slide v-bind:slide="slide" />
        </div>
        <!--END: each-slide component-->

        <!-- Add additional indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white">•</label>
          </li>
        </ol>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Slide from './Slide.vue'
export default Vue.extend({
  name: "Slides",

  //Components
  components: {
    Slide
  },

  //props
  props: ["slides"]

});
</script>

<style lang="css" scoped>

.carousel-open:checked+.carousel-item {
  position: static;
  opacity: 100;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked~.control-1~.carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked~.control-2~.carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked~.control-3~.carousel-indicators li:nth-child(3) .carousel-bullet {
  color: #ffffff;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
