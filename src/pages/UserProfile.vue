<template>
  <Layout>
    <div class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto">
      <!-- cover -->
      <div class="mb-10">
        <cover/>
      </div>
      <!-- end cover -->

      <!-- content -->
      <div class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-10 mx-auto w-full lg:w-4/5">
        <!-- account info -->
        <div>
          <!-- name -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Name</h1>
            <input type="text" class="w-full px-6 py-3 mb-4 border rounded-md text-grey-darker text-base sm:text-xl"
              v-model="nameofuser"/>
          </div>
          <!-- email -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Email</h1>
            <input type="email" class="w-full px-6 py-3 mb-4 border rounded-md text-grey-darker text-base sm:text-xl"
              v-model="email"/>
          </div>
          <!-- password -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Password</h1>
            <input type="password" class="w-full px-6 py-3 mb-4 border rounded-md text-grey-darker text-base sm:text-xl"
              v-model="password"
              />
          </div>
          <!-- year -->
          
            <h1 class="font-bold accountdetails mb-3">Year</h1>
            <div class="relative yearContainer">
              <div>
                <input
                  type="text"
                  v-model="year"
                  class="relative pt-1 mb-2 text-base rounded-lg cursor-pointer year-dropdown sm:text-lg md:text-xl lg:text-2xl font-objectivity sm:mb-0"
                  @focus="yearFocused = true"
                /> 
                <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="absolute year-icon" @click="toggleYearOptions()">
                  <path d="M48 -4.37114e-07C53.5228 -1.95702e-07 58 4.47715 58 10L58 48C58 53.5229 53.5228 58 48 58L10 58C4.47715 58 1.47514e-06 53.5228 1.71655e-06 48L3.37758e-06 10C3.61899e-06 4.47715 4.47716 -2.33956e-06 10 -2.09815e-06L48 -4.37114e-07Z" fill="#F5A64A"/>
                  <path d="M18 23L29.25 34.25L40.5 23" stroke="#F9F7F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div>
                <div
                  :class="[yearOptionsClasses, (yearFocused ? 'block':'hidden')]"
                  style="max-height: 220px;"
                  id="yearOptions"
                >
                  <button
                    @click="year = '1'; hideOptions();"
                    class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                  >
                    <span class="font-bold truncate">1</span>
                  </button>
                  <button
                    @click="year = '2'; hideOptions()"
                    class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                  >
                    <span class="font-bold truncate">2</span>
                  </button>
                  <button
                    @click="year = '3'; hideOptions()"
                    class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                  >
                    <span class="font-bold truncate">3</span>
                  </button>
                  <button
                    @click="year = '4'; hideOptions()"
                    class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                  >
                    <span class="font-bold truncate">4</span>
                  </button>
                  <button
                    @click="year = '5'; hideOptions()"
                    class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                  >
                    <span class="font-bold truncate">5</span>
                  </button>
                </div>
              </div>
            </div>
          

          <!-- course -->
          <div class="mb-6">  
            <h1 class="font-bold accountdetails mb-3">Course</h1>
            <div class="w-full relative">
              <div>
                <input
                  type="text"
                  placeholder="Course"
                  class="relative w-full text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg font-objectivity course-input truncate"
                  v-model="course"
                  @focus="courseFocused = true"
                /> 
                <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="absolute course-icon" @click="toggleCourseOptions()">
                  <path d="M48 -4.37114e-07C53.5228 -1.95702e-07 58 4.47715 58 10L58 48C58 53.5229 53.5228 58 48 58L10 58C4.47715 58 1.47514e-06 53.5228 1.71655e-06 48L3.37758e-06 10C3.61899e-06 4.47715 4.47716 -2.33956e-06 10 -2.09815e-06L48 -4.37114e-07Z" fill="#C7A8F4"/>
                  <path d="M18 23L29.25 34.25L40.5 23" stroke="#F9F7F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              
              <div
                :class="[courseOptionsClasses, (courseFocused ? 'block':'hidden')]"
                style="max-height: 220px;"
                ref="courseBtns"
                id="courseOptions"
              >
                <button
                  v-for="admuCourse in filteredAdmuCourses"
                  :key="admuCourse.id"
                  @click="course = admuCourse.name; hideBtns();"
                  class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                >
                  <span class="font-bold truncate">{{ admuCourse.name }}</span>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Year and Course</h1>
            {{ userYearAndCourse }}
          </div> -->
          <!-- <courses/> -->

          <!-- update account -->
          <div class="mt-16 sm:mt-20">
            <button class="update-button font-objectivity font-bold py-3 px-5"
              @click="showFields">
              Update Profile
            </button>
          </div>
        </div>
        <!-- end account info -->
        <!-- profile picture -->
        <div class="mx-auto mb-16 lg:mb-0">
          <!-- <g-image :src="profilePic"/> -->
          <g-image :src="userImage"
            class="w-40 h-40 rounded-full"/>
        </div>
        <!-- end profile picture -->
      </div>
      <!-- end content -->
    </div>
  </Layout>
