<template>
  <div>
    <!-- START: ROW 1 -->

    <div class="grid grid-cols-2 gap-5 my-20 overflow-hidden">
      <div style="max-height: 360px">
        <div class="ml-20">
          <g-image
            class="relative child1"
            src="@/assets/img/unauth/about/section4-pic1.png"
          />
          <g-image
            class="relative child2"
            src="@/assets/img/unauth/about/section4-pic2.png"
          />
          <g-image
            class="relative child3"
            src="@/assets/img/unauth/about/section4-pic3.png"
          />
          <g-image
            class="relative child4"
            src="@/assets/img/unauth/about/section4-pic4.png"
          />
        </div>
      </div>

      <div class="flex items-center">
        <p class="byte_description">
          We strive to help our members develop technological skills and
          entrepreneurial principles in an inclusive, fun and welcoming
          environment, and to promote tech entrepreneurship inside and outside
          of the Ateneo De Manila University.
        </p>
      </div>
    </div>
    <!-- END: ROW 1 -->

    <!-- START: ROW 2 -->
    <p class="w-full mb-20 byte_description">
      BYTE envisions itself to be a technological and entrepreneurial network
      spearheaded by existing and potential catalysts for change.
    </p>
    <!-- END: ROW 2 -->

    <g-image class="w-full" src="@/assets/img/unauth/about/section4-pic5.png" />
  </div>
</template>

<script>
export default {
  name: "About-Section4",
};
</script>

<style scoped>
.child1 {
  left: 0px;
  top: 0px;
  z-index: 0;
}

.child2 {
  left: 220px;
  top: -100px;
  z-index: 1;
}

.child3 {
  left: 0px;
  top: -130px;
  z-index: 2;
}

.child4 {
  left: 220px;
  top: -230px;
  z-index: 3;
}

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