<template>
  <Layout v-bind:class="{'no-scroll': !modalsClosed}">
    <!-- modals -->
    <loggingInModal id="loggingIn" class="z-50 hidden"/>
    <successfulLoginModal id="successModal" class="z-50 hidden"/>
    <!-- unsuccessful login modal -->
    <div id="unsuccessfulModal" class="h-screen w-screen fixed hidden modal-margin">
      <div class="bg-modal text-center table-cell align-middle">
        <div class="bg-white mx-auto border border-white rounded-xl py-16 relative modal-size">
          <button @click="closeModal()" class="w-full">
            <g-image
              :src="require('@/assets/img/unauth/close-modal-vector.svg')"
              class="absolute x-icon" style="right: 23px; top: 23px"/>
          </button>
          <h1 class="font-neuemachina px-4 text-xl sm:text-2xl md:text-4xl mb-12">
            Incorrect email or password.
          </h1>
          <button @click="closeModal()" class="font-bold form_button py-3 px-6">
            Try Again
          </button>
        </div>
      </div>
    </div>
    <!-- unsuccessful login modal end -->
    <!-- modals end -->
    <section id="page" class="z-0 no-scroll">
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
import loggingInModal from '../components/loggingInModal'
import successfulLoginModal from '../components/successfulLoginModal'

export default {
  name: "login",
  metaInfo: {
    title: "Login",
  },
  components: {
    successfulLoginModal,
    loggingInModal,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      modalsClosed: true,
    };
  },
  methods: {
    async login() {
      this.modalsClosed = false;
      const loggingIn = document.getElementById('loggingIn');
      loggingIn.classList.remove('hidden');
      await this.$store.dispatch("userStore/login", this.user);
      if (this.$store.state.userStore.isAuthenticated) {
        const success = document.getElementById('successModal');
        loggingIn.classList.add('hidden');
        success.classList.remove('hidden');
      } else {
        const unsuccessful = document.getElementById('unsuccessfulModal');
        loggingIn.classList.add('hidden');
        unsuccessful.classList.remove('hidden');
        unsuccessful.classList.add('table');
      }
    },
    closeModal() {
      this.modalsClosed = true;
      const unsuccessful = document.getElementById('unsuccessfulModal');
      unsuccessful.classList.remove('table');
      unsuccessful.classList.add('hidden');
    }
  },
  computed: {
    isFormComplete() {
      return this.user.email && this.user.password;
    },
  },
};
</script>
<style>
.no-scroll {
  max-height: 100vh;
  overflow: hidden;
}
</style>