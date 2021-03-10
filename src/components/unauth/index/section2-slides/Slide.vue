<!--Slide Component-->
<template>
  <div>
    <input
      class="carousel-open"
      type="radio"
      v-bind:id="[slide.slideOrder]"
      name="carousel"
      aria-hidden="true"
      hidden=""
      checked="checked"
    />
    <div
      class="absolute flex items-center justify-center opacity-0 carousel-item"
      v-bind:class="[slide.classes[0]]"
      style="height: 800px"
    >
      <div class="mb-20 grid-container">
        <div class="full-width-row">
          <div class="w-full text-center text-white">
            <p class="text-2xl tracking-wide uppercase font-objectivity">
              Here you'll learn to become a
            </p>
            <p class="text-5xl tracking-wider uppercase font-neuemachina">
              {{ slide.becomeWhat }}
            </p>
          </div>
        </div>

      </div>
      <!-- END: DESCRIPTION -->

      <!-- START: CAROUSEL -->
      <div
        class="grid items-center w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-3"
      >
        <!-- START: FIRST COLUMN -->
        <div
          v-if="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block"
        >
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg small-box"></div>
            <div class="bg-white rounded-lg small-box"></div>
          </div>
          <div class="mt-4 bg-white rounded-lg long-box"></div>
        </div>

        <div v-else class="grid hidden grid-cols-1 mx-auto lg:block">
          <div class="grid grid-cols-2 gap-4">
            <CourseButton v-bind:course="filteredCourses[0]" />
            <CourseButton v-bind:course="filteredCourses[1]" />

          </div>
        </div>

        <div>
          <div class="py-6 mx-auto bg-white rounded-lg big-box"></div>
        </div>


        <!-- START: THIRD COLUMN -->
        <div
          v-if="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block"
        >
          <div class="mb-4 bg-white rounded-lg long-box"></div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg small-box"></div>
            <div class="bg-white rounded-lg small-box"></div>
          </div>
        </div>
        <div
          v-else="articles === null || courses === null"
          class="grid hidden grid-cols-1 mx-auto lg:block"
        >
          <ArticleButton
            class="mb-4"
            v-bind:article="filteredArticles[1]"
          ></ArticleButton>
          <div class="grid grid-cols-2 gap-4">
            <CourseButton v-bind:course="filteredCourses[2]" />
            <CourseButton v-bind:course="filteredCourses[3]" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
export default Vue.extend({
  name: "Slide",

  //props
  props: ["slide"],
});
</script>

<style lang="css" scoped>
.grid-container {
  display: grid;
  grid-gap: 20px;
  justify-content: center;
}

.full-width-row {
  grid-column-start: 1;
  grid-column-end: 4;
}
</style>
