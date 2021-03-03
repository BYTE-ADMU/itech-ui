<template>
  <div
    style="background: linear-gradient(180deg, #6b83ff 53.75%, #b8c3fd 91.98%)"
  >
    <div
      class="flex flex-col w-screen pb-32 mx-auto align-middle lg-pb-0 lg:h-screen 2xl:h-auto 2xl:container lg:pb-0"
    >
      <div
        class="grid items-center grid-cols-1 px-0 lg:gap-8 lg:grid-cols-2 lg:px-0"
      >
        <g-image
          :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
          class="block w-full mx-auto lg:hidden"
        />

        <div class="mx-auto">
          <h1 class="text-center text-white hello-welcome-to">
            Hello! Welcome to
          </h1>
          <h1 class="text-center text-white md:mx-auto itech">ITECH</h1>

          <g-link to="/login/">
            <button
              class="w-full px-8 py-2 mx-auto text-xl uppercase sm:text-4xl lg:text-2xl form_button font-objectivity"
            >
              Get Started
            </button>
          </g-link>

          <a
            class="text-lg text-center font-objectivity nav__link"
            href="https://tinyurl.com/ITECHPreRegistrationForm"
            target="_blank"
          >
            <h1 class="hidden mx-auto mt-4 text-white lg:block">
              Don't have credentials yet?<strong> Click</strong> here
            </h1>
          </a>
        </div>
        <g-image
          :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
          class="hidden w-full mx-auto lg:block"
        />
      </div>
    </div>
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
.hello-welcome-to {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
}

.itech {
  font-family: Neue Machina;
  font-style: normal;
  font-weight: 800;
  font-size: 110px;
  line-height: 120px;
}

@media only screen and (max-width: 1024px) {
  .itech {
    font-size: 11rem;
    line-height: 11rem;
  }
  .hello-welcome-to {
    font-size: 4rem;
    line-height: 5rem;
  }
}

@media only screen and (max-width: 600px) {
  .itech {
    font-size: 6rem;
    line-height: 6rem;
  }
  .hello-welcome-to {
    font-size: 2rem;
    line-height: 5rem;
  }
}
</style>
</style>
