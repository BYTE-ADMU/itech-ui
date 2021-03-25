<template>
  <Layout>
    <!-- ROOT -->
    <!-- <div
      v-if="articles === null && courses === null && topics === null"
      class="flex flex-col w-2/3 min-h-screen py-20 mx-auto mb-24"
    >
      <Loader />
    </div> -->

    <div
      class="container flex flex-col w-screen min-h-screen pb-20 mx-auto mb-24 sm:py-20"
    >
      <div class="flex items-start justify-between w-full">
        <!-- Featured & New On ITECH -->
        <div class="flex flex-col w-full">
          <featureEntry
            v-if="featuredArticle !== null"
            v-bind:key="featuredArticle.id"
            v-bind:article="featuredArticle"
          />

          <featureEntry v-else v-bind:article="null" />

          <div class="px-6">
            <h3
              class="mx-2 mt-12 text-2xl font-bold uppercase font-neuemachina"
            >
              New On ITECH
            </h3>
            <div
              v-if="newOnItech !== null"
              class="grid grid-cols-1 gap-4 mt-1 mb-8 sm:grid-cols-2 md:grid-cols-4"
            >
              <articleEntry
                class="w-full mb-0 sm:mb-1 md:mb-2"
                v-for="article in newOnItech"
                v-bind:key="article.id"
                v-bind:article="article"
              ></articleEntry>
            </div>

            <div
              v-else
              class="grid grid-cols-1 gap-4 mt-1 mb-8 sm:grid-cols-2 md:grid-cols-4"
            >
              <articleEntry
                class="w-full mb-0 sm:mb-1 md:mb-2"
                v-for="(article, num) in 4"
                v-bind:key="num"
                v-bind:article="null"
              ></articleEntry>
            </div>
          </div>
        </div>
      </div>

      <hr class="mb-8" />

      <!-- Featured Courses & Playlists-->

      <div
        class="grid grid-cols-1 gap-4 px-6 mb-12 md:grid-cols-4"
        v-if="threeFeaturedCourses !== null"
      >
        <div class="w-full py-2">
          <h2
            class="px-3 py-2 mx-auto text-2xl sm:text-3xl md:text-4xl font-neuemachina"
          >
            Featured Courses ✨
          </h2>
        </div>

        <playlistEntry
          v-for="course in threeFeaturedCourses"
          v-bind:key="course.id"
          v-bind:course="course"
        />
      </div>
      <div class="grid grid-cols-1 gap-4 px-6 mb-12 md:grid-cols-4" v-else>
        <div class="w-full py-2">
          <h2
            class="px-3 py-2 mx-auto text-2xl sm:text-3xl md:text-4xl font-neuemachina"
          >
            Featured Courses ✨
          </h2>
        </div>

        <playlistEntry
          v-for="(course, num) in 3"
          v-bind:key="num"
          v-bind:course="null"
        />
      </div>

      <!-- Hacker -->
      <div class="w-full px-6 mt-8 mb-8 md:flex">
        <bitbotFeature bb3="hacker" />
        <div class="flex md:flex-col md:w-9/12">
          <h5
            class="hidden mx-2 mb-1 font-bold uppercase text-md font-neuemachina article-text md:block"
          >
            Articles
          </h5>
          <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-3"
            v-if="threeHackerArticles !== null"
          >
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="article in threeHackerArticles"
              v-bind:key="article.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3" v-else>
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="(article, num) in 3"
              v-bind:key="num"
              v-bind:article="null"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- Hipster -->
      <div class="w-full px-6 mt-8 mb-8 md:flex">
        <bitbotFeature bb3="hipster" />
        <div class="flex md:flex-col md:w-9/12">
          <h5
            class="hidden mx-2 mb-1 font-bold uppercase text-md font-neuemachina article-text md:block"
          >
            Articles
          </h5>
          <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-3"
            v-if="threeHipsterArticles !== null"
          >
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="article in threeHipsterArticles"
              v-bind:key="article.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3" v-else>
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="(article, num) in 3"
              v-bind:key="num"
              v-bind:article="null"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- Hustler -->
      <div class="w-full px-6 mt-8 mb-8 md:flex">
        <bitbotFeature bb3="hustler" />
        <div class="flex md:flex-col md:w-9/12">
          <h5
            class="hidden mx-2 mb-1 font-bold uppercase text-md font-neuemachina article-text md:block"
          >
            Articles
          </h5>
          <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-3"
            v-if="threeHustlerArticles !== null"
          >
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="article in threeHustlerArticles"
              v-bind:key="article.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3" v-else>
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="(article, num) in 3"
              v-bind:key="num"
              v-bind:article="null"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- END COMPONENTS -->
    </div>
  </Layout>