</template>

<script>
import cover from '../components/auth/userprofile/cover'
import courses from '../components/auth/userprofile/courses'

export default {
  name: "UserProfile",
  metaInfo() {
    return {
      title: this.title,
    }
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
      nameofuser: '',
      email: '',
      password: '',
      year: '',
      course: '',
    }
  },

  created() {
    this.username();
    this.userEmail();
    this.userYear();
    this.userCourse();
  },

  methods: {
    username() {
      const data = this.$store.state.userStore.user.username;
      if (data !== null) {
        this.title = data;
      }
      this.nameofuser = data;
    },

    userEmail() {
      const data = this.$store.state.userStore.user.email;
      this.email = data;
    },

    userYear() {
      try {
        const data = this.$store.state.userStore.user.year;
        this.year = data;
      } catch (error) {
        // console.log(error);
        this.year = 'Year';
      }
    },

    userCourse() {
      try {
        const data = this.$store.state.userStore.user.course;
        this.course = data;
      } catch (error) {
        // console.log(error);
        this.course = 'Course';
      }
    },

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
      const courseOptions = document.getElementById('courseOptions');
      if (courseOptions.classList.contains('hidden')) {
        courseOptions.classList.remove('hidden');
      } else {
        courseOptions.classList.add('hidden');
      }
    },

    hideBtns() {
      const btns = this.$refs.courseBtns;
      btns.classList.add('hidden');
    },

    showFields() {
      // console.log(this.nameofuser);
      // console.log(this.email);
      // console.log(this.password);
      // console.log(this.year);
      // console.log(this.course);

      let user = {
        "username": this.nameofuser,
        "year": this.year,
        "course": this.course
      }
      // console.log(this.$store.state.userStore.user.id);
      this.$store.dispatch("userStore/updateProfile", user);
    }
  },

  computed: {
    userImage() {
      try {
        const data = this.$store.state.userStore.user.profileImage.url;
        return data;
      } catch (error) {
        // console.log(error);
        return require('../assets/img/icons/DefaultUserIcon.svg');
      }
    },
    yearOptionsClasses() {
      return "absolute lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7";
    },

    courseOptionsClasses() {
      return "absolute lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7";
    },

    admuCourses() {
      const data = this.$store.state.admuCoursesStore.admuCourses;
      return data;
    },

    filteredAdmuCourses() {
      if (this.course) {
        return this.admuCourses.filter((admuCourse) => {
        return admuCourse.name.toLowerCase().includes(this.course.toLowerCase());
      });
      } else {
        return this.admuCourses;
      }
      
    },
  },
}
</script>

<style>
.accountdetails {
  font-size: 24px;
}

.update-button {
  background: linear-gradient(283.99deg, #B0CA88 7.28%, #70B9A2 100%);
  border-radius: 34px;
  color: #F9F7F2;
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

.year-icon, .course-icon {
  right: 0;
  top: 0.5px;
  width: 57px;
  height: 57px;
}

@media screen and (max-width: 500px) {
  .accountdetails {
    font-size: 16px;
  }
}
</style>