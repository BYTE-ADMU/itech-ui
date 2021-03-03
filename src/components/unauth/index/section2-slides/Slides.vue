<!--Slides for all Slide components-->
<template >
  <div>
    <div class="relative shadow-2xl carousel">
      <div class="relative w-full overflow-hidden carousel-inner">
        <!--START: each-slide component-->
        <div v-for="slide in slides" v-bind:key="slide.id">
          <Slide v-bind:slide="slide" />
        </div>
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
