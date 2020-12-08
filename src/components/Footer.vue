<template>
  <footer class="bottom-0 px-32 text-white bg-hacker-primary">
    <div class="grid grid-cols-3 gap-2 py-32 ...">
      <!-- START: FIRST COLUMN -->
      <div class="flex">
        <div class="w-1/2">
          <img :src="require('@/assets/img/logo-white.svg')" class="w-full" />
        </div>
        <div class="w-1/2">
          <p
            style="font-size: 72px; font-family: objectivity; font-weight: bold"
          >
            ITECH
          </p>
        </div>
      </div>
      <!-- END: FIRST COLUMN -->

      <!-- START: SECOND COLUMN -->
      <!-- START: FIRST INNER COLUMN -->
      <div class="grid grid-cols-2 gap-2 ...">
        <div>
          <img
            :src="require('@/assets/img/logo-withWhiteText.svg')"
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
            :src="require('@/assets/img/logo-withWhiteText.svg')"
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
          :src="require('@/assets/img/logo-withWhiteText.svg')"
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
