<template>
  <section id="section2">
    <Slides :slides="slides" />
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
</style>
