<template>
  <Layout>
    <div
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto mb-24"
    >
      <h1
        class="pb-8 text-xl not-italic text-center lg:hidden discoverTitle font-objectivity"
      >
        Discover
      </h1>

      <!-- search bar -->
      <div class="relative block w-full mx-auto mb-12 lg:hidden md:w-2/3">
        <SearchBar />
      </div>

      <!-- filter buttons -->
      <div class="hidden text-center lg:block">
        <button
          v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.name"
          @click="searchButton = category.name"
          class="px-6 py-2 mx-2 my-2 text-center rounded-full filterButton"
          :class="{ selectedButton: userSearch === category.name }"
        >
          {{ category.name }}
        </button>

        <button
          v-for="topic in someTopics"
          v-bind:key="topic.id"
          v-bind:value="topic.name"
          @click="searchButton = topic.name"
          class="px-6 py-2 mx-2 my-2 text-center rounded-full filterButton"
          :class="{ selectedButton: userSearch === topic.name }"
        >
          {{ topic.name }}
        </button>
      </div>

      <!-- suggested courses -->
      <div
        v-if="courses.length === 0"
        class="grid grid-cols-1 gap-2 mt-12 mb-12 md:grid-cols-4"
      >
        <div class="w-full py-2">
          <h2
            class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina"
            v-if="!search"
          >
            Suggested Courses ✨
          </h2>
          <h2 v-else class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Related Courses ✨
          </h2>

          <p class="text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <coursesPlaceholder class="w-full" />
        <coursesPlaceholder class="w-full" />
        <coursesPlaceholder class="w-full" />
      </div>
      <div v-else class="grid grid-cols-1 gap-2 mt-12 mb-12 md:grid-cols-4">
        <div class="w-full py-2">
          <h2
            class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina"
            v-if="!search"
          >
            Suggested Courses ✨
          </h2>
          <h2 v-else class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Related Courses ✨
          </h2>

          <p class="text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <div
          v-if="threeFilteredCourses.length <= 0"
          class="flex items-center justify-center w-full col-span-1 md:col-span-3 sm:col-span-2"
        >
          <p class="no-message">no matches found</p>
        </div>
        <playlistEntry
          v-else
          v-for="course in threeFilteredCourses"
          v-bind:key="course.id"
          v-bind:course="course"
        />
      </div>

      <!-- suggested articles -->
      <h2 class="py-6 text-xl lg:text-4xl font-neuemachina" v-if="!search">
        Suggested Articles ✨
      </h2>
      <h2 class="py-6 text-xl lg:text-4xl font-neuemachina" v-else>
        Related Articles ✨
      </h2>

      <div
        v-if="articles.length === 0"
        class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
        <articlePlaceholder class="w-full mb-0 sm:mb-1 md:mb-2" />
      </div>

      <div
        v-else-if="filteredArticles.length <= 0"
        class="flex items-center justify-center w-full col-span-1 md:col-span-3 sm:col-span-2"
      >
        <p class="no-message">no matches found</p>
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
import articleEntry from "../components/auth/dashboard/articleEntry";
import playlistEntry from "../components/auth/dashboard/playlistEntry";
import SearchBar from "../components/SearchBar";
import coursesPlaceholder from "@/components/auth/dashboard/coursesPlaceholder";
import articlePlaceholder from "@/components/auth/dashboard/articlePlaceholder";
import ArticlePlaceholder from "../components/auth/dashboard/articlePlaceholder.vue";

export default {
  name: "Discover",
  metaInfo: {
    title: "Discover",
  },
  data() {
    return {
      searchButton: null,
    };
  },
  components: {
    articleEntry,
    playlistEntry,
    SearchBar,
    coursesPlaceholder,
    articlePlaceholder,
  },

  async mounted() {
    this.$store.dispatch("categoriesStore/getCategories");
    this.$store.dispatch("topicsStore/getTopics");
    this.$store.dispatch("articlesStore/getArticles");
  },

  computed: {
    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },

    categories() {
      const data = this.$store.state.categoriesStore.categories;
      return data;
    },

    topics() {
      const data = this.$store.state.topicsStore.topics.reverse();
      return data;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses.reverse();
      return data;
    },

    articles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      return data;
    },

    someTopics() {
      return this.topics.splice(0, 11);
    },

    userSearch: {
      get() {
        return this.$store.state.userStore.userSearch;
      },

      set(value) {
        this.searchButton = null;

        this.$store.dispatch("userStore/updateUserSearch", value);
      },
    },

    search() {
      if (this.searchButton !== null) {
        this.userSearch = this.searchButton;
        return this.searchButton.toLowerCase();
      } else if (this.userSearch) {
        return this.userSearch.toLowerCase();
      }

      return "";
    },

    filteredCourses() {
      return this.courses.filter((course) => {
        if (
          course.categories[0].name
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          course.name.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return course;
        }
        return "";
      });
    },

    threeFilteredCourses() {
      return this.filteredCourses.slice(0, 3);
    },

    filteredArticles() {
      return this.articles.filter((article) => {
        if (
          article.title.toLowerCase().includes(this.search.toLowerCase()) ||
          article.categories[0].name
            .toLowerCase()
            .includes(this.search.toLowerCase())
        ) {
          return article;
        }
        return "";
      });
    },
  },
};
</script>

<style scoped>
.searchBar {
  border: 1px solid #64c0c1;
  padding-left: 60px;
  background-color: rgba(100, 192, 193, 0.05);
  color: #64c0c1;
}

.searchVector {
  position: absolute;
  top: 12.8px;
  left: 26px;
}

::placeholder {
  color: #64c0c1;
}

:-ms-input-placeholder {
  color: #64c0c1;
}

::-ms-input-placeholder {
  color: #64c0c1;
}

.filterButton {
  max-width: fit-content;
  border: 1px solid #64c0c1;
  color: #64c0c1;
  transition: all ease-in-out 200ms;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  font-style: normal;
  font-family: Objectivity;
}

.filterButton:hover {
  background-color: #64c0c1;
  color: #ffffff;
}

.filterButton:active {
  box-shadow: inset -7px 7px 30px rgba(0, 0, 0, 0.25);
}

.discoverTitle {
  font-weight: bold;
}

.selectedButton {
  background-color: #64c0c1;
  color: #ffffff;
}

.no-message {
  font-family: objectivity;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 71px;
  letter-spacing: 0.04em;
  color: #e8e8e8;
}

@media screen and (min-width: 1024px) {
  .no-message {
    font-family: objectivity;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 71px;
    letter-spacing: 0.04em;
    color: #e8e8e8;
  }
}

@media screen and (max-width: 640px) {
  .filterBtns {
    display: none;
  }
}
</style>