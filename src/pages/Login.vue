<template>
  <Layout>
    <section class="flex items-center justify-center h-screen">


      <div class="w-3/4 flex ">

        <div class="w-full md:w-1/2 text-center">
          <img :src="require('@/assets/img/index-unauth/section1-botWelcome.svg')" class="py-6 mx-auto" />
        </div>
        <div class="w-full md:w-1/2">
          <h1 class="hello">Welcome back! </h1>
          <h1 class="itech">Please fill up your deets to get started</h1>

            <div class="mb-4">

              <input class="border rounded-full w-full py-2 px-8 text-grey-darker" id="username" type="text" placeholder="Email">
            </div>
            <div class="mb-6">

              <input class=" border border-red rounded-full  w-full py-2 px-8 text-grey-darker mb-3" id="password" type="password" placeholder="Password">
            </div>

                    <button class="right-0 getStarted uppercase ...">Login</button>
          </div>


      </div>

  </section>
</Layout>
  </template>

  <script>
  export default {
    metaInfo: {
      title: 'Login'
    }
  }
  </script>

  <style scoped>
    .hello {
      font-family: Objectivity;
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
    }

    .itech {
      font-family: Neue Machina;
      font-style: normal;
      font-weight: 900;
      font-size: 70px;
    }

    .getStarted {
      width:165px;
      height: 40px;
      left: 847px;
      top: 458px;
      float: right;
      background: #64C0C1;
      border-radius: 50px;
      font-family: Objectivity;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      letter-spacing: 0.2em;
      color: #F9F7F2;
    }
  </style>
