<template>
  <div class="w-full">
    <p class="whats-next">What's Next?</p>
    <hr class="my-5" />

    <div v-if="nextArticles === null">Loading...</div>
    <div v-else v-for="article in nextArticles" v-bind:key="article.id">
      <ArticleButtonCard v-bind:article="article"></ArticleButtonCard>
    </div>
  </div>
</template>

<script>
import ArticleButtonCard from "./ArticleButtonCard";

export default {
  name: "NextArticlesSection",
  components: {
    ArticleButtonCard,
  },
  props: ["nextArticles"],
};
</script>

<style scoped>
.whats-next {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #151316;
}
</style>