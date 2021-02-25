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
                  
                  <input v-model="user.username" class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="username" type="text" placeholder="Kianna Zalameda"/>

                </div>
                <div v-else-if="tabData.id === 3">
                  <input v-model="user.email" class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="email" type="text" placeholder="kianna.zalameda@obf.ateneo.edu"/>
                </div>
                <div v-else-if="tabData.id === 5">
                  <input v-model="user.password" class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker" id="password" type="password" placeholder="password"/>
                  <input v-model="user.confirmPassword" class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="confirm_password" type="password" placeholder="confirm password"/>
                </div>
                <div v-else-if="tabData.id === 7">
                  <div class="mb-10">
                  <span class="overflow-y-hidden">
                    <select v-model="user.year" class="w-1/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option disabled hidden value="">1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <button class="w-1/12 py-5 text-white bg-pink-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button>
                  </span>
                  <span class="w-1/12 ml-10"></span>
              
                  <span class="overflow-y-hidden">
                    <select v-model="user.course" class="w-8/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option disabled hidden value="">Information Technology</option>
                      <option value="Information Technology">Information Technology</option>
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
                    <select v-model="user.time" class="w-3/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option disabled hidden value="">00:00</option>
                      <option v-bind:times="times" v-for="time in times" :key="time.id" :value="time.value">{{time.value}}</option>
                    </select>
                    <button class="w-1/12 py-5 text-white bg-pink-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button>
                  </span>
                  <span class="w-1/12 ml-10"></span>
              
                  <span class="overflow-y-hidden">
                    <select v-model="user.timeAMPM" class="w-2/12 px-4 py-2 border appearance-none rounded-l-md text-grey-darker">
                      <option disabled hidden value="">AM</option>
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
              <div v-else><button :disabled="!isDisabled" class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>{{tabData.buttonText}}</button></div>
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
              <div v-else><button class="px-16 py-4 mx-auto form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)' >{{tabData.buttonText}}</button></div>
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
      times: [
        { id: 1, value: "00:00" },
        { id: 2, value: "01:00" },
        { id: 3, value: "02:00" },
        { id: 4, value: "03:00" },
        { id: 5, value: "04:00" },
        { id: 6, value: "05:00" },
        { id: 7, value: "06:00" },
        { id: 8, value: "07:00" },
        { id: 9, value: "08:00" },
        { id: 10, value: "09:00" },
        { id: 11, value: "10:00" },
        { id: 12, value: "11:00" },
        { id: 13, value: "12:00" },
        { id: 14, value: "13:00" },
        { id: 15, value: "14:00" },
        { id: 16, value: "15:00" },
        { id: 17, value: "16:00" },
        { id: 18, value: "17:00" },
        { id: 19, value: "18:00" },
        { id: 20, value: "19:00" },
        { id: 21, value: "20:00" },
        { id: 22, value: "21:00" },
        { id: 23, value: "22:00" },
        { id: 24, value: "23:00" },
      ],
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        year: "",
        course: "",
        time: "",
        timeAMPM: "",
      },
      isCompleted: false,
    };
  },
  computed: {
    isDisabled() {
      this.isCompleted =
        this.isCompleted === true ? !this.isCompleted : this.isCompleted;
      if (
        (this.user.username && this.selectedIndex === 0) ||
        (this.user.email && this.selectedIndex === 2) ||
        (this.user.password &&
          this.user.confirmPassword &&
          this.selectedIndex === 4) ||
        (this.user.year && this.user.course && this.selectedIndex === 6) ||
        (this.user.time && this.user.timeAMPM && this.selectedIndex === 7)
      ) {
        this.isCompleted = !this.isCompleted;
        return this.isCompleted;
      }
    },
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
    async register() {
      const regObj = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      }
      await this.$store.dispatch('register', regObj);
      if (this.$store.state.isAuthenticated) {
        this.$router.replace('/dashboard');
      }
    }
  },
};
</script>

<style>
.dissapear {
  display: none;
}
</style>