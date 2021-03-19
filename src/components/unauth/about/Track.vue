<template>
  <!-- START: SECOND COLUMN -->
  <g-link :to="`/categories/${category.toLowerCase()}`" class="mx-auto">
    <p class="mb-5 track_header">{{ category }} Track</p>

    <div :class="trackerBackground" style="width: 240px; height: 240px">
      <g-image :src="botImage" class="mx-auto unauthBot" />
    </div>

    <div class="flex flex-wrap text-center" style="max-width: 350px">
      <div
        v-if="category === 'Hacker'"
        v-for="topic in threeHackertopics"
        v-bind:key="topic.id"
        class="flex-auto mx-2 my-3"
      >
        <g-link
          :to="`/topics/${topic.id}`"
          class="px-5 py-3 mx-auto form_button font-objectivity"
        >
          {{ topic.name }}
        </g-link>
      </div>

      <div
        v-if="category === 'Hipster'"
        v-for="topic in threeHipstertopics"
        v-bind:key="topic.id"
        class="flex-auto mx-2 my-3"
      >
        <g-link
          :to="`/topics/${topic.id}`"
          class="px-5 py-3 mx-auto form_button font-objectivity"
        >
          {{ topic.name }}
        </g-link>
      </div>

      <div
        v-if="category === 'Hustler'"
        v-for="topic in threeHustlertopics"
        v-bind:key="topic.id"
        class="flex-auto mx-2 my-3"
      >
        <g-link
          :to="`/topics/${topic.id}`"
          class="px-5 py-3 mx-auto form_button font-objectivity"
        >
          {{ topic.name }}
        </g-link>
      </div>
    </div>
  </g-link>
  <!-- END: SECOND COLUMN -->
</template>

<script>
export default {
  name: "Track",
  props: ["category"],

  computed: {
    topics() {
      const data = this.$store.state.topicsStore.topics.reverse();
      return data;
    },

    filteredHackerTopics() {
      return this.topics.filter((topic) => {
        return topic.categories[0].name.includes("Hacker");
      });
    },

    threeHackertopics() {
      return this.filteredHackerTopics.slice(0, 3);
    },

    filteredHipsterTopics() {
      return this.topics.filter((topic) => {
        return topic.categories[0].name.includes("Hipster");
      });
    },

    threeHipstertopics() {
      return this.filteredHipsterTopics.slice(0, 3);
    },

    filteredHustlerTopics() {
      return this.topics.filter((topic) => {
        return topic.categories[0].name.includes("Hustler");
      });
    },

    threeHustlertopics() {
      return this.filteredHustlerTopics.slice(0, 3);
    },

    trackerBackground() {
      const defaultStyle = "mx-auto  rounded-full p-10 unauthBot-hover mb-5 ";
      switch (this.category.toLowerCase()) {
        case "hacker":
          return `hackerStyle ${defaultStyle}`;
        case "hipster":
          return `hipsterStyle ${defaultStyle}`;
        case "hustler":
          return `hustlerStyle ${defaultStyle}`;
        default:
          return `hackerStyle ${defaultStyle}`;
      }
    },

    botImage() {
      const hacker = require("@/assets/img/bitbots/bbhacker.svg");
      const hipster = require("@/assets/img/bitbots/bbhipster.svg");
      const hustler = require("@/assets/img/bitbots/bbhustler.svg");
      switch (this.category.toLowerCase()) {
        case "hacker":
          return hacker;
        case "hipster":
          return hipster;
        case "hustler":
          return hustler;
        default:
          return hacker;
      }
    },
  },
};
</script>

<style scoped>
.track_header {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  text-align: center;
  color: #151316;
}
.hackerStyle {
  background: linear-gradient(283.99deg, #4e6afa 7.28%, #9298ff 100%);
}

.hipsterStyle {
  background: linear-gradient(283.99deg, #ff7b92 7.28%, #e13894 100%);
}

.hustlerStyle {
  background: linear-gradient(283.99deg, #b0ca88 7.28%, #70b9a2 100%);
}

.unauthBot {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.unauthBot-hover:hover > .unauthBot {
  animation: botBounce 900ms infinite;
}

@keyframes botBounce {
  30% {
    transform: scale(1.07);
  }
  50% {
    transform: scale(0.95);
  }
  80% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}
</style>