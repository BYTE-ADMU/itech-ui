<template lang="html">
<section>
  <div v-bind:tabsData="tabsData" v-for="tabData in tabsData" v-bind:key="tabData.id">
    <Tab>
      <!-- START: BACK BUTTON -->
      <div  v-if="selectedIndex === 0"><g-link to="/"><button class="float-left" style="position: absolute; left:250px; top:300px; font-size:40px"><</button></g-link></div>
      <div v-else><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:250px; top:300px; font-size:40px"><</button></div>
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
                  <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="password" type="password" placeholder="password"/>
                  <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="confirm_password" type="password" placeholder="confirm password"/>
                </div>
                <div v-else-if="tabData.id === 7">
                  <input class="w-1/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="password" type="text" placeholder="2"/>
                  <input class="w-3/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="confirm_password" type="text" placeholder="Information Technology"/>
                </div>
                <div v-else-if="tabData.id === 8">
                  <input class="w-1/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="time" type="text" placeholder="00:00"/>
                  <input class="w-3/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="ampm" type="text" placeholder="AM"/>
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


