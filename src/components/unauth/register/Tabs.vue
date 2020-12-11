<template lang="html">
<section >
  <Tab class="flex items-center justify-center h-screen">
    <div><g-link to="/"><button class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></g-link></div>
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img :src="require('@/assets/img/unauth/register/Tab1.svg')" class="py-6 mx-auto"/>
      </div>

      <div class="w-full mt-24 md:w-1/2">
        <h1 class="form_header font-neuemachina">Hi! I am Bit Bot 3,</h1>
        <h1 class="mb-10 form_text font-objectivity">but you can call me BB3! I’d like to know your name!</h1>

        <div class="form_inputs">
          <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="username" type="text" placeholder="Kianna Zalameda"/>
        </div>

        <button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>That's Me!</button>
      </div>
    </div>
  </Tab>

  <Tab class="flex items-center justify-center h-screen">
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    
    <div class="flex w-3/4">
      <div class="w-full text-center">
        <h1 class="form_header font-neuemachina" style="margin-top:-120px">Hi! I am Bit Bot 3,</h1>
        <h1 class="mb-10 form_text font-objectivity">but you can call me BB3! I’d like to know your name!</h1>
        <img :src="require('@/assets/img/unauth/register/Tab2.svg')" class="py-6 mx-auto"/>
        <button class="px-16 py-4 form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>That's Cool!</button>
      </div>    
    </div>
  </Tab>

    <Tab class="flex items-center justify-center h-screen">
      <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img :src="require('@/assets/img/unauth/register/Tab3.svg')" class="py-6 mx-auto"/>
      </div>

      <div class="w-full mt-24 md:w-1/2">
        <h1 class="form_header font-neuemachina">Okay! But first,</h1>
        <h1 class="mb-10 form_text font-objectivity">May I know your OBF email? </h1>

        <div class="form_inputs">
          <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="username" type="text" placeholder="kianna.zalameda@obf.ateneo.edu"/>
        </div>

        <button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>That's It!</button>
      </div>
    </div>
  </Tab>

    <Tab class="flex items-center justify-center h-screen">
      <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    
    <div class="flex w-3/4">
      <div class="w-full text-center">
        <h1 class="form_header font-neuemachina" style="margin-top:-120px">Thanks!</h1>
        <h1 class="mb-10 form_text font-objectivity">We’ll need that to keep track of all your progress, favorite finds, and your points whenever you finish a topic</h1>
        <img :src="require('@/assets/img/unauth/register/Tab4.svg')" class="py-6 mx-auto"/>
        <button class="px-16 py-4 form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>That's Cool!</button>
      </div>    
    </div>
  </Tab>

    <Tab class="flex items-center justify-center h-screen">
      <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img :src="require('@/assets/img/unauth/register/Tab5.svg')" class="py-6 mx-auto"/>
      </div>

      <div class="w-full mt-24 md:w-1/2">
        <h1 class="form_header font-neuemachina">Now, an important note</h1>
        <h1 class="mb-10 form_text font-objectivity">let’s create a top secret password and dont forget to confirm!</h1>

        <div class="form_inputs">
          <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="password" type="password" placeholder="password"/>
          <input class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker" id="confirm_password" type="password" placeholder="confirm password"/>
        </div>

        <button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>Secret Enough!</button>
      </div>
    </div>
  </Tab>

  <Tab class="flex items-center justify-center h-screen">
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    
    <div class="flex w-3/4">
      <div class="w-full text-center">
        <h1 class="form_header font-neuemachina" style="margin-top:-120px">IT’S JUST FOR YOU!</h1>
        <h1 class="mb-10 form_text font-objectivity">ITECH is only for BYTE members and ITE students. This is one of the places BYTE builds young tech entrepreneurs</h1>
        <img :src="require('@/assets/img/unauth/register/Tab6.svg')" class="py-6 mx-auto"/>
        <button class="px-16 py-4 form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>That's Cool!</button>
      </div>    
    </div>
  </Tab>

  <Tab class="flex items-center justify-center h-screen">
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img :src="require('@/assets/img/unauth/register/Tab7.svg')" class="py-6 mx-auto"/>
      </div>

      <div class="w-full mt-24 md:w-1/2">
        <h1 class="form_header font-neuemachina">Just curious...</h1>
        <h1 class="mb-10 form_text font-objectivity">BYTE is filled with people of different background so what is your year and course? </h1>

        <div class="form_inputs">
          <input class="w-1/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="password" type="text" placeholder="2"/>
          <input class="w-3/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="confirm_password" type="text" placeholder="Information Technology"/>
        </div>

        <button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>Secret Enough!</button>
      </div>
    </div>
  </Tab>



  <Tab class="flex items-center justify-center h-screen">
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img :src="require('@/assets/img/unauth/register/Tab8.svg')" class="py-6 mx-auto"/>
      </div>

      <div class="w-full mt-24 md:w-1/2">
        <h1 class="form_header font-neuemachina">We are almost done!</h1>
        <h1 class="mb-10 form_text font-objectivity">I wanna know what time you want to get reminders to study! </h1>

        <div class="form_inputs">
          <input class="w-1/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="time" type="text" placeholder="00:00"/>
          <input class="w-3/4 px-8 py-4 mb-10 border rounded-md text-grey-darker" id="ampm" type="text" placeholder="AM"/>
        </div>

        <button class="px-16 py-4 float-right form_button uppercase font-objectivity ..." @click='selectTab(selectedIndex+1)'>Perfect!</button>
      </div>
    </div>
  </Tab>

    <Tab class="flex items-center justify-center h-screen">
      <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    <div><button @click='selectTab(selectedIndex-1)' class="float-left" style="position: absolute; left:150px; top:150px; font-size:40px"><</button></div>
    
    <div class="flex w-3/4">
      <div class="w-full text-center">
        <h1 class="form_header font-neuemachina" style="margin-top:-120px">We are finally done!</h1>
        <h1 class="mb-10 form_text font-objectivity">Now, explore ITECH, see what you love and watch out for new topics! Beep Boop friend.</h1>
        <img :src="require('@/assets/img/unauth/register/Tab9.svg')" class="py-6 mx-auto"/>
        <button class="px-16 py-4 form_button uppercase font-objectivity ..." >Let's Start!</button>
      </div>    
    </div>
  </Tab>

</section>
</template>

<script>
import Tab from "./Tab.vue";
export default {
  components: {
    Tab,
  },
  data() {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: [], // all of the tabs
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