<template>
  <div class="overflow-hidden">
    <!-- START: ROW 1 -->

    <div
      class="grid grid-cols-1 gap-10 px-3 my-10 overflow-hidden md:my-20 md:grid-cols-2 md:gap-5"
    >
      <div class="flex items-center w-full">
        <g-image
          class="mx-auto"
          src="@/assets/img/unauth/about/section4-pic1.png"
        />
      </div>

      <div class="flex items-center">
        <p class="text-left byte_description md:text-center">
          We strive to help our members develop technological skills and
          entrepreneurial principles in an inclusive, fun and welcoming
          environment, and to promote tech entrepreneurship inside and outside
          of the Ateneo De Manila University.
        </p>
      </div>
    </div>
    <!-- END: ROW 1 -->

    <!-- START: ROW 2 -->
    <p
      class="w-full px-3 mb-10 text-left md:mb-20 byte_description md:text-center"
    >
      BYTE envisions itself to be a technological and entrepreneurial network
      spearheaded by existing and potential catalysts for change.
    </p>
    <!-- END: ROW 2 -->

    <g-image class="w-full" src="@/assets/img/unauth/about/section4-pic2.png" />
  </div>
</template>

<script>
export default {
  name: "About-Section4",
};
</script>

<style scoped>
.byte_description {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 25px;
  color: #151316;
}

@media (max-width: 640px) {
  .byte_description {
    font-size: 14px;
    line-height: 22px;
  }
}
</style>