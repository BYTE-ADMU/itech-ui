<template>
  <section id="section2" class="">
    <Slides :slides="slides" />
  </section>
</template>

<script>
import Vue from "vue";
import Slides from "./section2-slides/Slides2.vue";

export default Vue.extend({
  name: "unauth-index-section3",

  components: {
    Slides,
  },

  // Data for Slides
  data() {
    return {
      slides: [
        {
          id: 0,
          order: "carousel-1",
          categories: "Hacker",
          description:
            "Hacker is the first H out of BYTE’s 3Hs. Hackers have the skill to program website or application prototypes from ideations. ",
        },
        {
          id: 1,
          order: "carousel-2",
          categories: "Hipster",
          description:
            "Hipster is the second H out of BYTE’s 3Hs. Hipsters have an eye and mind for creativity that can be applied to web and mobile design. ",
        },
        {
          id: 2,
          order: "carousel-3",
          categories: "Hustler",
          description:
            "Hustler is the third and last H out of BYTE’s 3Hs. Hustlers have the ability to think of innovative ideas and have an entrepreneurial mindset to develop a business.",
        },
      ],
    };
  },
});
</script>

<style>
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

.carousel-open:checked + .carousel-item {
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

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #ffffff;
}
</style>
