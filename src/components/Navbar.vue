<template>
  <nav>
    <!-- START: DESKTOP MODE -->
    <div class="hidden lg:block">
      <div
        class="flex flex-wrap items-center justify-between w-screen px-4 py-2 bg-white shadow-md md:px-20 nav"
      >
        <div
          class="flex flex-wrap items-center justify-between w-screen mx-auto lg:container"
        >
          <!-- START: ITECH LOGO BUTTON -->
          <div class="flex items-center text-white flex-no-shrink">
            <!-- Start: If User isn't Authenticated -->
            <g-link v-if="!isAuthenticated" class="nav__link" to="/">
              <g-image
                :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
                class="w-40 py-2"
              />
            </g-link>
            <!-- End: If User isn't Authenticated -->

            <!-- Start: If User is Authenticated -->
            <g-link v-else class="nav__link" to="/dashboard">
              <g-image
                :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
                class="w-40 py-2"
              />
            </g-link>
            <!-- End: If User is Authenticated -->
          </div>
          <!-- END: ITECH LOGO BUTTON -->

          <div class="flex items-center flex-grow ml-8">
            <!-- START: SEARCH BAR / EMPTY  -->
            <div class="flex items-center flex-grow">
              <!-- Start: If User isn't Authenticated -->
              <!-- <div v-if="!isAuthenticated" class="mx-auto"></div> -->
              <!-- End: If User isn't Authenticated -->

              <!-- Start: If User is Authenticated -->
              <div class="relative flex-grow mx-auto">
                <form v-on:submit.prevent="handleSubmit">
                  <input
                    type="text"
                    placeholder="Search"
                    class="w-full h-10 py-2 rounded-lg searchBar font-objectivity"
                    v-model="search"
                    v-on:keyup="discover"
                  />
                  <g-image
                    src="@/assets/img/search-vector.svg"
                    class="searchVector"
                  />
                  <div
                    v-if="search"
                    class="absolute z-40 w-full h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7"
                    style="max-height: 360px"
                  >
                    <g-link
                      v-for="category in filteredCategories"
                      :key="category.id"
                      :to="`/categories/${category.name.toLowerCase()}`"
                      class="block w-full flex justify-between px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                    >
                      <span class="w-3/4 truncate">{{ category.name }}</span>
                      <span class="flex flex-row-reverse w-1/4">
                        <span
                          class="px-2 text-xs text-white bg-blue-600 rounded-full"
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
                      <span class="w-3/4 truncate">{{ topic.name }}</span>
                      <span class="flex flex-row-reverse w-1/4">
                        <span
                          class="px-2 text-xs text-white bg-orange-600 rounded-full"
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
                      <span class="w-3/4 truncate">{{ course.name }}</span>
                      <span class="flex flex-row-reverse w-1/4">
                        <span
                          class="px-2 text-xs text-white bg-purple-600 rounded-full"
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
                      <span class="w-3/4 truncate">{{ article.title }}</span>
                      <span class="flex flex-row-reverse w-1/4">
                        <span
                          class="px-2 text-xs text-white bg-yellow-600 rounded-full"
                          >Article</span
                        >
                      </span>
                    </g-link>
                  </div>
                </form>
              </div>
              <!-- End: If User is Authenticated -->
            </div>
            <!-- END: SEARCH BAR / EMPTY  -->

            <!-- START: CATEGORY BUTTONS -->
            <g-link
              to="/categories/hacker"
              class="mx-10 font-bold text-md font-objectivity nav__link"
            >
              Hacker
            </g-link>
            <g-link
              to="/categories/hipster"
              class="mx-10 font-bold text-md font-objectivity nav__link"
            >
              Hipster
            </g-link>
            <g-link
              to="/categories/hustler"
              class="mx-10 font-bold text-md font-objectivity nav__link"
            >
              Hustler
            </g-link>
            <!-- END: CATEGORY BUTTONS -->

            <!-- START: LOGIN/USER BUTTON -->
            <!-- Start: If User is NOT Authenticated -->
            <div v-if="!isAuthenticated">
              <g-link
                class="block px-8 py-3 text-sm form_button ... nav__link"
                to="/login/"
              >
                Log In
              </g-link>
            </div>
            <!-- End: If User is NOT Authenticated -->

            <!-- Start: If User IS Authenticated -->
            <div class="flex" v-else>
              <button
                @click="isOpenUserDropdown = !isOpenUserDropdown"
                class="relative p-5 nav__link"
              >
                <!-- Start: UserAccountIcon -->
                <g-image class="" src="@/assets/img/icons/UserAccount.svg" />
                <!-- End: UserAccountIcon -->
              </button>
            </div>

            <!-- End: If User IS Authenticated -->
            <!-- END: LOGIN/USER BUTTON -->
          </div>
        </div>
      </div>
      <!-- END: DESKTOP MODE -->

      <!-- START: DESKTOP USER PROFILE DROPDOWN -->
      <div
        v-if="isOpenUserDropdown"
        class="absolute flex flex-wrap items-center justify-between w-screen px-4 md:px-20 nav"
      >
        <div
          class="flex flex-row-reverse flex-wrap items-center justify-between w-screen mx-auto lg:container"
        >
          <!-- Start:UserAccountDropdown -->

          <div
            class="z-40 overflow-hidden bg-white shadow-md r-0 mt-7"
            style="width: 285px"
          >
            <g-link
              to="/user-profile/"
              class="flex px-4 py-4 text-sm text-gray-800 border-b hover:bg-gray-200"
            >
              <g-image
                class="mr-4"
                src="@/assets/img/icons/DefaultUserIcon.svg"
              />

              <div class="overflow-hidden">
                <p class="welcome-back">Welcome back,</p>
                <p class="truncate username ...">{{ username }}</p>
              </div>
            </g-link>
            <g-link
              to="/my-list/"
              class="block w-full px-4 py-4 text-sm text-gray-800 uppercase border-b button-text hover:bg-gray-200"
            >
              My List
            </g-link>
            <g-link
              to="/user-profile/"
              class="block w-full px-4 py-4 text-sm text-gray-800 uppercase border-b button-text hover:bg-gray-200"
            >
              My Account
            </g-link>
            <button
              @click="logout"
              class="block w-full px-4 py-4 text-sm text-left text-gray-800 uppercase border-b button-text hover:bg-gray-200"
            >
              Sign out
            </button>
          </div>
          <!-- End:UserAccountDropdown -->
        </div>
      </div>
    </div>
    <!-- END: DESKTOP USER PROFILE DROPDOWN -->

    <!-- START: MOBILE MODE -->
    <button
      @click="isOpenMobileMenu = !isOpenMobileMenu"
      class="fixed z-50 block rounded-full mobile-menu lg:hidden"
    >
      <g-image
        v-if="!isOpenMobileMenu"
        class="p-2"
        style="width: 120px"
        src="@/assets/img/icons/MenuIcon.svg"
      />
      <g-image
        v-else
        class="p-2"
        style="width: 120px"
        src="@/assets/img/icons/CloseIcon.svg"
      />
    </button>

    <!-- END: MOBILE MODE -->

    <div
      v-if="isOpenMobileMenu"
      class="flex flex-col block overflow-y-auto bg-white lg:hidden"
    >
      <div
        class="fixed z-40 w-screen h-auto min-h-screen pt-24 pb-2 bg-white md:px-20 nav"
      >
        <!-- START: SEARCH BAR / EMPTY  -->
        <div class="flex flex-none flex-grow px-4">
          <!-- Start: If User is Authenticated -->
          <div class="relative flex-grow mx-auto">
            <form v-on:submit.prevent="handleSubmit">
              <input
                type="text"
                placeholder="Search"
                class="w-full h-10 py-2 rounded-lg searchBar font-objectivity"
                v-model="search"
                v-on:keyup="discover"
              />
              <g-image
                src="@/assets/img/search-vector.svg"
                class="searchVector"
              />
              <div
                v-if="search"
                class="absolute z-40 w-full h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7"
                style="max-height: 360px"
              >
                <g-link
                  v-for="category in filteredCategories"
                  :key="category.id"
                  :to="`/categories/${category.name.toLowerCase()}`"
                  class="block w-full flex justify-between px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                >
                  <span class="w-3/4 truncate">{{ category.name }}</span>
                  <span class="flex flex-row-reverse w-1/4">
                    <span
                      class="px-2 text-xs text-white bg-blue-600 rounded-full"
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
                  <span class="w-3/4 truncate">{{ topic.name }}</span>
                  <span class="flex flex-row-reverse w-1/4">
                    <span
                      class="px-2 text-xs text-white bg-orange-600 rounded-full"
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
                  <span class="w-3/4 truncate">{{ course.name }}</span>
                  <span class="flex flex-row-reverse w-1/4">
                    <span
                      class="px-2 text-xs text-white bg-purple-600 rounded-full"
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
                  <span class="w-3/4 truncate">{{ article.title }}</span>
                  <span class="flex flex-row-reverse w-1/4">
                    <span
                      class="px-2 text-xs text-white bg-yellow-600 rounded-full"
                      >Article</span
                    >
                  </span>
                </g-link>
              </div>
            </form>
          </div>
          <!-- End: If User is Authenticated -->
        </div>
        <!-- END: SEARCH BAR / EMPTY  -->

        <div
          style="height: calc(100vh - 150px)"
          class="overflow-y-auto oveflow-x-hidden"
        >
          <div
            class="grid flex-grow h-auto grid-cols-1 gap-10 pt-10 pb-24 mx-auto"
          >
            <!-- START: CATEGORY BUTTONS -->
            <g-link
              to="/categories/hacker"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              Hacker
            </g-link>
            <g-link
              to="/categories/hipster"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              Hipster
            </g-link>
            <g-link
              to="/categories/hustler"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              Hustler
            </g-link>
            <!-- END: CATEGORY BUTTONS -->

            <!-- START: LOGIN/USER BUTTON -->
            <!-- Start: If User is NOT Authenticated -->
            <div v-if="!isAuthenticated">
              <g-link
                class="mx-auto block px-8 py-3 text-xl form_button ... nav__link"
                to="/login/"
                style="max-width: 150px"
              >
                Log In
              </g-link>
            </div>
            <!-- End: If User is NOT Authenticated -->
            <!-- Start: If User IS Authenticated -->

            <g-link
              v-if="isAuthenticated"
              to="/my-list/"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              My List
            </g-link>
            <g-link
              v-if="isAuthenticated"
              to="/user-profile/"
              class="mx-auto text-xl font-bold font-objectivity"
            >
              My Account
            </g-link>

            <button
              v-if="isAuthenticated"
              @click="logout"
              class="mx-auto block px-8 py-3 text-xl form_button ... nav__link"
              to="/login/"
              style="max-width: 150px"
            >
              Log out
            </button>
            <!-- End: If User is NOT Authenticated -->
            <!-- END: LOGIN/USER BUTTON -->
          </div>
        </div>
        <!-- START: ITECH LOGO BUTTON -->
        <div class="fixed bottom-0 w-full py-4 bg-white">
          <!-- Start: If User isn't Authenticated -->
          <g-link v-if="!isAuthenticated" to="/">
            <g-image
              class="mx-auto text-xl font-bold font-objectivity"
              :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
              style="max-width: 150px"
            />
          </g-link>
          <!-- End: If User isn't Authenticated -->
          <!-- Start: If User is Authenticated -->
          <g-link class="w-full" v-else to="/dashboard">
            <g-image
              class="mx-auto text-xl font-bold font-objectivity"
              :src="require('@/assets/img/BB3-PrimaryWithBlackText.svg')"
              style="max-width: 150px"
            />
          </g-link>
          <!-- End: If User is Authenticated -->
        </div>
        <!-- END: ITECH LOGO BUTTON -->
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",

  data() {
    return {
      isOpenUserDropdown: false,
      isOpenMobileMenu: false,
    };
  },

  computed: {
    //START: USER RELATED
    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },
    username() {
      return this.$store.state.userStore.user.username;
    },
    search: {
      get() {
        return this.$store.state.userStore.userSearch;
      },
      set(value) {
        this.$store.dispatch("userStore/updateUserSearch", value);
      },
    },
    //END: USER RELATED

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
    // START: LOGOUT
    async logout() {
      if (confirm("Are you sure you want to log out? ")) {
        await this.$store.dispatch("userStore/logout", this.user);
        if (!this.$store.state.userStore.isAuthenticated) {
          alert("You have logged out!");
          this.$router.replace("/login/");
        }
      }
    },
    // END: LOGOUT

    // START: DISCOVER
    discover(e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        this.$router.replace("/discover/");
      }
    },

    handleSubmit() {
      // Code
    },
    // END: DISCOVER
  },
});
</script>

<style scoped>
.hover-trigger .hover-target {
  display: none;
}

.hover-trigger:hover .hover-target {
  display: block;
}

.welcome-back {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
}

.username {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
}

.button-text {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
}

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

.mobile-menu {
  position: fixed;
  width: 60px;
  height: 60px;
  top: 4%;
  left: 4%;
  background: #f9f7f2;
  box-shadow: 0px 16px 16px rgba(50, 50, 71, 0.08),
    0px 24px 32px rgba(50, 50, 71, 0.08);
}
</style>