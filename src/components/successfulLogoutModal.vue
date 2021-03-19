<template>
  <div class="h-screen w-screen fixed table">
    <div class="bg-modal text-center table-cell align-middle">
      <div class="bg-white mx-auto border border-white rounded-xl py-16 relative modal-size">
        <g-link to="/login/" class="w-full">
          <g-image
            :src="require('@/assets/img/unauth/close-modal-vector.svg')"
            class="absolute" style="right: 23px; top: 23px"/>
        </g-link>
        <h1 class="font-neuemachina text-4xl">
          You have signed out.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'successfulLogoutModal',
}
</script>

<style>

</style>