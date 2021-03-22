<template>
  <div class="w-screen h-screen meet-bg relative">
    <g-image src="@/assets/img/unauth/meetTheTeam/top-confetti.png" class="absolute w-screen top-confetti z-0" />
    <g-image src="@/assets/img/unauth/meetTheTeam/bottom-confetti.png" class="absolute w-screen bottom-confetti z-0" />

    <div class="table text-center w-screen h-screen">
      <h1 class="font-neuemachina text-white font-extrabold text-6xl z-20 table-cell align-middle relative px-16">Meet the Team</h1>
    </div>

    <g-image src="@/assets/img/unauth/meetTheTeam/BB3-2mobile.png" class="absolute" style="top:33%" />
    <g-image src="@/assets/img/unauth/meetTheTeam/BB3mobile.png" class="absolute" style="top:33%; right:0" />
    <g-image src="@/assets/img/unauth/meetTheTeam/BB3-3mobile.png" class="absolute" style="top:42%" />
    <g-image src="@/assets/img/unauth/meetTheTeam/BB3-1mobile.png" class="absolute" style="top:42%; right:0" />
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