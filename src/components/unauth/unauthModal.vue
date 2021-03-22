<template>
  <div class="h-screen w-screen fixed table modal-margin">
    <div class="bg-modal text-center table-cell align-middle">
      <div class="bg-white mx-auto border border-white rounded-xl py-16 relative px-6 modal-size">
        <g-link to="/login/" class="w-full">
          <g-image
            :src="require('@/assets/img/unauth/close-modal-vector.svg')"
            class="absolute x-icon" style="right: 23px; top: 23px"/>
        </g-link>
        <h1 class="font-neuemachina text-xl sm:text-2xl md:text-4xl mb-4 sm:mb-12">
          Oops! You don't have access!
        </h1>
        <p class="font-objectivity font-bold text-lg sm:text-xl md:text-2xl mb-12" style="color: #40A5A6">
          Join us on ITECH to view this article.
        </p>
        <g-link to="/login/" class="form_button py-3 px-6">
          <button class="font-bold">
            Log In
          </button>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "unauthModal",

}
</script>

<style>
.bg-modal {
  background: rgba(87, 87, 84, 0.9);
}

.modal-margin {
  margin-top: -81px;
}

.modal-size {
  width: 57%;
}

@media screen and (max-width: 1024px) {
  .modal-margin {
    margin-top: 0;
  }
}

@media screen and (max-width: 640px) {
  .x-icon {
    width: 15px;
  }

  .modal-size {
    width: 85%;
  }
}
</style>