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
            style="font-size: 6rem; font-family: objectivity; font-weight: bold"
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
          <img
            :src="require('@/assets/img/BB3-PrimaryWithWhiteText.svg')"
            class="w-32 py-6"
          />
          <h5 class="mb-6 font-bold uppercase">
            About
            <hr class="w-10 mt-3" />
          </h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline">ITECH</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Vision, Mission</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Meet the Authors</a>
            </li>
          </ul>
        </div>
        <!-- END: FIRST INNER COLUMN -->

        <!-- START: SECOND INNER COLUMN -->
        <div>
          <img
            :src="require('@/assets/img/BB3-PrimaryWithWhiteText.svg')"
            class="w-32 py-6"
          />
          <h5 class="mb-6 font-bold uppercase">
            About
            <hr class="w-10 mt-3" />
          </h5>
          <ul class="mb-4">
            <li class="mt-2">
              <a href="#" class="hover:underline">ITECH</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Vision, Mission</a>
            </li>
            <li class="mt-2">
              <a href="#" class="hover:underline">Meet the Authors</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- START: SECOND INNER COLUMN -->
      <!-- START: SECOND COLUMN -->

      <div>
        <img
          :src="require('@/assets/img/BB3-PrimaryWithWhiteText.svg')"
          style="width: 100%"
        />
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
