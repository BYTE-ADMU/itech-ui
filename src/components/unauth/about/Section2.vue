<template>
  <div class="py-20">
    <p class="mb-20 byte_description">
      Members can find introductory courses about
      <br />
      topics that fall under the:
    </p>

    <div class="grid grid-cols-3 gap-5">
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
}
</style>