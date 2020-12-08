<template>
  <Layout>
    <section class="flex items-center justify-center h-screen">
      <div class="flex w-3/4">
        <div class="w-full text-center md:w-1/2">
          <img
            :src="require('@/assets/img/unauth/index/section1-botWelcome.svg')"
            class="py-6 mx-auto"
          />
        </div>

        <div class="w-full mt-20 md:w-1/2">
          <h1 class="form_header font-neuemachina">Hi! I am Bit Bot 3,</h1>
          <h1 class="mb-10 form_text font-objectivity">
            but you can call me BB3! I’d like to know your name!
          </h1>

          <div class="form_inputs">
            <input
              class="w-full px-8 py-4 mb-10 border rounded-md text-grey-darker"
              id="username"
              type="text"
              placeholder="Kianna Zalameda"
            />
          </div>

          <button
            class="px-16 py-4 float-right form_button uppercase font-objectivity ..."
          >
            Let's Go
          </button>
        </div>
      </div>
    </section>
  </Layout>
</template>

  <script>
export default {
  name: "register",
  metaInfo: {
    title: "Register",
  },
};
</script>