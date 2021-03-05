<template>
  <Layout>
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  </Layout>
</template>

<script>
import Section1 from "~/components/unauth/index/section1.vue";
import Section2 from "~/components/unauth/index/section2.vue";
import Section3 from "~/components/unauth/index/section3.vue";

export default {
  components: {
    Section1,
    Section2,
    Section3,
  },

  name: "unauth-index",
  metaInfo: {
    title: "Home",
  },

  async mounted() {
    await this.$store.dispatch("articlesStore/getArticles");
    await this.$store.dispatch("coursesStore/getCourses");
    await this.$store.dispatch("topicsStore/getTopics");
    await this.$store.dispatch("categoriesStore/getCategories");
  },
};
</script>


