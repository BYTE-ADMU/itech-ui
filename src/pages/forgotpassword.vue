<template>
  <Layout>
    <section class="h-screen" style="overflow-y: hidden">
      <div class="w-full" style="position: absolute; top: 50%">
        <div class="flex items-center justify-center">
          <div class="flex w-3/4" style="margin-top: -140px">
            <div class="w-full mr-20 text-center md:w-1/2">
              <img
                :src="require('@/assets/img/unauth/forgotpassword/image.svg')"
                class="py-6 mx-auto"
              />
            </div>

            <div class="w-full mt-10 md:w-1/2">
              <h1 class="form_header font-neuemachina">Coming right up!</h1>
              <h1 class="mb-10 form_text font-objectivity">
                BB3 got your back! All you have to do is fill up your new
                password and confirm to get started
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
        </div>
      </div>
      <img
        :src="require('@/assets/img/unauth/forgotpassword/waves.svg')"
        class="w-full"
        style="position: absolute"
      />
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

