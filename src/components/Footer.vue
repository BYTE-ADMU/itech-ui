<template>
  <footer class="bottom-0 px-32 text-white bg-hacker-primary">
    <div class="grid grid-cols-3 gap-2 py-32 ...">
      <!-- START: FIRST COLUMN -->
      <div class="flex" style="overflow: hidden">
        <div class="w-1/3">
          <img :src="require('@/assets/img/BB3-Primary.svg')" class="w-11/12" />
        </div>
        <div class="w-2/3">
          <p
            style="
              margin-top: -20px;
              font-size: 6rem;
              font-family: objectivity;
              font-weight: bold;
            "
          >
            ITECH
          </p>
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
      <!-- START: FIRST INNER COLUMN -->
      <div class="grid grid-cols-2 gap-2 ...">
        <div>
          <h5 class="mb-6 font-bold">
            Home
            <hr class="w-10 mt-3" />
          </h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline">Meet the Team</a>
            </li>
          </ul>
        </div>
        <!-- END: FIRST INNER COLUMN -->

        <!-- START: SECOND INNER COLUMN -->
        <div>
          <h5 class="mb-6 font-bold">
            The 3Hs
            <hr class="w-10 mt-3" />
          </h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline"
                ><i class="fab fa-hacker-news-square"></i
              ></a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Hacker</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Hipster</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Hustler</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Unicorns</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- START: SECOND INNER COLUMN -->
      <!-- START: SECOND COLUMN -->

      <div class="p-6 thirdColumnCard">
        <p class="my-2 thirdColumnHeader">Share your thoughts</p>
        <p class="mt-2 mb-5">
          Have any thoughts on ITECH? Share your suggestions, comments, or
          reports to help the ITECH team tweak, pivot, and polish the platform
          to fit all your needs! Thank you for helping ITECH grow ✨
        </p>
        <a
          class="mt-12 mb-5 px-4 py-4 left-0 getStarted uppercase ..."
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSOI0HZtXYGRCu9Kfybq66BpYdHUCn2vQZTLlXAjKCqYXngQ/viewform"
        >
          Send Feedback
        </a>
      </div>
      <!-- END: THIRD COLUMN -->
    </div>

    <div class="py-6 pt-10">
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
  line-height: 44px;
}

.getStarted {
  height: 40px;
  background: #ffffff;
  border-radius: 50px;
  font-family: Objectivity;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #6b83ff;
}
</style>


