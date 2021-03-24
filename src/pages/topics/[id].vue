<template>
  <Layout>
    <!-- ROOT -->
    <div
      class="container flex flex-col w-screen min-h-screen p-6 pt-10 pb-20 mx-auto mb-24"
    >
      <span class="mb-10 breadcrumb-container">
        <button button @click="$router.go(-1)" class="pr-6 breadcrumb-text">
          Back
        </button>
        <span
          v-if="topic !== null"
          class="hidden pr-6 breadcrumb-slash sm:inline"
          >/</span
        >
        <button
          v-if="topic !== null"
          @click="
            $router.push(
              `/categories/${topic.categories[0].name.toLowerCase()}`
            )
          "
          class="hidden pr-6 breadcrumb-text sm:inline-block"
        >
          {{ topic.categories[0].name }}
        </button>
        <span
          v-if="topic !== null"
          class="hidden pr-6 breadcrumb-slash sm:inline"
          >/</span
        >
        <span
          v-if="topic !== null"
          class="hidden breadcrumb-text sm:inline-block"
          >{{ topic.name }}</span
        >
      </span>

      <div v-if="topic === null">
        <Loader />
      </div>

      <div v-else>
        <div class="flex items-start justify-between w-full">
          <!-- Featured & New On ITECH -->
          <div class="flex flex-col w-full">
            <cover :topic="topic" />
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

          <div v-if="!filteredCourses.length > 0">No Courses Yet</div>
          <playlistEntry
            v-else
            v-for="course in filteredCourses"
            v-bind:key="course.id"
            v-bind:course="course"
          />
        </div>

        <hr class="mt-12 mb-6" />

        <h3 class="mb-4 text-xl font-bold uppercase font-objectivity">
          Articles ✨
        </h3>

        <div v-if="!articles.length > 0">No Articles Yet</div>
        <div
          v-else
          class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          <articleEntry
            v-for="article in filteredArticles"
            v-bind:key="article.id"
            v-bind:article="article"
            class="w-full mb-0 sm:mb-1 md:mb-2"
          ></articleEntry>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import Loader from "../../components/Loader";
import cover from "../../components/auth/topics/cover";
import playlistEntry from "../../components/auth/dashboard/playlistEntry";
import articleEntry from "../../components/auth/dashboard/articleEntry";
import bitbotFeature from "../../components/auth/dashboard/bitbotFeature";

import axios from "axios";

export default {
  name: "Topic",
  metaInfo() {
    return {
      title: this.title,
    };
  },

  components: {
    Loader,
    cover,
    articleEntry,
    bitbotFeature,
    playlistEntry,
  },

  data() {
    return {
      title: "Loading...",
      topic: null,
      filteredCourses: null,
      filteredArticles: [],
    };
  },

  async mounted() {
    const data = await this.$store.dispatch(
      "topicsStore/getTopic",
      this.$route.params.id
    );
    this.topic = data;
    this.title = data.name;

    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
    this.$store.dispatch("categoriesStore/getCategories");
  },

  computed: {
    articles() {
      const data = this.$store.state.articlesStore.articles;
      return data;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses;
      return data;
    },
  },

  watch: {
    "$route.params.id": async function (id) {
      this.topic = null;
      this.topic = await this.$store.dispatch("topicsStore/getTopic", id);
      this.title = this.topic.name;
    },

    topic(newTopic) {
      this.filteredCourses = this.getFilteredCourses(newTopic);
      this.filteredArticles = this.getFilteredArticles(newTopic);
    },
  },

  methods: {
    getFilteredArticles(topic) {
      let filteredArticles = [];
      if (topic.articles.length > 0) {
        for (const topicArticles of topic.articles) {
          for (const article of this.articles) {
            if (article.id === topicArticles.id) {
              filteredArticles.push(article);
            }
          }
        }
      }
      return filteredArticles;
    },

    getFilteredCourses(topic) {
      if (topic.courses.length > 0) {
        return this.topic.courses.slice(0, 3);
      } else {
        return [];
      }
    },
  },
};
</script>

<style>
div > .tg {
  filter: brightness(80%);
}
.breadcrumb,
.breadcrumb-text {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #dbdad5;
  /* display: inline-block; */
}

.breadcrumb-slash {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #dbdad5;
}

.breadcrumb-text {
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