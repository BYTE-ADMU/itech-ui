<template lang="html">
<section>
  <div v-bind:tabsData="tabsData" v-for="tabData in tabsData" v-bind:key="tabData.id">
    <Tab>
      <!-- START: BACK BUTTON -->
      <div  v-if="selectedIndex === 0"><g-link to="/"><button class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></g-link></div>
      <div v-else><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
      <!-- END: BACK BUTTON -->

      <div v-if="selectedIndex % 2 === 0">
        <div class="flex items-center justify-center h-screen" >
          <div class="flex w-3/4">
            <div class="w-full mr-20 text-center md:w-1/2 ">
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="py-6 mx-auto"/>
            </div>

            <div class="w-full mt-24 md:w-1/2">
              <h1 class="form_header font-neuemachina">{{tabData.header}}</h1>
              <h1 class="mb-10 form_text font-objectivity">{{tabData.text}}</h1>

              <div class="form_inputs">
                <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="username" type="text" placeholder="Kianna Zalameda"/>
              </div>

              <!-- START: NEXT BUTTON -->
              <div  v-if="selectedIndex === 8"><g-link to="/login/"><button class="px-16 py-4 float-right form_button uppercase font-objectivity ...">{{tabData.buttonText}}</button></g-link></div>
              <div v-else><button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="flex items-center justify-center h-screen" >
          <div class="w-3/4">
            <div class="w-full text-center">
              <h1 class="form_header font-neuemachina" style="margin-top:-120px">{{tabData.header}}</h1>
              <h1 class="w-full mb-10 form_text font-objectivity"><div class="mx-auto" style="max-width:550px">{{tabData.text}}</div></h1>
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="py-6 mx-auto "/>

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