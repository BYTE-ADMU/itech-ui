<template>
<footer class="bg-hacker-primary bottom-0 text-white">
  <div class="container mx-auto px-6 pt-10 pb-6">
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/5 text-center md:text-left">
        <h5 class="uppercase mb-6 font-bold">About</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover:underline  ">ITECH</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Vision,Mission</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Meet the Authors</a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/5 text-center md:text-left">
        <h5 class="uppercase mb-6 font-bold">The 3Hs</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover:underline ">Hacker</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline ">Hipster</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline ">Hustler</a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/5 text-center md:text-left">
        <h5 class="uppercase mb-6 font-bold">Resources</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Articles</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Videos</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Open Source</a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/5 text-center md:text-left">
        <h5 class="uppercase mb-6 font-bold">Contact</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Reader Services</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Careers</a>
          </li>
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Connect with Us</a>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/5 text-center md:text-left">
        <h5 class="uppercase mb-6 font-bold">Press</h5>
        <ul class="mb-4">
          <li class="mt-2">
            <a href="#" class="hover:underline  ">Newsletters</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-20 flex flex-col">
    <div class="flex justify-between items-center border-t">
      <img :src="require('@/assets/img/logo-white.svg')" class="w-32 py-4" />
      <p class="text-white text-sm font-light tracking-wide">
        © 2020 ITECH. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
</template>
