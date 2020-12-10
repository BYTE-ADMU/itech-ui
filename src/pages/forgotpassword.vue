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
          <h1 class="form_header font-neuemachina">Coming right up!</h1>
          <h1 class="mb-10 form_text font-objectivity">
            BB3 got your back! All you have to do is fill up your new password
            and confirm to get started
          </h1>

          <div class="form_inputs">
            <input
              class="w-full px-8 py-4 mb-4 border rounded-md text-grey-darker"
              id="old_password"
              type="paddword"
              placeholder="old password"
            />
            <input
              class="w-full px-8 py-4 mb-3 mb-6 border rounded-md border-red text-grey-darker"
              id="new_password"
              type="password"
              placeholder="new password"
            />
          </div>

          <button
            class="px-16 py-4 float-right form_button uppercase font-objectivity ..."
          >
            Ready!
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
};
</script>

