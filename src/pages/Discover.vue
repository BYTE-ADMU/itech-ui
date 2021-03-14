<template>
  <Layout>
    <div
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto mb-24"
    >
      <h1
        class="pb-8 text-xl not-italic text-center sm:hidden discoverTitle font-objectivity"
      >
        Discover
      </h1>

      <!-- search bar -->
      <div class="relative block w-full mx-auto mb-12 md:hidden md:w-2/3">
        <input
          type="text"
          placeholder="Search"
          class="w-full h-10 pt-2 rounded-3xl searchBar font-objectivity"
          v-model="searchBar"
        />
        <g-image
          :src="require('../assets/img/search-vector.svg')"
          class="searchVector"
        />
      </div>

      <!-- filter buttons -->
      <div class="hidden text-center md:block">
        <button
          v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.name"
          @click="searchButton = category.name"
          class="px-6 py-2 mx-2 my-2 font-bold text-center rounded-full filterButton font-objectvitity"
        >
          {{ category.name }}
        </button>

        <button
          v-for="topic in topics"
          v-bind:key="topic.id"
          v-bind:value="topic.name"
          @click="searchButton = topic.categories[0].name"
          class="px-6 py-2 mx-2 my-2 font-bold text-center rounded-full filterButton font-objectvitity"
        >
          {{ topic.name }}
        </button>
      </div>

      <!-- suggested courses -->
      <div class="w-full mt-12 sm:flex">
        <div class="w-full sm:w-3/12">
          <h2
            class="p-2 mx-auto text-xl lg:text-4xl font-neuemachina"
            v-if="!search"
          >
            Suggested Courses ✨
          </h2>
          <h2 class="p-2 mx-auto text-xl lg:text-4xl font-neuemachina" v-else>
            Related Courses ✨
          </h2>

          <p class="p-2 mb-5 sm:mt-10 text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <playlistEntry
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

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
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

export default {
  name: "Discover",
  metaInfo: {
    title: "Discover",
  },
  data() {
    return {
      searchBar: "",
      searchButton: "",
    };
  },
  components: {
    articleEntry,
    playlistEntry,
  },

  async mounted() {
    this.$store.dispatch("categoriesStore/getCategories");
    this.$store.dispatch("topicsStore/getTopics");
    this.$store.dispatch("articlesStore/getArticles");
  },

  computed: {
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

    search: {
      get() {
        return this.$store.state.userStore.userSearch;
      },
      set(value) {
        if (this.searchBar) {
          this.$store.dispatch(
            "userStore/updateUserSearch",
            this.searchBar.toLowerCase()
          );
        } else if (this.searchButton) {
          this.$store.dispatch(
            "userStore/updateUserSearch",
            this.searchButton.toLowerCase()
          );
        }
        this.$store.dispatch("userStore/updateUserSearch", value);
      },
    },

    // search() {
    //   if (this.searchBar) {
    //     return this.searchBar.toLowerCase();
    //   } else if (this.searchButton) {
    //     return this.searchButton.toLowerCase();
    //   }
    //   return "";
    // },

    filteredCourses() {
      return this.courses.filter((course) => {
        if (
          course.categories[0].name.toLowerCase().includes(this.search) ||
          course.name.toLowerCase().includes(this.search)
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
          article.title.toLowerCase().includes(this.search) ||
          article.categories[0].topics[0].includes(this.search) ||
          article.categories[0].name.toLowerCase().includes(this.search)
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

@media screen and (max-width: 640px) {
  .filterBtns {
    display: none;
  }
}
</style>