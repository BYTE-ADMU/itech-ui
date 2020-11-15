<!--Slides for all Slide components-->
<template lang="html">
  <div class="w-100 bg-white font-sans leading-normal tracking-normal">
    <div class="carousel relative shadow-2xl bg-white">
      <div class="carousel-inner relative overflow-hidden w-full">

        <!--START: each-slide component-->
        <div v-bind:key="todo.id" v-for="todo in todos">
          <TodoItem v-bind:todo="todo" />
        </div>

        <div v-for="slide in slides" v-bind:key="slide.id" >
          <Slide v-bind:slide="slide" />
        </div>
        <!--END: each-slide component-->

        <!-- <div v-for="slide in slides" v-bind:key="slide.id"> -->
          <!--Slide Component-->
          <!-- <input class="carousel-open" type="radio" v-bind:id="[slide.slideOrder]" name="carousel" aria-hidden="true" hidden="" checked="checked">
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
                <div class="flex mt-10 justify-center flex-wrap"> -->

                  <!-- Column 1 -->
                  <!-- <div class="flex flex-col">
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
                  </div> -->


                  <!-- Column 2 -->
                  <!-- <div class="big-box bg-white rounded-lg relative">
                    <img :src="require('@/assets/img/index-unauth/HACKER mascot.svg')" class="absolute mascot-1" />
                  </div> -->


                  <!-- Column 3 -->
                  <!-- <div class="flex flex-col">
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
        </div> -->

        <!-- Indicators for each slide-->
        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white">•</label>
          </li>
          <li class="inline-block mr-3">
            <label for="carousel-3" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-white">•</label>
          </li>
        </ol>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Slide from './Slide.vue'
export default Vue.extend({
  name: "Slides",

  //Components
  components: {
    Slide
  },

  //props
  props: ["slides"]

});
</script>
