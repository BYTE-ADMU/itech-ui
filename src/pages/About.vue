<template>
  <Layout> About Page </Layout>
</template>

<script>
export default {
  name: "About",
  metaInfo: {
    title: "About",
  },

  components: {},

  async mounted() {
    await this.$store.dispatch("articlesStore/getArticles");
    await this.$store.dispatch("coursesStore/getCourses");
    await this.$store.dispatch("topicsStore/getTopics");
    await this.$store.dispatch("categoriesStore/getCategories");
  },
};
</script>


