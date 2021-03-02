<template>
  <div
    class="grid items-center w-screen grid-cols-1 px-8 py-32 md:h-screen md:gap-16 md:grid-cols-2 sm:px-12 lg:px-16"
  >
    <g-image
      :src="require('@/assets/img/unauth/index/section2-botWelcome.svg')"
      class="hidden w-full mx-auto md:block"
    />

    <div class="w-full">
      <div>
        <h1 class="mb-4 text-3xl lg:text-4xl font-neuemachina">
          What is ITECH?
        </h1>
        <h1
          class="mb-8 leading-8 md:text-lg lg:text-xl xl:text-2xl font-objectivity"
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
          class="block mx-auto float-left px-8 py-3 form_button font-objectivity ..."
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
