<template>
  <div class="h-screen w-screen fixed table modal-margin">
    <div class="bg-modal text-center table-cell align-middle">
      <div class="bg-white mx-auto border border-white rounded-xl py-16 relative modal-size">
        <g-link to="/dashboard/" class="w-full">
          <g-image
            :src="require('@/assets/img/unauth/close-modal-vector.svg')"
            class="absolute x-icon" style="right: 23px; top: 23px"/>
        </g-link>
        <h1 class="font-neuemachina text-xl sm:text-2xl md:text-4xl mb-12">
          Logged in!
        </h1>
        <g-link to="/dashboard/" class="form_button py-3 px-6">
          <button class="font-bold">
            Proceed
          </button>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "successfulLoginModal",
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