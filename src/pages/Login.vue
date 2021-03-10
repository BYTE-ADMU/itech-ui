<template>
  <Layout>
    <section>
      <div
        class="grid items-center w-screen px-4 py-8 md:flex sm:px-12 lg:px-16"
      >
        <img
          :src="require('@/assets/img/unauth/login/Login-Illustration.svg')"
          class="block w-3/4 mx-auto md:ml-0 md:w-1/2 lg:w-3/5"
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
                to="/register/"
              >
                <h1 class="my-4 subbutton" style="color: #c0c0c0">
                  Don't have an account? Register here!
                </h1>
              </g-link>

              <g-link
                class="text-xs text-right sm:text-sm font-objectivity nav__link"
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
      await this.$store.dispatch("userStore/login", this.user);
      if (this.$store.state.userStore.isAuthenticated) {
        this.$router.replace("/dashboard/");
        // alert("You have logged in!");
      }
    },
  },
  computed: {
    isFormComplete() {
      return this.user.email && this.user.password;
    },
  },
};
</script>
