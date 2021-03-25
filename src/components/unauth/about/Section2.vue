<template>
  <div class="py-20 overflow-hidden">
    <p class="px-5 mx-auto mb-20 byte_description">
      Members can find introductory courses about topics that fall under the:
    </p>

    <div class="grid grid-cols-1 gap-24 md:gap-5 md:grid-cols-3">
      <Track category="Hacker" />
      <Track category="Hipster" />
      <Track category="Hustler" />
    </div>
  </div>
</template>

<script>
import Track from "./Track";
export default {
  name: "About-Section2",

  components: {
    Track,
  },
};
</script>

<style scoped>
.byte_description {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 25px;
  text-align: center;
  color: #151316;
  max-width: 600px;
}

@media (max-width: 640px) {
  .byte_description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>