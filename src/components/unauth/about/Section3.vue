<template>
  <div class="overflow-hidden">
    <!-- START: MOBILE VERSION -->
    <div class="items-center justify-between block md:hidden">
      <div class="px-4 py-8" style="background-color: #f5a64a">
        <g-image
          src="@/assets/img/unauth/about/section3bytelogo.svg"
          class="byte_logo"
        />
        <h1 class="mt-6 about_byte_header">About BYTE</h1>
        <hr class="mb-5 border-none about_byte_hr" />
        <p class="about_byte_description">
          BYTE, the home organization for B.S. Information Technology
          Entrepreneurship course, is an independent organization under LIONS.
        </p>
      </div>
    </div>
    <!-- END: MOBILE VERSION -->

    <!-- START: DESKTOP VERSION -->
    <div class="hidden md:block">
      <div class="relative flex w-full mx-0 overflow-hidden rounded-lg">
        <g-image
          src="@/assets/img/unauth/about/section3bg.svg"
          class="object-cover w-full"
        />

        <div
          class="absolute flex items-center justify-between w-full h-full px-20"
        >
          <div class="px-10 py-8 about_byte_bg">
            <h1 class="about_byte_header">About BYTE</h1>
            <hr class="mb-5 border-none about_byte_hr" />
            <p class="about_byte_description">
              BYTE, the home organization for B.S. Information Technology
              Entrepreneurship course, is an independent organization under
              LIONS.
            </p>
          </div>
          <g-image
            src="@/assets/img/unauth/about/section3bytelogo.svg"
            class="byte_logo"
          />
        </div>
      </div>
    </div>
    <!-- END: DESKTOP VERSION -->
  </div>
</template>

<script>
export default {
  name: "About-Section3",
};
</script>

<style scoped>
.about_byte_bg {
  width: auto;
  height: auto;
  background: #f5a64a;
  box-shadow: 0px 4px 4px rgba(87, 87, 84, 0.1);
  border-radius: 10px;
}

.about_byte_header {
  font-family: Neue Machina;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
}

.about_byte_hr {
  width: 154px;
  height: 8px;
  background: #fedf68;
  border-radius: 20px;
}

.about_byte_description {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
}

.byte_logo {
  width: 66px;
  height: 66px;
  right: 4%;
  position: absolute;
}

@media (min-width: 768px) {
  .byte_logo {
    position: static;
    width: 200px;
    height: 200px;
    margin-left: 20px;
  }

  /* .about_byte_header {
    font-size: 36px;
  }

  .about_byte_hr {
    width: 256px;
  }

  .about_byte_description {
    font-size: 16px;
    line-height: 25px;
  } */
}

@media (min-width: 1024px) {
  .about_byte_bg {
    width: 584px;
    height: 225px;
  }

  .byte_logo {
    width: 259px;
    height: 259px;
    margin: 0px;
  }

  .about_byte_header {
    font-size: 36px;
  }

  .about_byte_hr {
    width: 256px;
  }

  .about_byte_description {
    font-size: 16px;
    line-height: 25px;
  }
}
</style>





