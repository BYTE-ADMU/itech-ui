<template>
  <section id="section2">
    <Slides :slides="slides" />
  </section>
</template>

<script>
import Vue from "vue";
import Slides from "./section2-slides/Slides.vue";

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
</style>


