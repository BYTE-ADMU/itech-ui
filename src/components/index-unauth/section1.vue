<template>
<section class="flex items-center justify-center h-screen">


  <div class="w-3/4 flex ">
    <div class="w-full md:w-1/2 text-center">
      <img :src="require('@/assets/img/index-unauth/section1-botWelcome.svg')" class="py-6 mx-auto" />
    </div>
    <div class="w-full md:w-1/2 text-center">
      <div class="py-40">
        <h1 class="hello">Hello! Welcome to </h1>
        <h1 class="itech">ITECH</h1>
        <a href="#section2"><button class="getStarted uppercase ...">Get Started</button></a>
        <g-link class="nav__link text-lg font-bold" to="/login/">
          <h1 class="mt-4 orLogIn">or <strong>Log In</strong> here</h1>
        </g-link>
      </div>
    </div>

  </div>

</section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'index-unauth-section1',
});
</script>

<style scoped>
@font-face {
  font-family: Objectivity;
  src: url('../../assets/font/Objectivity-Medium.otf');
}
@font-face {
  font-family: Neue Machina;
  src: url('../../assets/font/NeueMachina-Ultrabold.woff');
}
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
  background: #64C0C1;
  border-radius: 50px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #F9F7F2;
}

.orLogIn {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #64C0C1;
  text-align: center;
}
</style>
