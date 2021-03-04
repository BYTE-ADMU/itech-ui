<template>
  <Layout>
    <!-- ROOT -->
    <div
      class="container flex flex-col w-screen min-h-screen p-6 pt-10 pb-20 mx-auto mb-24"
    >
      <!-- <p class="mb-10 breadcrumb">
        <button @click="$router.go(-1)">Back</button>
      </p> -->
      <div class="mb-10 breadcrumb hidden sm:flex">
        <button @click="$router.push(`/categories/${course.categories[0].name.toLowerCase()}`)"
          class="pr-6">
            {{course.categories[0].name}}
        </button>
        <p class="pr-6">/</p>
        <p>{{ course.name }}</p>
      </div>

      <div v-if="course === null">
        <Loader />
      </div>
      <div v-else>
        <div class="flex items-start justify-between w-full">
          <!-- Featured & New On ITECH -->
          <div class="flex flex-col w-full">
            <cover :course="course" />
          </div>
        </div>

        <!-- <hr class="mt-12 mb-6" />

        <h3
          class="mb-4 text-xl font-bold uppercase font-objectivity"
          style="color: #9d9d9d"
        >
          Related
        </h3> -->

        <div v-if="!course.articles.length > 0">No Articles Yet</div>
        <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 mt-10 mb-24">
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

import cover from "../../components/auth/courses/cover";
import articleEntry from "../../components/auth/dashboard/articleEntry";
import playlistTall from "../../components/auth/dashboard/playlistTall";
import bitbotFeature from "../../components/auth/dashboard/bitbotFeature";
import articleHeader from "../../components/auth/dashboard/articleHeader";

import axios from "axios";

export default {
  name: "Course",
  metaInfo() {
    return {
      title: this.title,
    };
  },

  components: {
    Loader,
    cover,
    articleEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
  },

  data() {
    return {
      title: "Loading...",
      course: null,
    };
  },

  async mounted() {
    const data = await this.getCourse(this.$route.params.id);
    this.course = data;
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

    filteredArticles() {
      if (this.course.articles.length > 0) {
        return this.articles.filter((article) => {
          if (article.courses[0] != null) {
            if (article.courses[0].id.includes(this.course.id)) {
              return article;
            }
          }
        });
      }

      return [];
    },
  },

  methods: {
    async getCourse(id) {
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/courses/${id}`
      );
      return data;
    },
  },

  watch: {
    id(newId, oldId) {
      this.topic = this.getCourse(newId);
      this.title = this.getCourse(newId).name;
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