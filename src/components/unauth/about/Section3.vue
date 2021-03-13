<template>
  <div class="relative flex w-full mx-0 overflow-hidden rounded-lg">
    <g-image
      src="@/assets/img/unauth/about/section3bg.svg"
      class="object-cover w-full"
    />

    <div class="absolute flex items-center justify-between w-full h-full px-20">
      <div class="px-10 py-8 bg-fountain-blue-500 about_byte_bg">
        <h1 class="about_byte_header">About ITECH</h1>
        <hr class="mb-5 border-none about_byte_hr" />
        <p class="about_byte_description">
          ITECH, or the Information Technology Entrepreneurship Community Hub,
          is a learning platform made for the members of BYTE, the home
          organization of BS Information Technology Entrepreneurs students at
          the Ateneo de Manila University.
        </p>
      </div>
      <g-image src="@/assets/img/unauth/about/section3bytelogo.svg" class="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About-Section3",
};
</script>

<style scoped>
.about_byte_bg {
  width: 584px;
  height: 225px;
  background: #f5a64a;
  box-shadow: 0px 4px 4px rgba(87, 87, 84, 0.1);
  border-radius: 10px;
}

.about_byte_header {
  font-family: Neue Machina;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #ffffff;
}

.about_byte_hr {
  width: 256px;
  height: 8px;
  background: #fedf68;
  border-radius: 20px;
}

.about_byte_description {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
}
</style>