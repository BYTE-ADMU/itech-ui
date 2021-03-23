<template>
  <Layout>
    <div
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto"
    >
      <!-- START: COVER -->
      <cover class="mb-12" />
      <!-- END: COVER -->

      <!-- START: BODY -->
      <!-- Start: Filter Buttons -->
      <div class="hidden mb-12 text-center lg:block">
        <button
          v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.name"
          @click="searchButton = category.name"
          class="px-6 py-2 mx-2 my-2 text-center rounded-full filterButton"
        >
          {{ category.name }}
        </button>
      </div>
      <!-- End: Filter Buttons -->

      <!-- Start: Courses -->
      <div class="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-3 md:grid-cols-4">
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
          v-for="course in filteredCourses"
          v-bind:key="course.id"
          v-bind:course="course"
        />
      </div>
      <!-- End: Courses -->

      <!-- Start: Articles -->
      <h2 class="py-6 text-xl lg:text-4xl font-neuemachina">
        Saved Articles ✨
      </h2>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.id"
          v-bind:article="article"
          class="w-full mb-0 sm:mb-1 md:mb-2"
        ></articleEntry>
      </div>
      <!-- End: Courses -->

      <!-- END: BODY -->
    </div>
  </Layout>
</template>

<script>
import cover from "@/components/auth/mylist/cover";
import articleEntry from "@/components/auth/dashboard/articleEntry";
import playlistEntry from "@/components/auth/dashboard/playlistEntry";

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
      const data = this.$store.state.coursesStore.courses.reverse();
      return data;
    },

    articles() {
      const data = this.$store.state.articlesStore.articles.reverse();
      return data;
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
  // END: COMPUTED

  // START: METHODS
  methods: {},
  // END: METHODS
};
</script>

<style>
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
</style>