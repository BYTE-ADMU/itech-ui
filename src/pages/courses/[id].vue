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
          v-if="course !== null"
          class="hidden pr-6 breadcrumb-slash sm:inline"
          >/</span
        >
        <button
          v-if="course !== null"
          @click="
            $router.push(
              `/categories/${course.categories[0].name.toLowerCase()}`
            )
          "
          class="hidden pr-6 breadcrumb-text sm:inline-block"
        >
          {{ course.categories[0].name }}
        </button>
        <span
          v-if="course !== null"
          class="hidden pr-6 breadcrumb-slash sm:inline"
          >/</span
        >
        <span
          v-if="course !== null"
          class="hidden breadcrumb-text sm:inline-block"
          >{{ course.name }}</span
        >
      </span>

      <div v-if="course === null">
        <Loader />
      </div>
      <div v-else>
        <div class="flex items-start justify-between w-full">
          <!-- Featured & New On ITECH -->
          <div class="flex flex-col w-full">
            <cover :course="course" :isBooked="isBooked" />
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
        <div
          v-else
          class="grid grid-cols-1 gap-4 mt-10 mb-24 sm:grid-cols-3 md:grid-cols-4"
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
    const data = await this.$store.dispatch(
      "coursesStore/getCourse",
      this.$route.params.id
    );
    console.log("Course: ", data, this.$route.params.id);
    this.course = data;
    this.title = data.name;

    // this.$store.dispatch("articlesStore/getArticles");
    // this.$store.dispatch("coursesStore/getCourses");
    // this.$store.dispatch("topicsStore/getTopics");
    // this.$store.dispatch("categoriesStore/getCategories");
  },

  computed: {
    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses;
      return data;
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

    user() {
      if (this.$store.state.userStore.isAuthenticated) {
        const data = this.$store.state.userStore.user;
        return data;
      }
      return null;
    },

    isBooked() {
      if (this.$store.state.userStore.isAuthenticated) {
        for (const eachCourse of this.user.courses) {
          if (this.course.id === eachCourse.id) {
            return true;
          }
        }
      }
      return false;
    },
  },

  methods: {},

  watch: {
    "$route.params.id": async function (id) {
      this.course = null;
      this.course = await this.$store.dispatch("coursesStore/getCourses", id);
      this.title = this.course.name;
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