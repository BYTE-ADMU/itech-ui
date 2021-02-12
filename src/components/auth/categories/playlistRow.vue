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

      <div class="grid grid-cols-4 gap-4">
        <articleEntry
          v-for="article in limitFilteredArticles"
          v-bind:key="article.node.id"
          v-bind:article="article"
          class="w-full"
        ></articleEntry>
      </div>
    </div>
    <hr class="mt-12 mb-2" />
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
    filteredArticles() {
      if (this.course.node.articles.length > 0) {
        return this.articles.filter((article) => {
          if (article.node.courses != null) {
            if (article.node.courses.id.includes(this.course.node.id)) {
              // console.log(article.node.title + " = " + article.node.courses);
              return article;
            }
          }
        });
      }

      return [];
    },

    limitFilteredArticles() {
      if (this.filteredArticles.length > 4) {
        return this.filteredArticles.slice(0, 4);
      }

      return this.filteredArticles;
    },
    //START: MY BRAIN GONE DRY, MUST FIX SA FUTURE NA LANG AHHAHA
  },
};
</script>
//END: SCRIPT

<style>
</style>