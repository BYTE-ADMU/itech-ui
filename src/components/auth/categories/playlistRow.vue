<template>
  <div>
    <div class="my-4">
      <div class="flex w-full">
        <h3
          class="w-3/4 mb-4 text-xl font-bold uppercase font-objectivity"
          style="color: #9d9d9d"
        >
          {{ course.node.name }}
        </h3>
        <g-link
          class="w-1/4 mb-4 text-xl font-bold text-right font-objectivity"
          style="color: #64c0c1"
          :to="`/courses/${course.node.id}`"
        >
          View All
        </g-link>
      </div>

      <div class="grid grid-cols-4 gap-4 mb-16">
        <articleEntry
          v-for="article in playlistFilteredArticles"
          v-bind:key="article.node.id"
          v-bind:article="article"
          class="w-full"
        ></articleEntry>
      </div>
    </div>
    <hr class="mt-16 mb-2" />
  </div>
</template>

<script>
import articleEntry from "../dashboard/articleEntry";

export default {
  name: "playlistRow",
  props: ["course", "articles"],
  components: {
    articleEntry,
  },

  computed: {
    //START: MY BRAIN GONE DRY, MUST FIX SA FUTURE NA LANG AHHAHA
    a1() {
      return this.articles.filter((article) => {
        return article.node.id.includes(this.course.node.articles[0].id);
      });
    },

    a2() {
      return this.articles.filter((article) => {
        return article.node.id.includes(this.course.node.articles[1].id);
      });
    },

    a3() {
      return this.articles.filter((article) => {
        return article.node.id.includes(this.course.node.articles[2].id);
      });
    },

    a4() {
      return this.articles.filter((article) => {
        return article.node.id.includes(this.course.node.articles[3].id);
      });
    },

    playlistFilteredArticles() {
      let playlistFilteredArticles = [];
      playlistFilteredArticles[0] = this.a1[0];
      playlistFilteredArticles[1] = this.a2[0];
      playlistFilteredArticles[2] = this.a3[0];
      // playlistfilteredArticles[3] = this.a4[0];
      return playlistFilteredArticles;
    },
    //START: MY BRAIN GONE DRY, MUST FIX SA FUTURE NA LANG AHHAHA
  },
};
</script>
//END: SCRIPT

<style>
</style>