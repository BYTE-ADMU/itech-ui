<template>
  <Layout>
    <!-- ROOT -->
    <div
      v-if="articles === null && courses === null && topics === null"
      class="flex flex-col w-2/3 min-h-screen py-20 mx-auto mb-24"
    >
      <Loader />
    </div>

    <div
      v-else
      class="container flex flex-col w-screen min-h-screen pb-20 mx-auto mb-24 sm:py-20"
    >
      <div class="flex items-start justify-between w-full">
        <!-- Featured & New On ITECH -->
        <div class="flex flex-col">
          <featureEntry
            v-bind:key="featuredArticle.id"
            v-bind:article="featuredArticle"
          />

          <div class="px-6">
            <h3
              class="mx-2 mt-12 text-2xl font-bold uppercase font-neuemachina"
            >
              New On ITECH
            </h3>
            <div
              class="grid grid-cols-1 gap-4 mt-1 mb-8 sm:grid-cols-2 md:grid-cols-4"
            >
              <articleEntry
                class="w-full mb-0 sm:mb-1 md:mb-2"
                v-for="article in newOnItech"
                v-bind:key="article.id"
                v-bind:article="article"
              ></articleEntry>
            </div>
          </div>
        </div>
      </div>

      <hr class="mb-8" />

      <!-- Featured Courses & Playlists-->
      <div class="w-full px-6 mt-4 mb-12 sm:flex">
        <div class="w-full sm:w-3/12">
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
      <!-- Hacker -->
      <div class="w-full px-6 mt-8 mb-8 md:flex">
        <bitbotFeature bb3="hacker" />
        <div class="flex md:flex-col md:w-9/12">
          <h5
            class="hidden mx-2 mb-1 font-bold uppercase text-md font-neuemachina article-text md:block"
          >
            Articles
          </h5>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="article in threeHackerArticles"
              v-bind:key="article.id"
              v-bind:article="article"
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
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="article in threeHipsterArticles"
              v-bind:key="article.id"
              v-bind:article="article"
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
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <articleEntry
              class="w-full mb-0 sm:mb-1 md:mb-2"
              v-for="article in threeHustlerArticles"
              v-bind:key="article.id"
              v-bind:article="article"
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

import axios from "axios";

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
  },

  data() {
    return {
      topics: null,
      courses: null,
      articles: null,
    };
  },

  async mounted() {
    this.topics = await this.getTopics();
    this.courses = await this.getCourses();
    this.articles = await this.getArticles();
    this.$store.dispatch("userStore/getUser");

    // this.articles = await this.$store.dispatch("articlesStore/getArticles");
    // this.$store.dispatch("coursesStore/getCourses");
    // this.$store.dispatch("topicsStore/getTopics");
  },

  computed: {
    // START: GET DATA FROM STORE
    // topics() {
    //   const data = this.$store.state.topicsStore.topics.reverse();
    //   return data;
    // },

    // courses() {
    //   const data = this.$store.state.coursesStore.courses.reverse();
    //   return data;
    // },

    // articles() {
    //   const data = this.$store.state.articlesStore.articles.reverse();
    //   return data;
    // },

    // END: GET DATA FROM STORE

    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },

    hackerArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.includes("Hacker");
      });
    },
    hipsterArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.includes("Hipster");
      });
    },
    hustlerArticles() {
      return this.articles.filter((article) => {
        return article.categories[0].name.includes("Hustler");
      });
    },

    featuredArticle() {
      return this.articles[Math.floor(Math.random() * this.articles.length)];
    },

    featuredCourse() {
      return this.courses[Math.floor(Math.random() * this.courses.length)];
    },

    newOnItech() {
      return this.articles.slice(0, 4);
    },

    threeFeaturedCourses() {
      return this.courses.slice(0, 3);
    },

    threeHackerArticles() {
      return this.hackerArticles.slice(0, 3);
    },
    threeHipsterArticles() {
      return this.hipsterArticles.slice(0, 3);
    },
    threeHustlerArticles() {
      return this.hustlerArticles.slice(0, 3);
    },

    // TOPICS
    hackerTopics() {
      return this.topics.filter((topic) => {
        return topic.categories[0].name.includes("Hacker");
      });
    },
    hipsterTopics() {
      return this.topics.filter((topic) => {
        return topic.categories[0].name.includes("Hipster");
      });
    },
    hustlerTopics() {
      return this.topics.filter((topic) => {
        return topic.categories[0].name.includes("Hustler");
      });
    },

    threeHackerTopics() {
      return this.hackerTopics.slice(0, 3);
    },
    threeHipsterTopics() {
      return this.hipsterTopics.slice(0, 3);
    },
    threeHustlerTopics() {
      return this.hustlerTopics.slice(0, 3);
    },
  },

  methods: {
    async getTopics() {
      const data = this.$store.state.topicsStore.topics.reverse();
      return data;
    },
    async getCourses() {
      const data = this.$store.state.coursesStore.courses.reverse();
      return data;
    },
    async getArticles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      return data;
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



