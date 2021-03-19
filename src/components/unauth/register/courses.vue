<template>
  <div class="w-full relative">
    <div>
      <input
        type="text"
        placeholder="Course"
        class="relative w-full text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg font-objectivity course-input truncate"
        v-model="searchCourse"
      /> 
      <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="absolute course-icon">
        <path d="M48 -4.37114e-07C53.5228 -1.95702e-07 58 4.47715 58 10L58 48C58 53.5229 53.5228 58 48 58L10 58C4.47715 58 1.47514e-06 53.5228 1.71655e-06 48L3.37758e-06 10C3.61899e-06 4.47715 4.47716 -2.33956e-06 10 -2.09815e-06L48 -4.37114e-07Z" fill="#C7A8F4"/>
        <path d="M18 23L29.25 34.25L40.5 23" stroke="#F9F7F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <div
      v-if="searchCourse"
      class="absolute lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7"
      style="max-height: 220px;"
      ref="courseBtns"
    >
      <button
        v-for="course in filteredAdmuCourses"
        :key="course.id"
        @click="searchCourse = course.name; hideBtns(); setCourse()"
        class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
      >
        <span class="font-bold truncate">{{ course.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "courses",
  data() {
    return {
      searchCourse: "",
    }
  },

  computed: {
    admuCourses() {
      const data = this.$store.state.admuCoursesStore.admuCourses;
      return data;
    },

    filteredAdmuCourses() {
      return this.admuCourses.filter((course) => {
        return course.name.toLowerCase().includes(this.searchCourse.toLowerCase());
      });
    }
  },

  methods: {
    setCourse() {
      this.$emit('setCourse', this.searchCourse);
    },

    hideBtns() {
      const btns = this.$refs.courseBtns;
      btns.classList.add('hidden');
    }
  }
}
</script>

<style>
.course-input {
  border: 1px solid #dbdad5;
  appearance: none;
  /* background-image: url('../../../assets/img/unauth/register/icons/coursedropdown.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right center; */
  border-radius: 10px;
  /* box-shadow: 0 0 0.5pt 1.5pt #dbdad5; */
  outline: none;
  padding-left: 12px;
  /* padding-right: 60px; */
  height: 58px;
}

.course-icon {
  right: 0;
  top: 0.5px;
  width: 57px;
  height: 57px;
}

@media screen and (max-width:465px) {
  .course-input {
    height: 47px;
  }

  .course-icon {
    width: 46px;
    height: 46px;
    top: 0;
  }
}
</style>