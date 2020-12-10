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

        <div class="w-full mt-10 md:w-1/2">
          <h1 class="form_header font-neuemachina">Beep Boop!</h1>
          <h1 class="mb-10 form_text font-objectivity">
            Glad you're back! Kindly place your info so we can get going!
          </h1>

          <div class="form_inputs">
            <input
              class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker"
              id="username"
              type="text"
              placeholder="email"
            />
            <input
              class="w-full px-8 py-4 mb-3 mb-6 border rounded-md border-red text-grey-darker"
              id="password"
              type="password"
              placeholder="password"
            />
          </div>

          <div class="float-right">
            <g-link
              class="text-lg text-right font-objectivity nav__link"
              to="/forgotpassword/"
            >
              <h1 class="my-4 subbutton" style="color: #c0c0c0">
                forgot password?
              </h1>
            </g-link>

            <button
              class="px-16 py-4 form_button uppercase font-objectivity ..."
            >
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

  <script>
export default {
  name: "login",
  metaInfo: {
    title: "Login",
  },
};
</script>
