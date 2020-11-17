<!--Slide Component-->
<template>
<div>

  <input class="carousel-open" type="radio" v-bind:id="[slide.slideOrder]" name="carousel" aria-hidden="true" hidden="" checked="checked">
  <div class="flex h-screen items-center justify-center carousel-item absolute opacity-0" v-bind:class="[slide.classes]">

    <div class="grid-container">
      <div class="full-width-row">
        <div class=" w-full text-white text-center mt-16">
          <p class="font-objectivity uppercase text-2xl tracking-wide">
            Become a
          </p>
          <p class="font-neuemachina uppercase text-5xl tracking-wider">
            {{slide.becomeWhat}}
          </p>
        </div>
      </div>

      <div style="background-color:red">
        <div class="flex">
          <div class="t2 small-box bg-white rounded-lg ml-4">&nbsp;</div>
          <div class="t1 small-box bg-white rounded-lg ml-4">&nbsp;</div>
        </div>
        <div class="t3 long-box bg-white rounded-lg mt-4 ml-4">&nbsp;</div>
      </div>

      <div>
        <div class="big-box bg-white rounded-lg py-6 mx-auto "></div>
      </div>

      <div style="background-color:red">
        <div class="flex">
          <div class="t2 small-box bg-white rounded-lg ml-4">&nbsp;</div>
          <div class="t1 small-box bg-white rounded-lg ml-4">&nbsp;</div>
        </div>
        <div class="t3 long-box bg-white rounded-lg mt-4 ml-4">&nbsp;</div>
      </div>
    </div>

  </div>


</div>
</template>


<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Slide",

  //props
  props: ["slide"]

});
</script>

<style lang="css" scoped>
.grid-container {
  display: grid;
  grid-gap: 20px;
  justify-content:center;
}

.full-width-row {
  grid-column-start: 1;
  grid-column-end: 4;
}

</style>
