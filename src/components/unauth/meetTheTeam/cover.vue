<template>
  <div class="meet w-screen relative">
    <h1 class="font-neuemachina text-white font-extrabold text-7xl text-center" style="line-height: 280px">Meet The Team</h1>
    <!-- left bitbots -->
    <div class="flex absolute left-bots">
      <g-image src="../../../assets/img/unauth/meetTheTeam/BB3.png"/>
      <g-image src="../../../assets/img/unauth/meetTheTeam/BB3-1.png"/>
    </div>
    <!-- right bitbots -->
    <div class="flex absolute right-bots">
      <g-image src="../../../assets/img/unauth/meetTheTeam/BB3-2.png"/>
      <g-image src="../../../assets/img/unauth/meetTheTeam/BB3-3.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "cover",
}
</script>

<style>
.meet{
  background: #64C0C1;
  height: 280px;
  background-image: url('../../../assets/img/unauth/meetTheTeam/meet-confetti.png');
  background-repeat: no-repeat;
  background-size: 100%;
}

.left-bots {
  bottom: 0;
  left: 90px;
}

.right-bots {
  bottom: 0;
  right: 90px;
}
</style>