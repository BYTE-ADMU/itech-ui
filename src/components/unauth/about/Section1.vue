<template>
  <div class="relative flex w-full mx-0 overflow-hidden rounded-lg">
    <g-image
      src="@/assets/img/unauth/about/section1bg.svg"
      class="object-cover w-full"
    />

    <div
      class="absolute flex flex-row-reverse items-center justify-between w-full h-full px-20"
    >
      <g-image
        src="@/assets/img/bitbots/bbwhite.svg"
        class="absolute whitebb"
      />
      <div class="px-10 py-8 bg-fountain-blue-500 about_itech_bg">
        <h1 class="about_itech_header">About ITECH</h1>
        <hr class="mb-5 border-none about_itech_hr" />
        <p class="about_itech_description">
          ITECH, or the Information Technology Entrepreneurship Community Hub,
          is a learning platform made for the members of BYTE, the home
          organization of BS Information Technology Entrepreneurs students at
          the Ateneo de Manila University.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About-Section1",
};
</script>

<style scoped>
.about_itech_bg {
  width: 557px;
  height: 274px;
  background: #64c0c1;
  box-shadow: 0px 4px 4px rgba(87, 87, 84, 0.1);
  border-radius: 10px;
}

.about_itech_header {
  font-family: Neue Machina;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
}

.about_itech_hr {
  width: 256px;
  height: 8px;
  background: #3175ed;
  border-radius: 20px;
}

.about_itech_description {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
}

.whitebb {
  position: absolute;
  width: 116.51px;
  height: 118.99px;
  left: 86%;
  top: 15%;

  transform: rotate(19.3deg);
}
</style>