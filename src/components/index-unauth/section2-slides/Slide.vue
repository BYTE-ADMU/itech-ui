<!--Slide Component-->
<template lang="html">
  <div v-for="slide in slides" v-bind:key="slide.id">
    <input class="carousel-open" type="radio" v-bind:id="[slide.slideOrder]" name="carousel" aria-hidden="true" hidden="" checked="checked">
    <div class="carousel-item absolute opacity-0" v-bind:class="[slide.classes]" style="height:100vh; ">
      <div class="block h-full w-full text-white text-center flex flex-col">
        <div class="flex flex-col mt-16">
          <div class="flex flex-col mb-5">
            <p class="font-objectivity uppercase text-2xl tracking-wide">
              Become a
            </p>
            <p class="font-neuemachina uppercase text-5xl tracking-wider">
              {{slide.becomeWhat}}
            </p>
          </div>
          <div class="flex mt-10 justify-center flex-wrap">
            <!-- Column 1 -->
            <div class="flex flex-col">
              <div class="flex">
                <div class="t1 small-box bg-white rounded-lg mr-4">
                  &nbsp;
                </div>
                <div class="t3 small-box bg-white rounded-lg mr-4">
                  &nbsp;
                </div>
              </div>
              <div class="t2 long-box bg-white rounded-lg mt-4 mr-4">
                &nbsp;
              </div>
            </div>


            <!-- Column 2 -->
            <div class="big-box bg-white rounded-lg relative">
              <img :src="require('@/assets/img/index-unauth/HACKER mascot.svg')" class="absolute mascot-1" />
            </div>


            <!-- Column 3 -->
            <div class="flex flex-col">
              <div class="flex">
                <div class="t2 small-box bg-white rounded-lg ml-4">
                  &nbsp;
                </div>
                <div class="t1 small-box bg-white rounded-lg ml-4">
                  &nbsp;
                </div>
              </div>
              <div class="t3 long-box bg-white rounded-lg mt-4 ml-4">
                &nbsp;
              </div>
            </div>
          </div>
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
  props: ["slides"]

});
</script>

<style lang="css" scoped>
</style>
