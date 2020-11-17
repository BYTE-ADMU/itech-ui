<template>
<section id="section2" class=" h-screen">
  <Slides v-bind:slides="slides" />
</section>
</template>

<script>
import Vue from 'vue';
import Slides from './section2-slides/Slides.vue'

export default Vue.extend({
  name: 'index-unauth-section2',

  components: {
    Slides
  },

  // Data for Slides
  data() {
    return {
      slides: [{
          id: 0,
          slideOrder: 'carousel-1',
          becomeWhat: "Hacker",
          classes: [
            "slide1", //BG Color
            "t1",
            "t2",
            "t3"
          ]
        },
        {
          id: 1,
          slideOrder: 'carousel-2',
          becomeWhat: "Hipster",
          classes: [
            "slide2", //BG Color
            "t3",
            "t1",
            "t2"
          ]
        },
        {
          id: 2,
          slideOrder: 'carousel-3',
          becomeWhat: "Hustler",
          classes: [
            "slide3", //BG Color
            "t2",
            "t3",
            "t1"
          ]
        },
      ],

    };
  },
});
</script>

<style>
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
  bottom: 10%;
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
