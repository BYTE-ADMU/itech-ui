<template>
  <Layout>
    <!-- ROOT -->

    <div
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto mb-24"
    >
      <p class="mb-10 breadcrumb">
        <button @click="$router.go(-1)">Back</button>
      </p>
      <div class="flex items-start justify-between w-full">
        <!-- CATEGORY COVER -->
        <div class="flex flex-col w-full">
          <cover :category="this.$router.history.current.path" />
        </div>
      </div>

      <!-- COURSES-->
      <div class="w-full mt-12 sm:flex">
        <div class="w-full sm:w-3/12">
          <h2 class="p-2 mx-auto text-2xl lg:text-4xl font-neuemachina">
            Courses ✨
          </h2>
          <p class="p-2 mb-5 sm:mt-10 text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <playlistEntry
          v-for="course in threeFilteredCourses"
          v-bind:key="course.id"
          v-bind:course="course"
        />
      </div>

      <hr class="mt-12 mb-2" />

      <!-- ARTICLES -->
      <h2 class="py-6 text-2xl lg:text-4xl font-neuemachina">Articles ✨</h2>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.id"
          v-bind:article="article"
          class="w-full mb-0 sm:mb-1 md:mb-2"
        ></articleEntry>
      </div>
    </div>
  </Layout>
</template>



<script>
// import Loader from "../../components/Loader";
import cover from "../../components/auth/categories/cover";
import playlistRow from "../../components/auth/categories/playlistRow";
import articleEntry from "../../components/auth/dashboard/articleEntry";
import playlistEntry from "../../components/auth/dashboard/playlistEntry";
import playlistTall from "../../components/auth/dashboard/playlistTall";
import bitbotFeature from "../../components/auth/dashboard/bitbotFeature";
import articleHeader from "../../components/auth/dashboard/articleHeader";

export default {
  components: {
    // Loader,
    cover,
    playlistRow,
    articleEntry,
    playlistEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
  },

  name: "Categories",
  metaInfo: {
    title: "Categories",
  },

  data() {
    return {
      isLoading: true,
      category: "Hacker",
    };
  },

  async mounted() {
    this.category = await this.getCategory();
    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
  },

  watch: {
    "$router.history.current.path": async function () {
      this.category = await this.getCategory();
    },
  },

  methods: {
    getCategory() {
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

  computed: {
    courses() {
      const data = this.$store.state.coursesStore.courses;
      return data;
    },

    articles() {
      const data = this.$store.state.articlesStore.articles;
      return data;
    },

    filteredArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.includes(this.category);
      });
    },

    filteredCourses() {
      return this.courses.filter((course) => {
        return course.categories[0].name.includes(this.category);
      });
    },

    threeFilteredCourses() {
      return this.filteredCourses.slice(0, 3);
    },
  },
};
</script>

<style>
div > .tg {
  filter: brightness(80%);
}

.breadcrumb {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #dbdad5;
}
</style>

