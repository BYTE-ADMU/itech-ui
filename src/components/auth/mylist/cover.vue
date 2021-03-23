<template>
  <div class="w-full mb-12">
    <div class="relative w-full heighter rounded-xl purple-cover">
      <g-image src="@/assets/img/BB3-Primary.svg" class="bitBot" />

      <div class="block w-full h-full lg:flex">
        <div
          class="flex w-full pt-6 pl-6 lg:items-center sm:pl-10 sm:pt-10 lg:pt-0 lg:pl-56"
        >
          <div>
            <h2
              class="w-full leading-tight text-white select-none text-feature font-neuemachina"
            >
              My List
            </h2>
            <p
              class="text-2xl font-bold text-white lg:text-base font-objectivity acct-details"
            >
Bookmarked Courses and Articles
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cover",
};
</script>

<style>
.purple-cover {
  background: linear-gradient(284.43deg, #b8c3fd 0%, #b295dc 100%);
}

.heighter {
  height: 204px;
}

.bitBot {
  position: absolute;
  width: 189px;
  height: 193.13px;
  top: 56px;
}

.text-feature {
  font-size: 79px;
  line-height: 71px;
}

@media screen and (max-width: 1023px) {
  .heighter {
    height: 250px;
  }

  .bitBot {
    top: 100px;
    right: 0;
  }
}

@media screen and (max-width: 765px) {
  .heighter {
    height: 270px;
  }
}

@media screen and (max-width: 640px) {
  .bitBot {
    right: 0;
    width: 160px;
    top: 85px;
  }

  .heighter {
    height: 240px;
  }

  .text-feature {
    font-size: 4rem;
  }
}

@media screen and (max-width: 520px) {
  .bitBot {
    width: 120px;
    top: 55px;
  }

  .heighter {
    height: 190px;
  }

  .text-feature {
    font-size: 3rem;
    line-height: 45px;
  }
}

@media screen and (max-width: 330px) {
  .heighter {
    height: 235px;
  }

  .bitBot {
    top: 100px;
  }

  .text-feature {
    font-size: 2.5rem;
  }

  .acct-details {
    font-size: 20px;
  }
}
</style>