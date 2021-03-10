<template>

  <div class="overflow-hidden"
    style="background: linear-gradient(180deg, #6b83ff 53.75%, #b8c3fd 91.98%) "
  >
    <div
      class="flex flex-col w-screen pb-32 mx-auto align-middle lg-pb-0 lg:h-screen 2xl:h-auto 2xl:container lg:pb-0"
    >
      <div
        class="grid items-center grid-cols-1 px-0 lg:gap-8 lg:grid-cols-2 lg:px-0"
      >
        <g-image

          :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
          class="py-6 mx-auto"
        />
      </div>
      <div class="w-full text-center md:w-1/2">
        <div class="py-40">
          <h1 class="font-objectivity index_text">Hello! Welcome to</h1>
          <h1 class="font-neuemachina index_header">ITECH</h1>


        <div class="mx-auto">
          <h1 class="text-center text-white hello-welcome-to">
            Hello! Welcome to
          </h1>
          <h1 class="text-center text-white md:mx-auto itech">ITECH</h1>

          <g-link to="/register/">
            <button
              class="w-full px-8 py-2 mx-auto text-xl uppercase sm:text-4xl lg:text-2xl form_button font-objectivity"

            >
              Get Started
            </button>
          </g-link>

          <g-link class="text-center font-objectivity nav__link" to="/login/">
            <button
              class="hidden mx-auto mt-4 text-lg text-white lg:block"
              style="font-weight: medium"
            >
              or Log In here
            </button>
          </g-link>

          <!-- <a
            class="text-lg text-center font-objectivity nav__link"

            href="https://tinyurl.com/ITECHPreRegistrationForm"
            target="_blank"
          >
            <h1 class="mt-4 index_subbutton">
              Don't have credentials yet?<strong> Click</strong> here
            </h1>
          </a> -->
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