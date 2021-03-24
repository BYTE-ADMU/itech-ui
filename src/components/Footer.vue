<template>
  <footer class="bottom-0 px-10 text-white sm:px-20 bg-hacker-primary">
    <div class="lg:grid lg:grid-cols-3 lg:gap-3 py-20 ...">
      <!-- START: FIRST COLUMN -->
      <div class="flex justify-center w-full">
        <!-- <div class="w-3/5 sm:w-1/4 lg:w-1/3">
          <img :src="require('@/assets/img/BB3-Primary.svg')" class="w-3/5 sm:w-4/5 lg:w-11/12" />
        </div> -->
        <img :src="require('@/assets/img/BB3-Primary.svg')" class="h-32 pr-3" />
        <div class="lg:w-2/3">
          <p class="itechFooter">ITECH</p>
          <div style="margin-top: -10px" class="flex">
            <a href="https://twitter.com/byteadmu" target="_blank" class="mx-2"
              ><img :src="require('@/assets/img/icons/Twitter.svg')"
            /></a>
            <a
              href="https://www.facebook.com/byteadmu/"
              target="_blank"
              class="mx-2"
              ><img :src="require('@/assets/img/icons/Facebook.svg')"
            /></a>
            <a
              href="https://www.instagram.com/byteadmu/"
              target="_blank"
              class="mx-2"
              ><img :src="require('@/assets/img/icons/Instagram.svg')"
            /></a>
            <a
              href="https://www.linkedin.com/company/byteadmu/"
              target="_blank"
              class="mx-2"
              ><img :src="require('@/assets/img/icons/LinkedIn.svg')"
            /></a>
          </div>
        </div>
      </div>
      <!-- END: FIRST COLUMN -->

      <!-- START: SECOND COLUMN -->
      <div
        class="mt-10 lg:mt-0 lg:ml-12 grid md:grid-cols-2 justify-items-center ..."
      >
        <!-- START: FIRST INNER COLUMN -->
        <div class="pb-6 text-center lg:mb-0 md:text-justify">
          <h5 class="mb-6 font-bold">
            Home
            <hr class="w-10 mt-2 ml-8 md:ml-0" />
          </h5>
          <ul class="mb-4">
            <li>
              <g-link to="/about" class="hover:underline">About</g-link>
            </li>
            <li class="mt-2">
              <a href="/meet-the-team/" class="hover:underline">Meet the Team</a>
            </li>
          </ul>
        </div>
        <!-- END: FIRST INNER COLUMN -->

        <!-- START: SECOND INNER COLUMN -->
        <div class="text-center md:text-justify">
          <h5 class="mb-6 font-bold">
            The 3Hs
            <hr class="w-10 mt-2 ml-3 md:ml-0" />
          </h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline"
                ><i class="fab fa-hacker-news-square"></i
              ></a>
            </li>
            <li class="mt-2">
              <g-link to="/categories/hacker" class="hover:underline"
                >Hacker</g-link
              >
            </li>
            <li class="mt-2">
              <g-link to="/categories/hipster" class="hover:underline"
                >Hipster</g-link
              >
            </li>
            <li class="mt-2">
              <g-link to="/categories/hustler" class="hover:underline"
                >Hustler</g-link
              >
            </li>
          </ul>
        </div>
        <!-- END: SECOND INNER COLUMN -->
      </div>
      <!-- END: SECOND COLUMN -->

      <!-- START: THIRD COLUMN -->
      <div class="px-8 py-6 pb-8 mt-10 lg:mt-0 thirdColumnCard">
        <p class="my-2 thirdColumnHeader">Share your thoughts</p>
        <p class="mt-2 mb-5">
          Have any thoughts on ITECH? Share your suggestions, comments, or
          reports to help the ITECH team tweak, pivot, and polish the platform
          to fit all your needs! Thank you for helping ITECH grow ✨
        </p>
        <!-- <a
          class="sm:flex justify-center m-4 sm:m-0 pt-2 w-32 sm:w-48 getStarted ..."
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSOI0HZtXYGRCu9Kfybq66BpYdHUCn2vQZTLlXAjKCqYXngQ/viewform"
        >
          Send Feedback
        </a> -->
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSOI0HZtXYGRCu9Kfybq66BpYdHUCn2vQZTLlXAjKCqYXngQ/viewform"
          target="_blank"
        >
          <button class="justify-center py-2 px-8 getStarted ...">
            Send Feedback
          </button>
        </a>
      </div>
      <!-- END: THIRD COLUMN -->
    </div>

    <div class="pb-6">
      <div class="items-center justify-center border-t">
        <p class="my-6 tracking-wide text-center font-extralight">
          © 2020 ITECH. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.thirdColumnCard {
  background: #6b83ff;
  border-radius: 8px;
}

.thirdColumnHeader {
  font-family: Neue Machina;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 34.74px;
}

.getStarted {
  background: #ffffff;
  border-radius: 50px;
  font-family: Objectivity;
  font-weight: 700;
  font-size: 16px;
  color: #6b83ff;
  border: 3px solid #ffffff;
  transition: all ease-in-out 200ms;
  outline: none;
}

.getStarted:hover {
  color: #ffffff;
  background-color: #6b83ff;
}

.getStarted:active {
  transform: translateY(1px);
  box-shadow: inset -7px 7px 30px rgba(0, 0, 0, 0.25);
}

.itechFooter {
  margin-top: -20px;
  font-size: 72px;
  font-family: objectivity;
  font-weight: bold;
}
</style>


