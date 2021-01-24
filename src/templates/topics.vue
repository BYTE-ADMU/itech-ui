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
          <cover :course="$page.thisCourse" />
        </div>
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
query($id:ID!){
  thisCourse: courses(id:$id){
    id,
    name,
    description
  },

    allArticles(order:DESC){
      edges{
        node{
          publishedDate,
          id,
          categories,
          title,
          author,
          thumbnailImage,
          courses{
            id,
            name
          }
        }
      }
    }    
  }


</page-query>
// END : PAGE QUERY

//START: SCRIPT
<script>
import cover from "../components/auth/courses/cover";
import articleEntry from "../components/auth/dashboard/articleEntry";
import playlistTall from "../components/auth/dashboard/playlistTall";
import bitbotFeature from "../components/auth/dashboard/bitbotFeature";
import articleHeader from "../components/auth/dashboard/articleHeader";

export default {
  name: "Courses",
  metaInfo: {
    title: "Courses",
  },

  data() {
    return {
      articles: [],
    };
  },

  mounted() {
    this.articles = this.$page.allArticles.edges;
  },

  computed: {
    filteredArticles() {
      return this.articles.filter((article) => {
        return article.node.courses.id.includes(this.$page.thisCourse.id);
      });
    },
  },

  components: {
    cover,
    articleEntry,
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