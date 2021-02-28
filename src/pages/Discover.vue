<template>
  <Layout>
    <div>
      <!-- search bar -->
      <div class="w-1/2 mx-auto relative">
        <input type="text" placeholder="Search" class="w-full h-10 rounded-3xl searchBar pt-2 font-objectivity">
        <img 
        :src="require('../assets/img/search-vector.svg')"
        class="searchVector">
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.searchBar {
  border: 1px solid #64C0C1;
  padding-left: 60px;
  background-color: rgba(100, 192, 193, 0.05);
}

.searchVector {
  position: absolute;
  top: 13px;
  left: 28px;
}

::placeholder {
  color: #64C0C1;
}

:-ms-input-placeholder {
  color: #64C0C1;
}

::-ms-input-placeholder {
  color: #64C0C1;
}
</style>