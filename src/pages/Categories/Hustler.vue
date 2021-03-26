<template>
  <Layout>
    <!-- ROOT -->

    <div
      class="container z-0 flex flex-col w-full min-h-screen p-6 pb-20 mx-auto mb-24 sm:pt-10"
    >
      <span class="mb-4 sm:mb-10 breadcrumb-container">
        <button button @click="$router.go(-1)" class="breadcrumb-text">
          Back
        </button>
      </span>

      <div class="flex items-start justify-between w-full">
        <!-- CATEGORY COVER -->
        <div class="flex flex-col w-full">
          <cover :category="this.$router.history.current.path" />
        </div>
      </div>

      <!-- COURSES-->
      <div
        v-if="courses.length === 0"
        class="grid grid-cols-1 gap-2 md:grid-cols-4"
      >
        <div class="w-full py-2">
          <h2 class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Courses ✨
          </h2>

          <p class="text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <coursesPlaceholder class="w-full" />
        <coursesPlaceholder class="w-full" />
        <coursesPlaceholder class="w-full" />
      </div>
      <div v-else class="grid grid-cols-1 gap-2 mb-12 md:grid-cols-4">
        <div class="w-full py-2">
          <h2 class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Courses ✨
          </h2>

          <p class="text-l font-objectivity">
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

      <div
        v-if="articles.length === 0"
        class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
      </div>
      <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
import coursesPlaceholder from "@/components/auth/dashboard/coursesPlaceholder";
import articlePlaceholder from "../../components/auth/dashboard/articlePlaceholder";

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
    coursesPlaceholder,
    articlePlaceholder,
  },

  name: "Categories",
  metaInfo: {
    title: "Categories",
  },

  data() {
    return {
      isLoading: true,
      category: "Hustler",
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

.breadcrumb-text {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #dbdad5;
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.breadcrumb-text:hover {
  color: #83827f;
}

@media screen and (max-width: 950px) {
  .breadcrumb-container {
    margin-top: 80px;
  }
}
</style>

