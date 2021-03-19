<template lang="html">
<section>
  <div v-bind:tabsData="tabsData" v-for="tabData in tabsData" v-bind:key="tabData.id">

    <Tab>
      <!-- START: BACK BUTTON -->
      <div  v-if="selectedIndex === 0"><g-link to="/"><button class="float-left breadcrumb">Back</button></g-link></div>
      <div v-else><button @click='selectTab(selectedIndex-1)' class="float-left breadcrumb">Back</button></div>
      <!-- END: BACK BUTTON -->

      <div v-if="!tabData.isLayoutCentered">
        <div class="flex justify-center items-center min-h-screen my-20 lg:my-0 " >
          <!-- START: CONTENT -->
          <div class="grid lg:grid-cols-2 gap-3 lg:mx-20">
            <!-- START: IMAGE -->
            <div v-if="tabData.id === 4" class="block mx-auto px-4 -mt-6 lg:px-0 lg:my-auto">
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')"/>
            </div>
            <div v-else class="block mx-auto px-4 lg:px-0 lg:my-auto ">
              <img :src="require('@/assets/img/unauth/register/' + tabData.image + '')"/>
            </div>
            <!-- END: IMAGE -->

            <!-- START: FORM -->
            <div class="mt-6 lg:mt-24 mx-4">
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
                  <div class="mb-10 flex flex-col sm:flex-row">

                    <div class="yearContainer-margin relative">
                      <input
                        type="text"
                        placeholder="1"
                        class="year-dropdown cursor-pointer pt-1 text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg font-objectivity sm:mb-0 mb-2"
                        v-model="user.year"
                        @focus="choosingYear"
                      /> 
                      
                      <div>
                        <div
                        v-if="choosingYear"
                        class="relative lg w-full course-options z-40 h-auto overflow-x-hidden overflow-y-auto bg-white shadow-md r-0 mt-7"
                        style="max-height: 220px;"
                      >
                        <button
                          @click="user.year = '1'; choosingYear = false"
                          class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                        >
                          <span class="font-bold truncate">1</span>
                        </button>
                        <button
                          @click="user.year = '2'; choosingYear = false"
                          class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                        >
                          <span class="font-bold truncate">2</span>
                        </button>
                        <button
                          @click="user.year = '3'; choosingYear = false"
                          class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                        >
                          <span class="font-bold truncate">3</span>
                        </button>
                        <button
                          @click="user.year = '4'; choosingYear = false"
                          class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                        >
                          <span class="font-bold truncate">4</span>
                        </button>
                        <button
                          @click="user.year = '5'; choosingYear = false"
                          class="w-full text-left px-4 py-4 truncate ... text-sm text-gray-800 border-b button-text hover:bg-gray-200"
                        >
                          <span class="font-bold truncate">5</span>
                        </button>
                      </div>
                        <svg viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="absolute year-icon" @click="choosingYear = true">
                          <path d="M48 -4.37114e-07C53.5228 -1.95702e-07 58 4.47715 58 10L58 48C58 53.5229 53.5228 58 48 58L10 58C4.47715 58 1.47514e-06 53.5228 1.71655e-06 48L3.37758e-06 10C3.61899e-06 4.47715 4.47716 -2.33956e-06 10 -2.09815e-06L48 -4.37114e-07Z" fill="#F5A64A"/>
                          <path d="M18 23L29.25 34.25L40.5 23" stroke="#F9F7F2" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>

                    <div class="courses-container">
                      <courses @setCourse="setCourse($event)"/>
                    </div>
                  </div>
                </div>
              </div>
              <!-- START: FORM -->

              <!-- START: NEXT BUTTON -->
              
              <div  v-if="tabData.id === 7"><g-link to="/login/"><button class="px-8 pt-3 pb-2 float-right form_button font-objectivity ...">{{tabData.buttonText}}</button></g-link></div>
              <div v-else><button :disabled="!isDisabled" class="block mx-auto lg:mt-0 px-8 pt-3 pb-2 lg:float-right form_button font-objectivity ..." @click='selectTab(selectedIndex+1)'>{{tabData.buttonText}}</button></div>
              <!-- END: NEXT BUTTON -->
            </div>
            <!-- END: FORM -->
          </div>
          <!-- END: CONTENT -->
        </div>
      </div>

      <div v-else>
        <div class="flex items-center justify-center min-h-screen" >
          <div class="w-full md:w-3/4">
            <div class="w-full md:text-center lg:mb-12 lg:mt-16">
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
    </Tab>
  </div>
</section>
</template>

<script>
import Tab from "./Tab.vue";
import courses from "./courses"

export default {
  components: { Tab, courses },
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
      choosingYear: false,
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
    },

    setCourse(admuCourse) {
      this.user.course = admuCourse;
    },
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
  border: 1px solid #dbdad5;
  /* position: relative; */
  appearance: none;
  /* background-image: url('../../../assets/img/unauth/register/icons/yeardropdown.svg');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right center; */
  width: 100%;
  border-radius: 10px;
  /* box-shadow: 0 0 0.5pt 1.5pt #dbdad5; */
  outline: none;
  padding-left: 1.5rem;
  height: 58px;
}

.year-icon {
  right: 0;
  top: 0.5px;
  width: 57px;
  height: 57px;
}

.courses-container {
  width: 100%;
}

.yearContainer-margin {
  margin-right: 1rem;
  width: 28%;
}

@media screen and (min-width:1250px) {
  .breadcrumb {
    left: 15%;
  }
}

@media screen and (max-width:1220px) {
  .yearContainer-margin {
    margin-right: 0.5rem;
  }

  .courses-container {
    width: 65%;
  }
}

@media screen and (max-width:1024px) {
  .yearContainer-margin {
    margin-right: 1.25rem;
  }

  .courses-container {
    width: 100%;
  }
}

@media screen and (max-width:465px) {
  .yearContainer-margin {
    margin-right: 1.5rem;
  }

  .year-dropdown {
    height: 47px;
  }

  .year-icon {
    width: 46px;
    height: 46px;
    top: 0;
  }
}

@media screen and (max-width:400px) {
  .yearContainer-margin {
    margin-right: 0.5rem;
  }

  .year-dropdown {
    padding-left: 1rem;
  }
}

@media screen and (max-width:1510px) {
  .breadcrumb {
    left: 10%;
  }
}

@media screen and (max-width: 640px) {
  .breadcrumb {
    left: 16px;
    top: 125px;
    font-size: 14px;
  }
}
</style>