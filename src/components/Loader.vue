<template>
  <div
    class="fixed top-0 left-0 z-50 flex items-center justify-center block w-full h-full bg-white"
  >
    <!-- <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div> -->
    <div class="loader2">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
});
</script>

<style>
.loader {
  display: inline-block;
  font-size: 0px;
  padding: 0px;
}
.loader span {
  vertical-align: middle;
  border-radius: 100%;

  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 3px 2px;
  -webkit-animation: loader 0.8s linear infinite alternate;
  animation: loader 0.8s linear infinite alternate;
}
.loader span:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(100, 192, 193, 0.6);
}
.loader span:nth-child(2) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(100, 192, 193, 0.8);
}
.loader span:nth-child(3) {
  -webkit-animation-delay: -0.26666s;
  animation-delay: -0.26666s;
  background: rgba(100, 192, 193, 1);
}
.loader span:nth-child(4) {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
  background: rgba(100, 192, 193, 0.8);
}
.loader span:nth-child(5) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  background: rgba(100, 192, 193, 0.6);
}

@keyframes loader {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

.loader2 {
  width: 200px;
  height: 200px;
  display: inline-block;
  padding: 0px;
  text-align: left;
}
.loader2 span {
  position: absolute;
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: rgba(100, 192, 193, 1);
  -webkit-animation: loader2 1.5s linear infinite;
  animation: loader2 1.5s linear infinite;
}
.loader2 span:last-child {
  animation-delay: -0.9s;
  -webkit-animation-delay: -0.9s;
}
@keyframes loader2 {
  0% {
    transform: scale(0, 0);
    opacity: 0.8;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
@-webkit-keyframes loader2 {
  0% {
    -webkit-transform: scale(0, 0);
    opacity: 0.8;
  }
  100% {
    -webkit-transform: scale(1, 1);
    opacity: 0;
  }
}
</style>