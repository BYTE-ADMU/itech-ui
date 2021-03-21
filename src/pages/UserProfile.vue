<template>
  <Layout>
    <div
      class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto"
    >
      <!-- cover -->
      <div class="mb-10">
        <cover />
      </div>
      <!-- end cover -->

      <!-- content -->
      <form
        class="flex flex-col-reverse w-full mx-auto lg:grid lg:grid-cols-2 lg:gap-10 lg:w-4/5"
        @submit="updateUser"
      >
        <!-- account info -->
        <div>
          <!-- name -->
          <div class="mb-6">
            <h1 class="mb-3 font-bold accountdetails">Name</h1>
            <input
              type="text"
              class="w-full px-6 py-3 mb-4 text-base border rounded-md text-grey-darker sm:text-xl"
              v-model="user.username"
            />
          </div>
          <!-- email -->
          <div class="mb-6">
            <h1 class="mb-3 font-bold accountdetails">Email</h1>
            <input
              type="email"
              class="w-full px-6 py-3 mb-4 text-base border rounded-md text-grey-darker sm:text-xl"
              v-model="user.email"
            />
          </div>
          <!-- password -->
          <div class="mb-6">
            <h1 class="mb-3 font-bold accountdetails">Password</h1>
            <input
              type="password"
              class="w-full px-6 py-3 mb-4 text-base border rounded-md text-grey-darker sm:text-xl"
              v-model="user.password"
              placeholder="***************"
            />
          </div>
          <!-- year -->

          <h1 class="mb-3 font-bold accountdetails">Year</h1>
          <div class="relative mb-10 yearContainer">
            <div>
              <input
                type="text"
                v-model="user.year"
                class="relative pt-1 mb-2 text-base rounded-lg cursor-pointer year-dropdown sm:text-lg md:text-xl lg:text-2xl font-objectivity sm:mb-0"
                @focus="yearFocused = true"
              />
              <svg
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute year-icon"
                @click="toggleYearOptions()"
              >
                <path
                  d="M48 -4.37114e-07C53.5228 -1.95702e-07 58 4.47715 58 10L58 48C58 53.5229 53.5228 58 48 58L10 58C4.47715 58 1.47514e-06 53.5228 1.71655e-06 48L3.37758e-06 10C3.61899e-06 4.47715 4.47716 -2.33956e-06 10 -2.09815e-06L48 -4.37114e-07Z"
                  fill="#F5A64A"
                />
                <path
                  d="M18 23L29.25 34.25L40.5 23"
                  stroke="#F9F7F2"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <div
                :class="[yearOptionsClasses, yearFocused ? 'block' : 'hidden']"
                style="max-height: 220px"
                id="yearOptions"
              >
                <button
                  v-for="year in years"
                  :key="year.id"
                  @click="
                    user.year = year.name;
                    hideOptions();
                  "
                  class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                >
                  <span class="font-bold truncate">{{ year.name }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- course -->
          <div class="mb-6">
            <h1 class="mb-3 font-bold accountdetails">Course</h1>
            <div class="relative w-full mb-10">
              <div>
                <input
                  type="text"
                  placeholder="Course"
                  class="relative w-full text-base truncate rounded-lg sm:text-lg md:text-xl lg:text-2xl font-objectivity course-input"
                  v-model="user.course"
                  @focus="courseFocused = true"
                />
                <svg
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute course-icon"
                  @click="toggleCourseOptions()"
                >
                  <path
                    d="M48 -4.37114e-07C53.5228 -1.95702e-07 58 4.47715 58 10L58 48C58 53.5229 53.5228 58 48 58L10 58C4.47715 58 1.47514e-06 53.5228 1.71655e-06 48L3.37758e-06 10C3.61899e-06 4.47715 4.47716 -2.33956e-06 10 -2.09815e-06L48 -4.37114e-07Z"
                    fill="#C7A8F4"
                  />
                  <path
                    d="M18 23L29.25 34.25L40.5 23"
                    stroke="#F9F7F2"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div
                :class="[
                  courseOptionsClasses,
                  courseFocused ? 'block' : 'hidden',
                ]"
                style="max-height: 220px"
                ref="courseBtns"
                id="courseOptions"
              >
                <button
                  v-for="admuCourse in filteredAdmuCourses"
                  :key="admuCourse.id"
                  @click="
                    user.course = admuCourse.name;
                    hideBtns();
                  "
                  class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                >
                  <span class="font-bold truncate">{{ admuCourse.name }}</span>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="mb-6">
            <h1 class="mb-3 font-bold accountdetails">Year and Course</h1>
            {{ userYearAndCourse }}
          </div> -->
          <!-- <courses/> -->

          <!-- update account -->
          <div class="mt-16 sm:mt-20">
            <button
              class="px-5 py-3 font-bold update-button font-objectivity"
              type="Submit"
            >
              Update Profile
            </button>
          </div>
        </div>
        <!-- end account info -->
        <!-- profile picture -->
        <div class="mx-auto mb-16 lg:mb-0">
          <!-- <g-image :src="profilePic"/> -->
          <div class="relative">
            <g-image :src="userImage" class="w-40 h-40 rounded-full" />
            <div class="absolute edit-button" @click="$refs.selectFile.click()">
              <g-image
                src="../assets/img/icons/editIcon.png"
                class="block w-1/2"
              />
            </div>
          </div>

          <input
            type="file"
            @change="onImageSelected"
            class="hidden"
            ref="selectFile"
          />
        </div>
        <!-- end profile picture -->
      </form>
      <!-- end content -->
    </div>
  </Layout>
