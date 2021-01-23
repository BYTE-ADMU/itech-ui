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
          <cover :category="this.$router.history.current.path" />
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

      <div class="flex justify-between mt-1 mb-24">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.node.id"
          v-bind:article="article"
        ></articleEntry>
      </div>
    </div>
  </Layout>
</template>
//END: TEMPLATE

// START: PAGE QUERY
<page-query>
  query {
    nextArticles:allArticles(order:DESC){
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
import cover from "../../components/auth/categories/cover";
import articleEntry from "../../components/auth/dashboard/articleEntry";
import playlistEntry from "../../components/auth/dashboard/playlistEntry";
import playlistTall from "../../components/auth/dashboard/playlistTall";
import bitbotFeature from "../../components/auth/dashboard/bitbotFeature";
import articleHeader from "../../components/auth/dashboard/articleHeader";

export default {
  name: "Hustler",
  metaInfo: {
    title: "Categories",
  },

  data() {
    return {
      articles: [],
    };
  },

  mounted() {
    this.articles = this.$page.nextArticles.edges;
  },

  computed: {
    filteredArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hustler");
      });
    },
  },

  components: {
    cover,
    articleEntry,
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