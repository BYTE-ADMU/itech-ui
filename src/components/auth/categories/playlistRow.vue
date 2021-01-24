<template>
  <div>
    <div class="my-4">
      <h3
        class="mb-4 text-xl font-bold uppercase font-objectivity"
        style="color: #9d9d9d"
      >
        Course 3
      </h3>

      <div class="flex justify-between">
        <articleEntry
          v-for="article in filteredArticles"
          v-bind:key="article.node.id"
          v-bind:article="article"
        ></articleEntry>
      </div>
    </div>
    <hr class="mt-12 mb-2" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>