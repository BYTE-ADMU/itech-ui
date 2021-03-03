<template>
  <div
    class="grid items-center w-screen grid-cols-1 px-8 py-32 mx-auto lg:gap-16 lg:grid-cols-2 sm:px-12 lg:px-16 lg:container"
  >
    <g-image
      :src="require('@/assets/img/unauth/index/section2-botWelcome.svg')"
      class="hidden w-full mx-auto lg:block"
    />

    <div class="w-full">
      <div>
        <h1 class="mb-4 text-5xl lg:text-4xl font-neuemachina">
          What is ITECH?
        </h1>
        <h1
          class="mb-8 text-4xl lg:text-lg xl:text-2xl 2xl:text-2xl font-objectivity"
        >
          ITECH is BYTE’s first ever community hub made for BYTE members to be
          able to hone certain skills. In this learning platform, you will see
          articles and interviews that showcase the 3 H’s一Hacker, Hipster, and
          Hustler.
        </h1>
      </div>

      <div>
        <g-link
          to="/about/"
          class="float-left px-8 py-3 mx-auto mb-8 text-4xl lg:text-2xl md:float-none form_button font-objectivity"
        >
          Learn More
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "unauth-index-section2",
};
</script>
