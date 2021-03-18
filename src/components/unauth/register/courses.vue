<template>
  <div class="w-full relative">
    <input
      type="text"
      placeholder="Course"
      class="w-full h-10 pb-2 pt-3 pl-5 pr-2 text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg font-objectivity course-input truncate"
      v-model="searchCourse"
      @focus="typing = true"
    /> 
    
    <div
      v-if="typing"
      class="absolute lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7"
      style="max-height: 220px;"
    >
      <button
        v-for="course in filteredAdmuCourses"
        :key="course.id"
        @click="searchCourse = course.name; typing = false; setCourse()"
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
      typing: false,
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
    }
  }
}
</script>

<style>
.course-input {
  border: 1px solid #dbdad5;
}
</style>