<template>
  <div
    class="grid items-center w-screen min-h-screen grid-cols-1 px-0 pb-16 lg:gap-8 lg:grid-cols-2 md:px-32 lg:px-0"
    style="background: linear-gradient(180deg, #6b83ff 53.75%, #b8c3fd 91.98%)"
  >
    <g-image
      :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
      class="block w-full mx-auto lg:hidden"
    />

    <div class="mx-auto md:w-2/3">
      <h1
        class="mx-auto text-center text-white bg-red font-objectivity md:w-full index_text"
      >
        Hello! Welcome to
      </h1>
      <h1
        class="text-center text-white font-neuemachina md:mx-auto index_header"
      >
        ITECH
      </h1>

      <div>
        <g-link
          to="/login/"
          class="mb-8 block mx-auto uppercase md:w-full float-left md:float-none px-8 py-3 form_button font-objectivity ..."
        >
          Get Started
        </g-link>
        <a
          class="text-lg text-center font-objectivity nav__link"
          href="https://tinyurl.com/ITECHPreRegistrationForm"
          target="_blank"
        >
          <h1 class="hidden mx-auto mt-4 text-white md:block">
            Don't have credentials yet?<strong> Click</strong> here
          </h1>
        </a>
      </div>
    </div>
    <g-image
      :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
      class="hidden w-full mx-auto lg:block"
    />
  </div>
</template>

<script>
export default {
  name: "unauth-index-section2",
};
</script>


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
</style>