<template>
  <div class="w-screen h-screen meet-bg relative">
    <g-image src="../../../assets/img/unauth/meetTheTeam/top-confetti.png" class="absolute w-screen top-confetti z-0"/>
    <g-image src="../../../assets/img/unauth/meetTheTeam/bottom-confetti.png" class="absolute w-screen bottom-confetti z-0"/>

    <h1 class="font-neuemachina text-white font-extrabold text-5xl text-center px-8 z-20 relative">Meet the Team</h1>
  </div>
</template>

<script>
export default {
  name: "coverMobile",
}
</script>

<style>
.meet-bg {
  background: #64C0C1;
}

.top-confetti {
  top: 0;
}

.bottom-confetti {
  bottom: 0;
}
</style>