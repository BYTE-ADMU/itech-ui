//START: TEMPLATE
<template>
  <Layout>
    <!-- ROOT -->
    <div
      class="container flex flex-col w-screen min-h-screen py-20 mx-auto mb-24"
    >
      <div class="flex items-start justify-between w-full">
        <!-- Featured & New On ITECH -->
        <div class="flex flex-col w-full">
          <featureEntry />
        </div>
      </div>

      <!-- Featured Courses & Playlists-->
      <div class="flex w-full mt-12">
        <div class="w-3/12">
          <h2 class="p-2 mx-auto text-4xl font-neuemachina">
            Courses & Playlists ✨
          </h2>
          <p class="p-2 mt-10 text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>
        <playlistEntry />
        <playlistEntry />
        <playlistEntry />
      </div>

      <hr class="mt-12 mb-6" />

      <h3
        class="mx-2 mt-12 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Course 1
      </h3>
      <div class="flex justify-between mt-1 mb-24">
        <articleEntry v-bind:article="articles[0]" />
        <articleEntry v-bind:article="articles[1]" />
        <articleEntry v-bind:article="articles[2]" />
        <articleEntry v-bind:article="articles[0]" />
      </div>

      <h3
        class="mx-2 mt-12 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Course 2
      </h3>
      <div class="flex justify-between mt-1 mb-24">
        <articleEntry v-bind:article="articles[0]" />
        <articleEntry v-bind:article="articles[1]" />
        <articleEntry v-bind:article="articles[2]" />
        <articleEntry v-bind:article="articles[0]" />
      </div>

      <h3
        class="mx-2 mt-12 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Course 3
      </h3>
      <div class="flex justify-between mt-1 mb-24">
        <articleEntry v-bind:article="articles[0]" />
        <articleEntry v-bind:article="articles[1]" />
        <articleEntry v-bind:article="articles[2]" />
        <articleEntry v-bind:article="articles[0]" />
      </div>

      <h3
        class="mx-2 mt-12 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Course 4
      </h3>
      <div class="flex justify-between mt-1 mb-24">
        <articleEntry v-bind:article="articles[0]" />
        <articleEntry v-bind:article="articles[1]" />
        <articleEntry v-bind:article="articles[2]" />
        <articleEntry v-bind:article="articles[0]" />
      </div>
      <!-- END COMPONENTS -->
    </div>
  </Layout>
</template>
//END: TEMPLATE

// START: PAGE QUERY
<page-query>
  query {
    allArticles(order:DESC){
      edges{
        node{
          publishedDate,
          id,
          category,
          title,
          author,
          thumbnailImage,
        }
      }
    }
  }

</page-query>
// END : PAGE QUERY

//START: SCRIPT
<script>
import articleEntry from "../components/auth/dashboard/articleEntry";
import featureEntry from "../components/auth/dashboard/featureEntry";
import playlistEntry from "../components/auth/dashboard/playlistEntry";
import playlistTall from "../components/auth/dashboard/playlistTall";
import bitbotFeature from "../components/auth/dashboard/bitbotFeature";
import articleHeader from "../components/auth/dashboard/articleHeader";

export default {
  name: "Catalogue",
  data() {
    return {
      articles: [],
    };
  },

  mounted() {
    this.articles = this.$page.allArticles.edges;
  },

  computed: {
    hackerArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hacker");
      });
    },
    hipsterArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hipster");
      });
    },
    hustlerArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hustler");
      });
    },
  },

  components: {
    articleEntry,
    featureEntry,
    playlistEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
  },
};
</script>
//END: SCRIPT

<style>
div > .tg {
  filter: brightness(80%);
}
</style>