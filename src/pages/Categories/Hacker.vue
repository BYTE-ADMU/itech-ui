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
            Courses ✨
          </h2>
          <p class="p-2 mt-10 text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <playlistEntry
          v-for="course in threeFilteredCourses"
          v-bind:key="course.node.id"
          v-bind:course="course"
        />
      </div>

      <hr class="mt-12 mb-2" />

      <h2 class="p-6 text-4xl font-neuemachina">
        Articles ✨
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.node.id"
          v-bind:article="article"
          class="w-full mb-2"
        ></articleEntry>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
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
            name,
          }
        }
      }
    }    

    allCourses(order:DESC){
      edges{
        node{
          id,
          categories,
          name,
          thumbnail,
          articles{
            id,
            title
          }
        }
      }
    }    
  }


</page-query>

<script>
import cover from "../../components/auth/categories/cover";
import playlistRow from "../../components/auth/categories/playlistRow";
import articleEntry from "../../components/auth/dashboard/articleEntry";
import playlistEntry from "../../components/auth/dashboard/playlistEntry";
import playlistTall from "../../components/auth/dashboard/playlistTall";
import bitbotFeature from "../../components/auth/dashboard/bitbotFeature";
import articleHeader from "../../components/auth/dashboard/articleHeader";

export default {
  name: "Categories",
  metaInfo: {
    title: "Categories",
  },

  data() {
    return {
      articles: [],
      courses: [],
    };
  },

  mounted() {
    this.articles = this.$page.allArticles.edges;
    this.courses = this.$page.allCourses.edges;
  },

  computed: {
    filteredArticles() {
      return this.articles.filter((article) => {
        return article.node.categories.includes(this.category);
      });
    },

    filteredCourses() {
      return this.courses.filter((course) => {
        return course.node.categories.includes(this.category);
      });
    },

    threeFilteredCourses() {
      return this.filteredCourses.slice(0, 3);
    },

    category() {
      switch (this.$router.history.current.path) {
        case "/categories/hacker":
          return "Hacker";
        case "/categories/hipster":
          return "Hipster";
        case "/categories/hustler":
          return "Hustler";
        default:
          return "Hacker";
      }
    },
  },

  components: {
    cover,
    playlistRow,
    articleEntry,
    playlistEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
  },
};
</script>

<style>
div > .tg {
  filter: brightness(80%);
}
</style>

