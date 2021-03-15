<template>
  <form v-on:submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Search"
      class="w-full h-10 py-2 rounded-lg searchBar font-objectivity"
      v-model="search"
      v-on:keyup="discover"
      @focus="handleFocus"
      @focusout="handleFocusOut"
      tabindex="0"
    />

    <g-image src="@/assets/img/search-vector.svg" class="searchVector" />
    <div
      v-if="search && isShowSearchDropdown"
      class="absolute z-40 w-full h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7"
      style="max-height: 360px"
    >
      <g-link
        v-for="category in filteredCategories"
        :key="category.id"
        :to="`/categories/${category.name.toLowerCase()}`"
        class="block w-full flex justify-between px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
      >
        <span class="w-3/4 font-bold truncate">{{ category.name }}</span>
        <span class="flex flex-row-reverse w-1/4">
          <span
            class="px-2 text-xs font-bold text-white bg-blue-600 rounded-full"
            >Category</span
          >
        </span>
      </g-link>
      <g-link
        v-for="topic in threeFilteredTopics"
        :key="topic.id"
        :to="`/topics/${topic.id}`"
        class="block w-full px-4 py-4 flex justify-between truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
      >
        <span class="w-3/4 font-bold truncate">{{ topic.name }}</span>
        <span class="flex flex-row-reverse w-1/4">
          <span
            class="px-2 text-xs font-bold text-white bg-orange-600 rounded-full"
            >Topic</span
          >
        </span>
      </g-link>
      <g-link
        v-for="course in threeFilteredCourses"
        :key="course.id"
        :to="`/courses/${course.id}`"
        class="block flex justify-between w-full px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
      >
        <span class="w-3/4 font-bold truncate">{{ course.name }}</span>
        <span class="flex flex-row-reverse w-1/4">
          <span
            class="px-2 text-xs font-bold text-white bg-purple-600 rounded-full"
            >Course</span
          >
        </span>
      </g-link>
      <g-link
        v-for="article in threeFilteredArticles"
        :key="article.id"
        :to="`/articles/${article.id}`"
        class="block flex justify-between w-full px-4 py-4 text-sm truncate ... text-gray-800 border-b button-text hover:bg-gray-200"
      >
        <span class="w-3/4 font-bold truncate">{{ article.title }}</span>
        <span class="flex flex-row-reverse w-1/4">
          <span
            class="px-2 text-xs font-bold text-white bg-yellow-600 rounded-full"
            >Article</span
          >
        </span>
      </g-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      isShowSearchDropdown: false,
    };
  },

  computed: {
    search: {
      get() {
        return this.$store.state.userStore.userSearch;
      },
      set(value) {
        this.$store.dispatch("userStore/updateUserSearch", value);
      },
    },

    //START: GETTING DATA RELATED
    categories() {
      const data = this.$store.state.categoriesStore.categories;
      return data;
    },

    topics() {
      const data = this.$store.state.topicsStore.topics;
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
    //END: GETTING DATA RELATED

    //START: PROCESSING DATA RELATED
    filteredCategories() {
      return this.categories.filter((category) => {
        return category.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    filteredTopics() {
      return this.topics.filter((topic) => {
        return topic.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },

    filteredCourses() {
      return this.courses.filter((course) => {
        return (
          course.name.toLowerCase().includes(this.search.toLowerCase()) ||
          course.categories[0].name
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
    },

    filteredArticles() {
      return this.articles.filter((article) => {
        return (
          article.title.toLowerCase().includes(this.search.toLowerCase()) ||
          article.categories[0].name
            .toLowerCase()
            .includes(this.search.toLowerCase())
        );
      });
    },

    threeFilteredTopics() {
      return this.filteredTopics.slice(0, 3);
    },
    threeFilteredCourses() {
      return this.filteredCourses.slice(0, 3);
    },
    threeFilteredArticles() {
      return this.filteredArticles.slice(0, 3);
    },
    //END: PROCESSING DATA RELATED
  },

  methods: {
    handleFocus() {
      this.isShowSearchDropdown = true;
    },
    handleFocusOut() {
      this.isShowSearchDropdown = false;
    },

    // START: DISCOVER
    discover(e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        this.$router.replace("/discover/");
      }
    },

    handleSubmit() {
      //code
    },
    // END: DISCOVER
  },
};
</script>

<style>
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
</style>