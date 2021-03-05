<template>
  <section class="flex items-center justify-center h-screen">
    <div class="flex w-3/4">
      <div class="w-full md:w-1/2">
        <div class="p-6 thirdColumnCard">
          <p class="my-2 header">Level up, Bits!</p>
          <p class="my-2 text">
            These articles will not only help you learn and grow your skills,
            but will also help you earn some points! Move on to the next level
            by obtaining 5000 points!
          </p>
        </div>
      </div>
      <div class="w-full text-center md:w-1/2">
        <img
          :src="require('@/assets/img/unauth/index/section3.svg')"
          class="py-6 mx-auto"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "unauth-index-section3",
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

.header {
  font-family: Neue Machina;
  font-weight: 800;
  font-size: 56px;
  color: #333333;
}

.text {
  font-size: 32px;
  color: #333333;
}
</style>
