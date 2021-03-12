<template>
  <Layout>
    <div
      class="container flex flex-col w-screen min-h-screen pb-20 mx-auto mb-24 sm:py-20"
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  </Layout>
</template>

<script>
import Section1 from "~/components/unauth/about/Section1.vue";
import Section2 from "~/components/unauth/about/Section2.vue";
import Section3 from "~/components/unauth/about/Section3.vue";
import Section4 from "~/components/unauth/about/Section4.vue";

export default {
  name: "About",
  metaInfo: {
    title: "About",
  },

  components: {
    Section1,
    Section2,
    Section3,
    Section4,
  },

  async mounted() {
    await this.$store.dispatch("articlesStore/getArticles");
    await this.$store.dispatch("coursesStore/getCourses");
    await this.$store.dispatch("topicsStore/getTopics");
    await this.$store.dispatch("categoriesStore/getCategories");
  },
};
</script>