</template>

<script>
import cover from "../components/auth/userprofile/cover";
import courses from "../components/auth/userprofile/courses";
import axios from "axios";

export default {
  name: "UserProfile",
  metaInfo() {
    return {
      title: this.title,
    };
  },

  components: {
    cover,
    courses,
  },

  data() {
    return {
      title: "User Profile",
      yearFocused: false,
      courseFocused: false,
      years: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
        { id: 4, name: "4" },
        { id: 5, name: "5" },
      ],
      imageFile: null,
      isUpdateImage: false,
    };
  },

  // START: COMPUTED
  computed: {
    // Start: User Data
    user() {
      const data = this.$store.state.userStore.user;
      this.title = data.username;
      return data;
    },
    userImage() {
      try {
        const data = this.$store.state.userStore.user.profileImage.url;
        return data;
      } catch (error) {
        // console.log(error);
        return require("../assets/img/icons/DefaultUserIcon.svg");
      }
    },
    // End: User Data

    // Start: ADMU COURSES
    admuCourses() {
      const data = this.$store.state.admuCoursesStore.admuCourses;
      return data;
    },

    filteredAdmuCourses() {
      if (this.user.course) {
        return this.admuCourses.filter((admuCourse) => {
          return admuCourse.name
            .toLowerCase()
            .includes(this.user.course.toLowerCase());
        });
      } else {
        return this.admuCourses;
      }
    },
    // End: ADMU COURSES

    // Start: Option Style
    yearOptionsClasses() {
      return "absolute lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7";
    },

    courseOptionsClasses() {
      return "absolute lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7";
    },
    // End: Option Style
  },
  // END: COMPUTED

  // START: METHODS
  methods: {
    hideOptions() {
      const yearOptions = document.getElementById("yearOptions");
      yearOptions.classList.add("hidden");
    },

    toggleYearOptions() {
      const yearOptions = document.getElementById("yearOptions");
      if (yearOptions.classList.contains("hidden")) {
        yearOptions.classList.remove("hidden");
      } else {
        yearOptions.classList.add("hidden");
      }
    },

    toggleCourseOptions() {
      const courseOptions = document.getElementById("courseOptions");
      if (courseOptions.classList.contains("hidden")) {
        courseOptions.classList.remove("hidden");
      } else {
        courseOptions.classList.add("hidden");
      }
    },

    hideBtns() {
      const btns = this.$refs.courseBtns;
      btns.classList.add("hidden");
    },

    onImageSelected(event) {
      this.imageFile = event.target.files[0];
      this.isUpdateImage = true;
    },

    updateUser(event) {
      event.preventDefault();

      //If user DOES select a new profileImage
      if (this.isUpdateImage) {
        this.isUpdateImage = false;
        this.$store
          .dispatch("userStore/updateUserImage", this.imageFile)
          .then((response) => {
            this.user.profileImage = response;
            this.$store.dispatch("userStore/updateUser", this.user);
          })
          .catch((error) => console.log(error));
      } else {
        this.$store.dispatch("userStore/updateUser", this.user);
      }
    },
  },
  // END: METHODS
};
</script>

<style>
.accountdetails {
  font-size: 24px;
}

.update-button {
  background: linear-gradient(283.99deg, #b0ca88 7.28%, #70b9a2 100%);
  border-radius: 34px;
  color: #f9f7f2;
}

.yearContainer {
  width: 30%;
}

.year-dropdown {
  border: 1px solid #dbdad5;
  appearance: none;
  width: 100%;
  border-radius: 10px;
  outline: none;
  padding-left: 1.5rem;
  height: 58px;
}

.course-input {
  border: 1px solid #dbdad5;
  appearance: none;
  border-radius: 10px;
  outline: none;
  padding-left: 12px;
  height: 58px;
}

.year-icon,
.course-icon {
  right: 0;
  top: 0.5px;
  width: 57px;
  height: 57px;
}

.edit-button {
  right: 0;
  bottom: 0;
  background: #f9f7f2;
  border: 4px solid #c7a8f4;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .accountdetails {
    font-size: 16px;
  }
}

@media screen and (max-width: 400px) {
  .yearContainer {
    width: 40%;
  }
}
</style>