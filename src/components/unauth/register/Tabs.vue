<template lang="html">
<section>
  <div v-bind:tabsData="tabsData" v-for="tabData in tabsData" v-bind:key="tabData.id">

    <Tab>
      <!-- START: BACK BUTTON -->
      <div  v-if="selectedIndex === 0"><g-link to="/"><button class="float-left breadcrumb">Back</button></g-link></div>
      <div v-else><button @click='selectTab(selectedIndex-1)' class="float-left breadcrumb">Back</button></div>
      <!-- END: BACK BUTTON -->

      <div v-if="!tabData.isLayoutCentered">
        <div class="flex items-center justify-center min-h-screen my-20 lg:my-0" >
          <div class="lg:flex lg:w-3/4">
            <!-- START: IMAGE -->
            <div v-if="selectedIndex === 4" class="block mx-auto px-4 -mt-6 lg:mt-0 lg:flex  ">
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="pt-10"/>
            </div>
            <div v-else class="block mx-auto px-4 lg:flex  ">
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')"/>
            </div>
            <!-- END: IMAGE -->

            <!-- START: FORM -->
            <div class="mt-6 lg:mt-24 mx-4 lg:ml-20 lg:w-1/2">
              <h1 class="font-neuemachina font-black text-2xl md:text-3xl lg:text-4xl">{{tabData.header}}</h1>
              <h1 class="mb-3 lg:mb-6 font-light text-lg md:text-xl lg:text-2xl font-objectivity">{{tabData.text}}</h1>

              <!-- START: FORM -->
              <div class="form_inputs">
                <div v-if="tabData.id === 1">
                  
                  <input v-model="user.username" class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="username" type="text" placeholder="Kianna Zalameda"/>

                </div>
                <div v-else-if="tabData.id === 3">
                  <input v-model="user.email" class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="email" type="text" placeholder="kianna.zalameda@obf.ateneo.edu"/>
                </div>
                <div v-else-if="tabData.id === 4">
                  <input v-model="user.password" class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker" id="password" type="password" placeholder="password"/>
                  <input v-model="user.confirmPassword" class="w-full px-8 py-4 mb-5 border rounded-md text-grey-darker" id="confirm_password" type="password" placeholder="confirm password"/>
                </div>
                <div v-else-if="tabData.id === 6">
                  <div class="mb-10 sm:text-center">
                  <span class="sm:inline block">
                    <select v-model="user.year" class="year-dropdown text-xl lg:text-2xl sm:mb-0 mb-2">
                      <option disabled hidden value="">1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                    <!-- <select v-model="user.year" class="w-1/12 pl-3 py-2 border text-base lg:text-2xl appearance-none rounded-l-md text-grey-darker year-dropdown">
                      <option disabled hidden value="">1</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select> -->
                    <!-- <button for="yeardrop" class="w-1/12 py-5 text-white bg-pink-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button> -->
                  </span>
                  <span class="ml-3 sm:inline hidden"></span>
              
                  <span class="sm:inline block">
                    <select v-model="user.course" class="course-dropdown text-xl lg:text-2xl">
                      <option disabled hidden value="">Information Technology</option>
                      <option value="Information Technology">Information Technology</option>
                      <option>Course 2</option>
                      <option>Course 3</option>
                      <option>Course 4</option>
                    </select>
                    <!-- <select v-model="user.course" class="w-8/12 px-4 py-2 border text-base lg:text-2xl appearance-none rounded-l-md text-grey-darker">
                      <option disabled hidden value="">Information Technology</option>
                      <option value="Information Technology">Information Technology</option>
                      <option>Course 2</option>
                      <option>Course 3</option>
                      <option>Course 4</option>
                    </select> -->
                    <!-- <button class="w-1/12 py-5 text-white bg-purple-200 rounded-r-md ">
                      <svg  class="mx-auto" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L12.8205 13.214C13.2281 13.6364 13.9102 13.6185 14.2951 13.1753L24 2" stroke="white" stroke-width="3"/>
                      </svg>
                    </button> -->
                  </span>
                  </div>
                  
                </div>
                <!-- <div v-else-if="tabData.id === 8">
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
                </div> -->
                
              </div>
              <!-- START: FORM -->

              <!-- START: NEXT BUTTON -->
              
              <div  v-if="tabData.id === 7"><g-link to="/login/"><button class="px-8 pt-3 pb-2 float-right form_button font-objectivity ...">{{tabData.buttonText}}</button></g-link></div>
              <div v-else><button :disabled="!isDisabled" class="block mx-auto lg:mt-0 px-8 pt-3 pb-2 lg:float-right form_button font-objectivity ..." @click='selectTab(selectedIndex+1)'>{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>
            <!-- END: FORM -->
          </div>
        </div>
      </div>

      <div v-else-if="tabData.id === 2">
        <div class="flex items-center justify-center h-screen" >
          <div class="w-full md:w-3/4">
            <div class="w-full md:text-center">
              <div class="flex flex-col-reverse lg:block">
                <div class=" md:mb-6 px-4">
                  <!-- START: TEXT -->
                  <h1 class="font-black text-2xl md:text-3xl lg:text-4xl font-neuemachina">{{tabData.header}}</h1>
                  <h1 class="w-full mb-4 font-light text-lg md:text-xl lg:text-2xl font-objectivity"><div class="lg:mx-auto" style="max-width:650px">{{tabData.text}}</div></h1>
                  <!-- START: TEXT -->
                </div>

                <div>
                  <!-- START: IMAGE -->
                  <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="pb-6 mx-auto px-4 md:mt-0"/>
                  <!-- START: IMAGE -->
                </div>
              </div>

              <!-- START: NEXT BUTTON -->
              <div  v-if="tabData.id === 7"><button @click="register" class="block mt-12 md:mt-0 px-8 pt-3 pb-2 mx-auto form_button font-objectivity ...">{{tabData.buttonText}}</button></div>
              <div v-else><button class="block mt-12 md:mt-0 px-8 pt-3 pb-2 mx-auto form_button font-objectivity ..." @click='selectTab(selectedIndex+1)' >{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>    
          </div>
        </div>    
      </div>

      <div v-else-if="tabData.id === 5">
        <div class="flex items-center justify-center h-screen" >
          <div class="w-full md:w-3/4">
            <div class="w-full md:text-center">
              <div class="flex flex-col-reverse lg:block">
                <div class=" md:mb-6 px-4">
                  <!-- START: TEXT -->
                  <h1 class="font-black text-2xl md:text-3xl lg:text-4xl font-neuemachina">{{tabData.header}}</h1>
                  <h1 class="w-full mb-4 font-light text-lg md:text-xl lg:text-2xl font-objectivity"><div class="lg:mx-auto" style="max-width:650px">{{tabData.text}}</div></h1>
                  <!-- START: TEXT -->
                </div>

                <div>
                  <!-- START: IMAGE -->
                  <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="pb-6 mx-auto px-4 md:mt-0"/>
                  <!-- START: IMAGE -->
                </div>
              </div>

              <!-- START: NEXT BUTTON -->
              <div  v-if="tabData.id === 7"><button @click="register" class="block mt-12 md:mt-0 px-8 pt-3 pb-2 mx-auto form_button font-objectivity ...">{{tabData.buttonText}}</button></div>
              <div v-else><button class="block mt-12 md:mt-0 px-8 pt-3 pb-2 mx-auto form_button font-objectivity ..." @click='selectTab(selectedIndex+1)' >{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>    
          </div>
        </div>    
      </div>

      <div v-else>
        <div class="flex items-center justify-center h-screen" >
          <div class="w-full md:w-3/4">
            <div class="w-full md:text-center">
              <div class="flex flex-col-reverse lg:block">
                <div class="my-10 md:mb-6 px-4">
                  <!-- START: TEXT -->
                  <h1 class="font-black text-2xl md:text-3xl lg:text-4xl font-neuemachina">{{tabData.header}}</h1>
                  <h1 class="w-full mb-4 font-light text-lg md:text-xl lg:text-2xl font-objectivity"><div class="lg:mx-auto" style="max-width:650px">{{tabData.text}}</div></h1>
                  <!-- START: TEXT -->
                </div>

                <div>
                  <!-- START: IMAGE -->
                  <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')" class="pb-6 mx-auto px-4 mt-12 md:mt-0"/>
                  <!-- START: IMAGE -->
                </div>
              </div>

              <!-- START: NEXT BUTTON -->
              <div  v-if="tabData.id === 7"><button @click="register" class="block mt-12 md:mt-0 px-8 pt-3 pb-2 mx-auto form_button font-objectivity ...">{{tabData.buttonText}}</button></div>
              <div v-else><button class="block mt-12 md:mt-0 px-8 pt-3 pb-2 mx-auto form_button font-objectivity ..." @click='selectTab(selectedIndex+1)' >{{tabData.buttonText}}</button></div>
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
        // timeAMPM: "",
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
          this.selectedIndex === 3) ||
        (this.user.year && this.user.course && this.selectedIndex === 5) ||
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
    register() {
      const regObj = {
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
      }
      const infoObj = {
        course: `${this.user.year} ${this.user.course}`,
        email: this.user.email,
        username: this.user.username,
      }
      this.$store.dispatch('userStore/register', regObj)
        .then(() => {
          this.$store.dispatch('userStore/infoReg', infoObj)
          this.$router.replace('/login/');
        })
    }
  },
};
</script>

<style>
.dissapear {
  display: none;
}

.breadcrumb {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #dbdad5;
  position: absolute;
  left:140px;
  top:140px;
}

.year-dropdown {
  /* position: relative; */
  appearance: none;
  background-image: url('../../../assets/img/unauth/register/icons/yeardropdown.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right center;
  width: 15%;
  border-radius: 10px;
  box-shadow: 0 0 0.5pt 1.5pt #dbdad5;
  outline: none;
  padding-left: 12px;
}

.course-dropdown {
  appearance: none;
  background-image: url('../../../assets/img/unauth/register/icons/coursedropdown.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right center;
  width: 66%;
  border-radius: 10px;
  box-shadow: 0 0 0.5pt 1.5pt #dbdad5;
  outline: none;
  padding-left: 12px;
  padding-right: 60px;
}

@media screen and (max-width: 1320px) {
  .year-dropdown {
    width: 23%;
  }
}

@media screen and (max-width: 768px) {
  .year-dropdown {
    width: 12%;
  }
}

@media screen and (max-width: 640px) {
  .breadcrumb {
    left: 16px;
    top: 125px;
    font-size: 14px;
  }
}

@media screen and (max-width: 490px) {
  .year-dropdown {
    width: 20%;
  }
}
</style>