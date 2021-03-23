<template>
  <Layout>
    <div
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto"
    >
      <!-- START: COVER -->
      <cover class="mb-12" />
      <!-- END: COVER -->

      <!-- START: BODY -->

      <!-- Start:Search Bar -->
      <div class="relative block w-full px-2 mx-auto mb-10 lg:hidden md:w-2/3">
        <SearchBar />
      </div>
      <!-- End: Search Bar -->

      <!-- Start: Filter Buttons -->
      <div class="mb-12 text-center">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="userSearch = category.name"
          :class="filterBtnStyle(category.name)"
        >
          {{ category.name }}
        </button>
      </div>
      <!-- End: Filter Buttons -->

      <!-- Start: Courses -->
      <div
        v-if="filteredCourses.length > 0 && filteredBySearchCourses.length > 0"
        class="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-3 md:grid-cols-4"
      >
        <div class="w-full py-2">
          <h2 class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Saved <br class="hidden md:block" />Courses ✨
          </h2>

          <p class="text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <playlistEntry
          class="w-full"
          v-for="course in filteredBySearchCourses"
          v-bind:key="course.id"
          v-bind:course="course"
        />
      </div>

      <div
        v-else-if="
          filteredCourses.length > 0 && filteredBySearchCourses.length === 0
        "
        class="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-3 md:grid-cols-4"
      >
        <div class="w-full py-2">
          <h2 class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Saved <br class="hidden md:block" />Courses ✨
          </h2>

          <p class="text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <div
          class="flex items-center justify-center w-full col-span-1 md:col-span-3 sm:col-span-2"
        >
          <p class="no-message">no matches found</p>
        </div>
      </div>

      <div
        v-else
        class="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-3 md:grid-cols-4"
      >
        <div class="w-full py-2">
          <h2 class="mx-auto mb-3 text-xl lg:text-4xl font-neuemachina">
            Saved <br class="hidden md:block" />Courses ✨
          </h2>

          <p class="text-l font-objectivity">
            Readily-set series of articles and videos you can go through!
          </p>
        </div>

        <div
          class="flex items-center justify-center w-full col-span-1 md:col-span-3 sm:col-span-2"
        >
          <p class="no-message">no saved courses yet</p>
        </div>
      </div>
      <!-- End: Courses -->

      <!-- Start: Articles -->
      <div
        v-if="
          filteredArticles.length > 0 && filteredBySearchArticles.length > 0
        "
      >
        <h2 class="py-6 text-xl lg:text-4xl font-neuemachina">
          Saved Articles ✨
        </h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <articleEntry
            v-for="article in filteredBySearchArticles"
            v-bind:key="article.id"
            v-bind:article="article"
            class="w-full mb-0 sm:mb-1 md:mb-2"
          ></articleEntry>
        </div>
      </div>

      <div
        v-else-if="
          filteredArticles.length > 0 && filteredBySearchArticles.length === 0
        "
      >
        <h2 class="py-6 text-xl lg:text-4xl font-neuemachina">
          Saved Articles ✨
        </h2>

        <div class="grid grid-cols-1 text-center no-message">
          no matches found
        </div>
      </div>

      <div v-else>
        <h2 class="py-6 text-xl lg:text-4xl font-neuemachina">
          Saved Articles ✨
        </h2>

        <div class="grid grid-cols-1 py-10 text-center no-message">
          no saved articles yet
        </div>
      </div>
      <!-- End: Articles -->

      <!-- END: BODY -->
    </div>
  </Layout>
</template>

<script>
import cover from "@/components/auth/mylist/cover";
import articleEntry from "@/components/auth/dashboard/articleEntry";
import playlistEntry from "@/components/auth/dashboard/playlistEntry";
import SearchBar from "@/components/SearchBar";

export default {
  name: "MyList",
  metaInfo() {
    return {
      title: this.title,
    };
  },

  components: {
    cover,
    articleEntry,
    playlistEntry,
    SearchBar,
  },

  data() {
    return {
      title: "My List",
      searchButton: null,
    };
  },

  // START: COMPUTED
  computed: {
    // Start: Data
    categories() {
      const data = this.$store.state.categoriesStore.categories;
      return data;
    },

    courses() {
      const data = this.$store.state.coursesStore.courses;
      return data;
    },

    articles() {
      const data = this.$store.state.articlesStore.articles;
      return data;
    },
    // End: Data

    // Start: User Experience
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

    user() {
      const data = this.$store.state.userStore.user;
      return data;
    },

    // End: User Experience

    // Start: Processes
    filteredCourses() {
      if (typeof this.user.courses !== "undefined") {
        let filteredCoursesArray = [];
        for (const eachSavedCourse of this.user.courses) {
          this.courses.filter((course) => {
            if (course.id === eachSavedCourse.id) {
              filteredCoursesArray.push(course);
            }
          });
        }
        return filteredCoursesArray;
      }
      return [];
    },

    filteredBySearchCourses() {
      return this.filteredCourses.filter((course) => {
        return (
          course.categories[0].name
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          course.name.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },

    filteredArticles() {
      if (typeof this.user.courses !== "undefined") {
        let filteredArticlesArray = [];
        for (const eachSavedArticle of this.user.articles) {
          this.articles.filter((article) => {
            if (article.id === eachSavedArticle.id) {
              filteredArticlesArray.push(article);
            }
          });
        }
        return filteredArticlesArray;
      }
      return [];
    },

    filteredBySearchArticles() {
      return this.filteredArticles.filter((article) => {
        return (
          article.categories[0].name
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          article.title.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },

    // End: Processes
  },
  // END: COMPUTED

  // START: METHODS
  methods: {
    filterBtnStyle(category) {
      const defaultStyle =
        "px-6 py-2 mx-2 my-2 text-center rounded-full filterButton";
      switch (category.toLowerCase()) {
        case "hacker":
          return `hackerBtn ${defaultStyle}`;
        case "hipster":
          return `hipsterBtn ${defaultStyle}`;
        case "hustler":
          return `hustlerBtn ${defaultStyle}`;
        default:
          return `hustlerBtn ${defaultStyle}`;
      }
    },
  },
  // END: METHODS
};
</script>

<style>
.filterButton {
  max-width: fit-content;
  transition: all ease-in-out 200ms;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  font-style: normal;
  font-family: Objectivity;
}

.filterButton:active {
  box-shadow: inset -7px 7px 30px rgba(0, 0, 0, 0.25);
}

.hackerBtn {
  border: 1px solid #4e6afa;
  color: #4e6afa;
}

.hackerBtn:hover {
  background-color: #4e6afa;
  color: #ffffff;
}

.hipsterBtn {
  border: 1px solid #f3748a;
  color: #f3748a;
}

.hipsterBtn:hover {
  background-color: #f3748a;
  color: #ffffff;
}

.hustlerBtn {
  border: 1px solid #40a5a6;
  color: #40a5a6;
}

.hustlerBtn:hover {
  background-color: #40a5a6;
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
</style>