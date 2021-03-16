<template>
  <div class="h-screen w-screen fixed table modal-margin">
    <div class="bg-modal text-center table-cell align-middle">
      <div class="bg-white mx-auto border border-white rounded-xl py-16 relative modal-size">
        <h1 class="font-neuemachina text-xl sm:text-2xl md:text-4xl loading">
          Logging in
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loggingInModal",
}
</script>

<style scoped>
.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4,end) 1.8s infinite;      
  animation: ellipsis steps(4,end) 1.8s infinite;
  content: "\2026"; /* ascii code for the ellipsis character */
  width: 0px;
}

@keyframes ellipsis {
  to {
    width: 1.15em;    
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 1.15em;    
  }
}
</style>