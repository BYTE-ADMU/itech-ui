<!--Slide Component-->
<template>
  <div>
    <input
      class="carousel-open"
      type="radio"
      v-bind:id="slide.id"
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

        <div>
          <div class="flex">
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[2]]"
            >
              &nbsp;
            </div>
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[1]]"
            >
              &nbsp;
            </div>
          </div>
          <div
            class="mt-4 ml-4 bg-white rounded-lg long-box"
            v-bind:class="[slide.classes[3]]"
          >
            &nbsp;
          </div>
        </div>

        <div>
          <div class="py-6 mx-auto bg-white rounded-lg big-box"></div>
        </div>

        <div>
          <div class="flex">
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[2]]"
            >
              &nbsp;
            </div>
            <div
              class="ml-4 bg-white rounded-lg small-box"
              v-bind:class="[slide.classes[1]]"
            >
              &nbsp;
            </div>
          </div>
          <div
            class="mt-4 ml-4 bg-white rounded-lg long-box"
            v-bind:class="[slide.classes[3]]"
          >
            &nbsp;
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
