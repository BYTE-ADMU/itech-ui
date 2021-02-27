<template>
  <Layout>
    <!-- ROOT -->
    <div
      class="container flex flex-col w-screen min-h-screen pt-10 pb-20 mx-auto mb-24"
    >
      <p class="mb-10 breadcrumb">
        <button @click="$router.go(-1)">Back</button>
      </p>

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

        <h3
          class="mb-4 text-xl font-bold uppercase font-objectivity"
          style="color: #9d9d9d"
        >
          Related
        </h3>

        <div v-if="!articles.length > 0">No Articles Yet</div>
        <div v-else class="grid grid-cols-4 gap-4 mt-1 mb-24">
          <articleEntry
            v-for="article in filteredArticles"
            v-bind:key="article.id"
            v-bind:article="article"
            class="w-full mb-16"
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
    };
  },

  async mounted() {
    const data = await this.getTopic(this.$route.params.id);
    this.topic = data;
    this.title = data.name;

    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
  },

  computed: {
    id() {
      return this.$route.params.id;
    },

    articles() {
      const data = this.$store.state.articlesStore.articles;
      return data;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses;
      return data;
    },
  },

  methods: {
    async getTopic(id) {
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/topics/${id}`
      );
      return data;
    },

    getFilteredArticles(id) {
      if (this.articles.length > 0) {
        return this.articles.filter((article) => {
          if (article.courses[0] != null) {
            return article.courses[0].id.includes(id);
          }
        });
      } else {
        return [];
      }
    },

    getFilteredCourses(topic) {
      if (topic.courses.length > 0) {
        return this.topic.courses.slice(0, 3);
      } else {
        return [];
      }
    },
  },

  watch: {
    id(newId, oldId) {
      this.topic = this.getTopic(newId);
      this.title = this.getTopic(newId).name;
    },

    topic(newTopic, oldTopic) {
      this.filteredArticles = this.getFilteredArticles(newTopic.courses[0].id);
      this.filteredCourses = this.getFilteredCourses(newTopic);
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

  color: #c9c9c9;
}
</style>