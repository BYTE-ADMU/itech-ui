<template lang="html">
<section>
  <div v-bind:tabsData="tabsData" v-for="tabData in tabsData" v-bind:key="tabData.id">
    <Tab>
      <!-- START: BACK BUTTON -->
      <div  v-if="selectedIndex === 0"><g-link to="/"><button class="float-left" style="position: absolute; left:240px; top:150px; font-size:40px"><</button></g-link></div>
      <div v-else><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:240px; top:150px; font-size:40px"><</button></div>
      <!-- END: BACK BUTTON -->

      <div v-if="!tabData.isLayoutCentered">
        <div class="flex items-center justify-center h-screen" >
          <div class="flex w-3/4">
            <!-- START: IMAGE -->
            <div class="w-full text-center md:w-1/2 ">
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="py-6 mx-auto"/>
            </div>
            <!-- END: IMAGE -->

            <!-- START: FORM -->
            <div class="w-full mt-24 ml-20 md:w-1/2">
              <h1 class="form_header font-neuemachina">{{tabData.header}}</h1>
              <h1 class="mb-10 form_text font-objectivity">{{tabData.text}}</h1>

              <!-- START: FORM -->
              <div class="form_inputs">
                <div v-if="tabData.id === 1">
                  
                  <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="username" type="text" placeholder="Kianna Zalameda"/>

                </div>
                <div v-else-if="tabData.id === 3">
                  <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="email" type="text" placeholder="kianna.zalameda@obf.ateneo.edu"/>
                </div>
                <div v-else-if="tabData.id === 5">
                  <input class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker" id="password" type="password" placeholder="password"/>
                  <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="confirm_password" type="password" placeholder="confirm password"/>
                </div>
                <div v-else-if="tabData.id === 7">
                  <div class="mb-10">
                  <span class="overflow-y-hidden">
                    <select class="w-1/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <button class="w-1/12 py-5 text-white bg-pink-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button>
                  </span>
                  <span class="w-1/12 ml-10"></span>
              
                  <span class="overflow-y-hidden">
                    <select class="w-8/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option>Information Technology</option>
                      <option>Course 2</option>
                      <option>Course 3</option>
                      <option>Course 4</option>
                    </select>
                    <button class="w-1/12 py-5 text-white bg-purple-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button>
                  </span>
                  </div>
                  
                </div>
                <div v-else-if="tabData.id === 8">
                  <div class="mb-10">
                  <span class="overflow-y-hidden">
                    <select class="w-3/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option>00:00</option>
                      <option>01:00</option>
                      <option>02:00</option>
                      <option>03:00</option>
                      <option>04:00</option>
                      <option>05:00</option>
                      <option>06:00</option>
                      <option>07:00</option>
                      <option>08:00</option>
                      <option>09:00</option>
                      <option>10:00</option>
                      <option>12:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                      <option>17:00</option>
                      <option>18:00</option>
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                      <option>22:00</option>
                      <option>23:00</option>
                    </select>
                    <button class="w-1/12 py-5 text-white bg-pink-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button>
                  </span>
                  <span class="w-1/12 ml-10"></span>
              
                  <span class="overflow-y-hidden">
                    <select class="w-2/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                    <button class="w-1/12 py-5 text-white bg-purple-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button>
                  </span>
                  </div>
                  <button class="px-16 py-4 float-left uppercase font-objectivity text-grey ..." @click='selectTab(selectedIndex+1)'>Skip</button>
                </div>
                
              </div>
              <!-- START: FORM -->

              <!-- START: NEXT BUTTON -->
              <div  v-if="selectedIndex === 8"><g-link to="/login/"><button class="px-16 py-4 float-right form_button uppercase font-objectivity ...">{{tabData.buttonText}}</button></g-link></div>
              <div v-else><button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>
            <!-- END: FORM -->
          </div>
        </div>
      </div>

      <div v-else>
        <div class="flex items-center justify-center h-screen" >
          <div class="w-3/4">
            <div class="w-full text-center">
              <!-- START: TEXT -->
              <h1 class="form_header font-neuemachina" style="margin-top:-120px">{{tabData.header}}</h1>
              <h1 class="w-full mb-10 form_text font-objectivity"><div class="mx-auto" style="max-width:550px">{{tabData.text}}</div></h1>
              <!-- START: TEXT -->

              <!-- START: IMAGE -->
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="py-6 mx-auto "/>
              <!-- START: IMAGE -->

              <!-- START: NEXT BUTTON -->
              <div  v-if="selectedIndex === 8"><g-link to="/login/"><button class="px-16 py-4 mx-auto form_button uppercase font-objectivity ...">{{tabData.buttonText}}</button></g-link></div>
              <div v-else><button class="px-16 py-4 mx-auto form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>    
          </div>
        </div>    
      </div>
    </Tab>
  </div>
</section>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  components: { Tab },
  props: ["tabsData"],
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(0);
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
};
</script>

<style>
.dissapear {
  display: none;
}
</style>