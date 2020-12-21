<template>
  <Layout>
    <section class="h-screen" style="overflow: hidden">
      <div class="w-full" style="position: absolute; top: 50%">
        <div class="flex items-center justify-center">
          <div class="flex w-3/4" style="margin-top: -120px">
            <div class="w-full mr-20 text-center md:w-1/2"></div>

            <div class="w-full md:w-1/2">
              <h1 class="form_header font-neuemachina">Beep Boop!</h1>
              <h1 class="mb-10 form_text font-objectivity">
                Welcome back ITECH-er! Are you ready to learn more about Hacker.
                Hipster, and Hustler?
              </h1>

              <div class="form_inputs">
                <input
                  class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker"
                  id="email"
                  type="text"
                  placeholder="email"
                  v-model="user.email"
                />
                <input
                  class="w-full px-8 py-4 mb-3 mb-6 border rounded-md border-red text-grey-darker"
                  id="password"
                  type="password"
                  placeholder="password"
                  v-model="user.password"
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

                <g-link to="/dashboard">
                  <button
                    :disabled="!isFormComplete"
                    class="px-16 py-4 form_button uppercase font-objectivity ..."
                  >
                    Yes I Am
                  </button>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        :src="require('@/assets/img/unauth/login/waves.svg')"
        class="w-full"
        style="position: absolute"
      />
      <img
        :src="require('@/assets/img/unauth/login/loginBG.svg')"
        class="w-full"
      />
    </section>
  </Layout>
</template>

  <script>
export default {
  name: "login",
  metaInfo: {
    title: "Login",
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    isFormComplete() {
      return this.user.email && this.user.password;
    },
  },
};
</script>
