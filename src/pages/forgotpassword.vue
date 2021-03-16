<template>
  <Layout>
    <section>
      <div class="grid md:flex w-screen pt-0 pb-10 md:py-10 lg:pb-10 px-4 sm:px-12 lg:px-16 items-center">
        <img
          :src="require('@/assets/img/unauth/forgotpassword/ForgotPasswordIllustration.svg')"
          class="block mx-auto mb-16 md:ml-0 w-3/4 md:w-1/2 lg:w-3/5"
        />

        <div class="md:w-2/5 lg:mr-16">
          <div>
            <h1 class="text-3xl lg:text-4xl font-neuemachina">Coming right up!</h1>
            <h1 class="mb-8 md:text-lg lg:text-xl xl:text-2xl font-objectivity">
              BB3 got your back! All you have to do is fill up your new
              password and confirm to get started
            </h1>
          </div>

          <div class="text-md sm:text-xl md:text-lg lg:text-xl xl:text-2xl">
            <input
              class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker"
              id="old_password"
              type="paddword"
              placeholder="old password"
              v-model="user.oldPassword"
            />
            <input
              class="w-full px-8 py-4 mb-10 border rounded-md border-red text-grey-darker"
              id="new_password"
              type="password"
              placeholder="new password"
              v-model="user.newPassword"
            />
          </div>

          <button
            :disabled="!isFormComplete"
            class="block mx-auto md:float-right px-8 py-3 form_button uppercase font-objectivity ..."
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  </Layout>
</template>

  <script>
export default {
  name: "forgot_password",
  metaInfo: {
    title: "Forgot Password",
  },
  data() {
    return {
      user: {
        oldPassword: "",
        newPassword: "",
      },
    };
  },
  computed: {
    isFormComplete() {
      return this.user.oldPassword && this.user.newPassword;
    },
  },
};
</script>
