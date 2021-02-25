<template>
  <Layout>
    <!-- ROOT -->
    <div
      class="container flex flex-col w-screen min-h-screen py-20 mx-auto mb-24"
    >
      <div class="flex items-start justify-between w-full">
        <!-- Featured & New On ITECH -->
        <div class="flex flex-col w-full">
          <cover :course="course" />
        </div>
      </div>

      <hr class="mt-12 mb-6" />

      <h3
        class="mb-4 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Related
      </h3>

      <div v-if="!course.articles.length > 0">No Articles Yet</div>
      <div v-else class="grid grid-cols-4 gap-4 mt-1 mb-24">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.id"
          v-bind:article="article"
          class="w-full"
        ></articleEntry>
      </div>
    </div>
  </Layout>
</template>


<script>
import cover from "../../components/auth/courses/cover";
import articleEntry from "../../components/auth/dashboard/articleEntry";
import playlistTall from "../../components/auth/dashboard/playlistTall";
import bitbotFeature from "../../components/auth/dashboard/bitbotFeature";
import articleHeader from "../../components/auth/dashboard/articleHeader";

import axios from "axios";

export default {
  name: "Courses",

  components: {
    cover,
    articleEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
  },

  metaInfo() {
    return {
      title: this.course.name,
    };
  },

  data() {
    return {
      course: [],
    };
  },

  async mounted() {
    await this.getCourse(this.$route.params.id);
    await this.$store.dispatch("articlesStore/getArticles");
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
    getCourse(id) {
      axios
        .get(`https://calm-everglades-39473.herokuapp.com/courses/${id}`)
        .then((response) => {
          this.course = response.data;
        });
    },
  },

  watch: {
    id(newValue, oldValue) {
      this.getCourse(newValue);
    },
  },
};
</script>


<style>
div > .tg {
  filter: brightness(80%);
}
</style>