<template>
<section id="section2" class=" h-screen">
  <div class="w-100 bg-white font-sans leading-normal tracking-normal">
    <div class="carousel relative shadow-2xl bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">

        <div v-for="slide in slides" v-bind:key="slide.id">
          <!--Slide 1-->
          <input class="carousel-open" type="radio" v-bind:id="[slide.slideOrder]" name="carousel" aria-hidden="true" hidden="" checked="checked">
          <div class="carousel-item absolute opacity-0" v-bind:class="[slide.classes]" style="height:100vh; ">
            <div class="block h-full w-full text-white text-center flex flex-col">
              <div class="flex flex-col mt-16">
                <div class="flex flex-col mb-5">
                  <p class="font-objectivity uppercase text-2xl tracking-wide">
                    Become a
                  </p>
                  <p class="font-neuemachina uppercase text-5xl tracking-wider">
                    {{slide.becomeWhat}}
                  </p>
                </div>
                <div class="flex mt-10 justify-center flex-wrap">
                  <!-- Column 1 -->
                  <div class="flex flex-col">
                    <div class="flex">
                      <div class="t1 small-box bg-white rounded-lg mr-4">
                        &nbsp;
                      </div>
                      <div class="t3 small-box bg-white rounded-lg mr-4">
                        &nbsp;
                      </div>
                    </div>
                    <div class="t2 long-box bg-white rounded-lg mt-4 mr-4">
                      &nbsp;
                    </div>
                  </div>


                  <!-- Column 2 -->
                  <div class="big-box bg-white rounded-lg relative">
                    <img :src="require('@/assets/img/index-unauth/HACKER mascot.svg')" class="absolute mascot-1" />
                  </div>


                  <!-- Column 3 -->
                  <div class="flex flex-col">
                    <div class="flex">
                      <div class="t2 small-box bg-white rounded-lg ml-4">
                        &nbsp;
                      </div>
                      <div class="t1 small-box bg-white rounded-lg ml-4">
                        &nbsp;
                      </div>
                    </div>
                    <div class="t3 long-box bg-white rounded-lg mt-4 ml-4">
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <!--Slide 2-->
        <!-- <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:100vh; background: linear-gradient(283.99deg, #FF7B92 7.28%, #E13894 100%);">
          <div class="block h-full w-full text-white text-5xl text-center"></div>
        </div> -->

        <!--Slide 3-->
        <!-- <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item absolute opacity-0" style="height:100vh; background: linear-gradient(283.99deg, #B0CA88 7.28%, #70B9A2 100%);">
          <div class="block h-full w-full text-white text-5xl text-center"></div>
        </div> -->

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

  // Data for Slides
  data() {
    return {
      slides: [{
          id: 0,
          slideOrder: 'carousel-1',
          becomeWhat: "Hacker",
          classes: "slide1"
        },
        {
          id: 1,
          slideOrder: 'carousel-2',
          becomeWhat: "Hipster",
          classes: "slide2"
        },
        {
          id: 2,
          slideOrder: 'carousel-3',
          becomeWhat: "Hustler",
          classes: "slide3"
        },
      ],

    };
  },
});
</script>

<style scoped>
@font-face {
  font-family: Objectivity;
  src: url('../../assets/font/Objectivity-Medium.otf');
}

@font-face {
  font-family: Neue Machina;
  src: url('../../assets/font/NeueMachina-Ultrabold.woff');
}

.slide1 {
  background: linear-gradient(283.99deg, #4E6AFA 7.28%, #9298FF 100%);
}

.slide2 {
  background: linear-gradient(283.99deg, #FF7B92 7.28%, #E13894 100%);
}

.slide3 {
  background: linear-gradient(283.99deg, #B0CA88 7.28%, #70B9A2 100%);
}


.t1 {
  filter: brightness(80%);
  background-image: url('../../assets/img/index-unauth/HACKER BG 1.png');
  background-size: cover;
}

.t2 {
  filter: brightness(80%);
  background-image: url('../../assets/img/index-unauth/HACKER BG 2.png');
  background-size: cover;
}

.t3 {
  filter: brightness(80%);
  background-image: url('../../assets/img/index-unauth/HACKER BG 5.png');
  background-size: cover;
}

.font-objectivity {
  font-family: Objectivity;
}

.font-neuemachina {
  font-family: Neue Machina;
}

.big-box {
  width: 20rem;
  height: 20rem;
}

.small-box {
  height: 9.5rem;
  width: 9.5rem;
}

.long-box {
  width: 20rem;
  height: 9.5rem;
}

.mascot-1 {
  left: -50px;
  bottom: -50px;
  width: 200px;
  height: auto;
  z-index: 10;
}

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
