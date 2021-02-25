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
      class="container flex flex-col w-screen min-h-screen py-20 mx-auto mb-24"
    >
      <div class="flex items-start justify-between w-full">
        <!-- Featured & New On ITECH -->
        <div class="flex flex-col w-9/12">
          <featureEntry
            v-bind:key="featuredArticle.id"
            v-bind:article="featuredArticle"
          />

          <h3 class="mx-2 mt-12 text-xl font-bold uppercase font-objectivity">
            New On ITECH
          </h3>
          <div class="flex justify-between mt-1 mb-24">
            <articleEntry
              v-for="article in newOnItech"
              v-bind:key="article.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
        <!-- Topic of the Week -->
        <playlistTall
          v-bind:key="featuredCourse.id"
          v-bind:course="featuredCourse"
        />
      </div>

      <hr class="mb-12" />

      <!-- Featured Courses & Playlists-->
      <div class="flex w-full mt-4">
        <div class="w-3/12">
          <h2 class="p-2 mx-auto text-4xl font-neuemachina">
            Featured Courses & Playlists ✨
          </h2>
        </div>
        <playlistEntry
          v-for="course in threeFeaturedCourses"
          v-bind:key="course.id"
          v-bind:course="course"
        />
      </div>
      <!-- Hacker -->
      <div class="flex items-center w-full mt-8 mb-8">
        <bitbotFeature bb3="hacker" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>

          <div class="grid grid-cols-3 mb-2">
            <articleHeader
              v-for="topic in threeHackerTopics"
              v-bind:key="topic.id"
              v-bind:topic="topic"
            ></articleHeader>
            <!-- <div v-for="topic in topics" v-bind:key="topic.node.id">TOPICS</div> -->
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <articleEntry
              v-for="article in threeHackerArticles"
              v-bind:key="article.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- Hipster -->
      <div class="flex items-center w-full mt-8 mb-8">
        <bitbotFeature bb3="hipster" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="grid grid-cols-3 mb-2">
            <articleHeader
              v-for="topic in threeHipsterTopics"
              v-bind:key="topic.id"
              v-bind:topic="topic"
            ></articleHeader>
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <articleEntry
              v-for="article in threeHipsterArticles"
              v-bind:key="article.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- Hustler -->
      <div class="flex items-center w-full mt-8 mb-8">
        <bitbotFeature bb3="hustler" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="grid grid-cols-3 mb-2">
            <articleHeader
              v-for="topic in threeHustlerTopics"
              v-bind:key="topic.id"
              v-bind:topic="topic"
            ></articleHeader>
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <articleEntry
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
      return this.articles.slice(0, 3);
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
      // const { data } = await axios.get(
      //   `https://calm-everglades-39473.herokuapp.com/topics?_sort=published_at`
      // );
      const data = this.$store.state.topicsStore.topics.reverse();
      return data;
    },
    async getCourses() {
      // const { data } = await axios.get(
      //   `https://calm-everglades-39473.herokuapp.com/courses?_sort=published_at`
      // );
      const data = this.$store.state.coursesStore.courses.reverse();
      return data;
    },
    async getArticles() {
      // const { data } = await axios.get(
      //   `https://calm-everglades-39473.herokuapp.com/articles?_sort=published_at`
      // );
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
</style>



