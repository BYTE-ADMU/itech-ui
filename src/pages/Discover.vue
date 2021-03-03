<template>
  <Layout>
    <div 
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto mb-24"
    >
      <h1 class="sm:hidden text-center text-xl font-bold font-objectivity not-italic pb-8">
        Discover
      </h1>

      <!-- search bar -->
      <div class="md:w-2/3 w-full mx-auto relative mb-12">
        <input type="text" placeholder="Search" class="w-full h-10 rounded-3xl searchBar pt-2 font-objectivity"
          v-model="searchBar">
        <img 
        :src="require('../assets/img/search-vector.svg')"
        class="searchVector">
      </div>

      <!-- filter buttons -->
      <div class="hidden sm:block text-center">
        <button v-for="category in categories"
          v-bind:key="category.id"
          v-bind:value="category.name"
          @click="searchButton = category.name"
          class="filterButton text-center py-2 px-6 rounded-full font-bold font-objectvitity mx-2 my-2">
          {{ category.name }}
        </button>

        <button v-for="topic in topics"
          v-bind:key="topic.id"
          v-bind:value="topic.name"
          @click="searchButton = topic.categories[0].name"
          class="filterButton text-center py-2 px-6 rounded-full font-bold font-objectvitity mx-2 my-2">
          {{ topic.name }}
        </button>
      </div>

      <!-- suggested courses -->
      <div class="w-full mt-12 sm:flex">
        <div class="w-full sm:w-3/12">
          <h2 class="p-2 mx-auto text-xl lg:text-4xl font-neuemachina" v-if="!search">
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
      <h2 class="py-6 text-xl lg:text-4xl font-neuemachina" v-if="!search">Suggested Articles ✨</h2>
      <h2 class="py-6 text-xl lg:text-4xl font-neuemachina" v-else>Related Articles ✨</h2>

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
    title: "Discover"
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
      const data = this.$store.state.topicsStore.topics;
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

    search() {
      if (this.searchBar) {
        return this.searchBar.toLowerCase();
      } else if (this.searchButton) {
        return this.searchButton.toLowerCase();
      }
      return "";
    },

    filteredCourses() {
      return this.courses.filter((course) => {
        if (course.categories[0].name.toLowerCase().includes(this.search) ||
          course.name.toLowerCase().includes(this.search)) {
          return course;
        }
        return "";
      });
    },

    threeFilteredCourses() {
      return this.filteredCourses.slice(0,3);
    },

    filteredArticles() {
      return this.articles.filter((article) => {
        if (article.title.toLowerCase().includes(this.search) ||
          article.categories[0].topics[0].includes(this.search) ||
          article.categories[0].name.toLowerCase().includes(this.search)) {
          
          return article;
        }
        return "";
      });
    },

  },
}
</script>

<style scoped>
.searchBar {
  border: 1px solid #64C0C1;
  padding-left: 60px;
  background-color: rgba(100, 192, 193, 0.05);
  color: #64C0C1;
}

.searchVector {
  position: absolute;
  top: 12.8px;
  left: 26px;
}

::placeholder {
  color: #64C0C1;
}

:-ms-input-placeholder {
  color: #64C0C1;
}

::-ms-input-placeholder {
  color: #64C0C1;
}

.filterButton {
  max-width: fit-content;
  border: 1px solid #64C0C1;
  color: #64C0C1;
  transition: all ease-in-out 200ms;
  cursor: pointer;
}

.filterButton:hover {
  background-color: #64C0C1;
  color: #ffffff;
}

.discoverTitle {
  display: none;
}

@media screen and (max-width: 640px) {

  .filterBtns {
    display: none;
  }
}
</style>