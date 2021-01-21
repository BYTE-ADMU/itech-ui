<template>
  <Layout>
    <p v-for="article in hackerArticles" :key="article.node.id">
      {{ article.node.title }} Hekki
      <button @click="$router.push(`/articles/${article.node.id}`)">
        More Info
      </button>
    </p>
  </Layout>
</template>



<page-query>
  query {
    allArticles{
      edges{
        node{
          id,
          category,
          title,
          author,
          thumbnailImage
        }
      }
    }
  }
</page-query>


<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "Hello, world!",
  },

  data() {
    return {
      tab: 0,
      articles: [],
    };
  },

  mounted() {
    this.articles = this.$page.allArticles.edges;
  },

  computed: {
    hackerArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hacker");
      });
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
