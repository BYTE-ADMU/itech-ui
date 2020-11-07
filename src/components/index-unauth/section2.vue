<template>
<section id="section2" class=" h-screen">
  <div class="w-100 bg-white font-sans leading-normal tracking-normal">
    <div class="carousel relative shadow-2xl bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">

        <!--Slide 1-->
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item absolute opacity-0" style="height:100vh; background: linear-gradient(283.99deg, #4E6AFA 7.28%, #9298FF 100%);">
          <div class="block h-full w-full text-white text-5xl text-center flex flex-col">
          </div>
        </div>

        <!--Slide 2-->
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:100vh; background: linear-gradient(283.99deg, #FF7B92 7.28%, #E13894 100%);">
          <div class="block h-full w-full text-white text-5xl text-center"></div>
        </div>

        <!--Slide 3-->
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:100vh; background: linear-gradient(283.99deg, #B0CA88 7.28%, #70B9A2 100%);">
          <div class="block h-full w-full text-white text-5xl text-center"></div>
        </div>

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
</section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'index-unauth-section2',
});
</script>

<style scoped>
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
