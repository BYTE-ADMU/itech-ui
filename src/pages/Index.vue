<template>
  <Layout>
    <Section1 />
    <Section2 />
    <Section3 />
  </Layout>
</template>

<script>
import Section1 from "~/components/unauth/index/section1.vue";
import Section2 from "~/components/unauth/index/section2.vue";
import Section3 from "~/components/unauth/index/section3.vue";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Section1,
    Section2,
    Section3,
  },
};
</script>

<style>
</style>
