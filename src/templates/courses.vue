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

      <h3
        class="mb-4 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Related
      </h3>

      <div v-if="!$page.thisCourse.articles.length > 0">No Articles Yet</div>
      <div v-else class="grid grid-cols-4 gap-4 mt-1 mb-24">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.node.id"
          v-bind:article="article"
          class="w-full"
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
    description,
    articles{
      id,
      title
    }
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
  metaInfo() {
    return {
      title: this.$page.thisCourse.name,
    };
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
      if (this.$page.thisCourse.articles.length > 0) {
        return this.articles.filter((article) => {
          if (article.node.courses != null) {
            if (article.node.courses.id.includes(this.$page.thisCourse.id)) {
              // console.log(article.node.title + " = " + article.node.courses);
              return article;
            }
          }
        });
      }

      return [];
    },

    // filteredArticles() {
    //   if (this.$page.thisCourse.articles.length > 0) {
    //     return this.articles.filter((article) => {
    //       if (article.node.courses.id.includes(this.$page.thisCourse.id)) {
    //         console.log(article.node.title);
    //         return article;
    //       }
    //     });
    //   }

    //   return [];
    // },
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