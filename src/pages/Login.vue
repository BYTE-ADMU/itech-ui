<template>
  <Layout>
    <section>
      <!-- <div class="w-full flex">
        <div class="flex">
          <div class="flex w-4/5">
            <div class="w-full text-center md:w-1/2"></div>

            <img
            :src="require('@/assets/img/unauth/login/Login-Illustration.svg')"
            class="w-full"
            />  

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
                <button
                  @click="login"
                  :disabled="!isFormComplete"
                  class="px-16 py-4 form_button uppercase font-objectivity ..."
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="grid md:flex w-screen p-16 items-center">
        <img
            :src="require('@/assets/img/unauth/login/Login-Illustration.svg')"
            class="ml-6 md:ml-0 md:w-1/2 lg:w-3/5"
          />  

          <div class="md:w-2/5 lg:mr-16">
            <div>
              <h1 class="text-3xl lg:text-4xl font-neuemachina">Beep Boop!</h1>
              <h1 class="mb-8 md:text-lg lg:text-xl xl:text-2xl font-objectivity">
                Welcome back ITECH-er! Are you ready to learn more about Hacker.
                Hipster, and Hustler?
              </h1>
            </div>

            <div class="text-md sm:text-xl md:text-lg lg:text-xl xl:text-2xl">
              <input
                  class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker"
                  id="email"
                  type="text"
                  placeholder="email"
                  v-model="user.email"
                />
                <input
                  class="w-full px-8 py-4 border rounded-md border-red text-grey-darker"
                  id="password"
                  type="password"
                  placeholder="password"
                  v-model="user.password"
                />
            </div>

            <div>
              <div class="flex justify-between">
              <g-link
                class="text-xs sm:text-sm font-objectivity nav__link"
                to="/register/">
                <h1 class="my-4 subbutton" style="color: #c0c0c0">
                  Don't have an account? Register here!
                </h1>
              </g-link>

              <g-link
                class="text-xs sm:text-sm text-right font-objectivity nav__link"
                to="/forgotpassword/"
              >
                <h1 class="my-4 subbutton" style="color: #c0c0c0">
                  forgot password?
                </h1>
              </g-link>
              </div>
                <button
                  @click="login"
                  :disabled="!isFormComplete"
                  class="block mx-auto md:float-right px-8 py-3 form_button uppercase font-objectivity ..."
                >
                  Submit
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
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      await this.$store.dispatch('login', this.user);
      if (this.$store.state.isAuthenticated) {
        this.$router.replace('/dashboard');
      }
    }
  },
  computed: {
    isFormComplete() {
      return this.user.email && this.user.password;
    },
  },
};
</script>
