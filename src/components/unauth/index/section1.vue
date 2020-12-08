<template>
  <section class="flex items-center justify-center h-screen">
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img
          :src="require('@/assets/img/index-unauth/section1-botWelcome.svg')"
          class="py-6 mx-auto"
        />
      </div>
      <div class="w-full text-center md:w-1/2">
        <div class="py-40">
          <h1 class="hello">Hello! Welcome to</h1>
          <h1 class="itech">ITECH</h1>
          <a href="#section2"
            ><button class="getStarted uppercase ...">Get Started</button></a
          >
          <g-link class="text-lg font-bold nav__link" to="/login/">
            <h1 class="mt-4 orLogIn">or <strong>Log In</strong> here</h1>
          </g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "unauth-index-section1",
});
</script>

<style scoped>
.hello {
  font-family: Objectivity;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
}

.itech {
  font-family: Neue Machina;
  font-style: normal;
  font-weight: 900;
  font-size: 110px;
}

.getStarted {
  width: 413px;
  height: 40px;
  left: 847px;
  top: 458px;
  background: #64c0c1;
  border-radius: 50px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #f9f7f2;
}

.orLogIn {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #64c0c1;
  text-align: center;
}
</style>
