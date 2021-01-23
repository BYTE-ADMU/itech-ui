<template>
  <section class="flex items-center justify-center h-screen">
    <div class="flex w-3/4">
      <div class="w-full text-center md:w-1/2">
        <img
          :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
          class="py-6 mx-auto"
        />
      </div>
      <div class="w-full text-center md:w-1/2">
        <div class="py-40">
          <h1 class="font-objectivity index_text">Hello! Welcome to</h1>
          <h1 class="font-neuemachina index_header">ITECH</h1>

          <g-link to="/login/"
            ><button
              class="font-objectivity rounded-md index_button uppercase ..."
            >
              Get Started
            </button>
          </g-link>
          <a
            class="text-lg font-objectivity nav__link"
            href="https://tinyurl.com/ITECHPreRegistrationForm"
            target="_blank"
          >
            <h1 class="mt-4 index_subbutton">
              Don't have credentials yet?<strong> Click</strong> here
            </h1>
          </a>
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
.index_text {
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
}

.index_header {
  font-style: normal;
  font-weight: 900;
  font-size: 110px;
}

.index_button {
  width: 413px;
  height: 40px;
  left: 847px;
  top: 458px;
  background: #64c0c1;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #f9f7f2;
}

.index_subbutton {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #64c0c1;
  text-align: center;
}
</style>