</template>

<script>
import Loader from "../components/Loader";
import articleEntry from "../components/auth/dashboard/articleEntry";
import featureEntry from "../components/auth/dashboard/featureEntry";
import playlistEntry from "../components/auth/dashboard/playlistEntry";
import playlistTall from "../components/auth/dashboard/playlistTall";
import bitbotFeature from "../components/auth/dashboard/bitbotFeature";
import articleHeader from "../components/auth/dashboard/articleHeader";
import coursesPlaceholder from "../components/auth/dashboard/coursesPlaceholder";
import articlePlaceholder from "../components/auth/dashboard/articlePlaceholder";

export default {
  name: "Dashboard",
  metaInfo: {
    title: "Dashboard",
  },

  components: {
    Loader,
    articleEntry,
    featureEntry,
    playlistEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
    coursesPlaceholder,
    articlePlaceholder,
  },

  async mounted() {
    this.$store.dispatch("userStore/getUser");
  },

  computed: {
    // START: GET DATA FROM STORE
    courses() {
      const data = this.$store.state.coursesStore.courses.reverse();
      if (typeof data !== undefined || data.length !== 0) {
        return data;
      }
      return [];
    },

    articles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      if (typeof data !== undefined || data.length !== 0) {
        return data;
      }
      return [];
    },

    // END: GET DATA FROM STORE

    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },

    hackerArticles() {
      if (this.articles.length !== 0) {
        return this.articles.filter((article) => {
          return article.categories[0].name.includes("Hacker");
        });
      }
      return [];
    },
    hipsterArticles() {
      if (this.articles.length !== 0) {
        return this.articles.filter((article) => {
          return article.categories[0].name.includes("Hipster");
        });
      }
      return [];
    },
    hustlerArticles() {
      if (this.articles.length !== 0) {
        return this.articles.filter((article) => {
          return article.categories[0].name.includes("Hustler");
        });
      }
      return [];
    },

    featuredArticle() {
      if (this.articles.length !== 0) {
        return this.articles[Math.floor(Math.random() * this.articles.length)];
      }
      return null;
    },

    newOnItech() {
      if (this.articles.length !== 0) {
        return this.articles.slice(0, 4);
      }
      return null;
    },

    threeFeaturedCourses() {
      if (this.courses.length !== 0) {
        return this.courses.slice(0, 3);
      }
      return null;
    },

    threeHackerArticles() {
      if (this.hackerArticles.length !== 0) {
        return this.hackerArticles.slice(0, 3);
      }
      return null;
    },
    threeHipsterArticles() {
      if (this.hipsterArticles.length !== 0) {
        return this.hipsterArticles.slice(0, 3);
      }
      return null;
    },
    threeHustlerArticles() {
      if (this.hustlerArticles.length !== 0) {
        return this.hustlerArticles.slice(0, 3);
      }
      return null;
    },
  },
};
</script>

<style>
div > .tg {
  filter: brightness(80%);
}

.h-pic {
  height: 8.5rem;
}

.articleEntry-topic {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */

  /* ITECH Teal */

  color: #64c0c1;
}

.articleEntry-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  text-align: left;
}

.articleEntry-author {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
}

.article-text {
  font-weight: 900;
}
</style>



