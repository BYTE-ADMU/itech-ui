<template>
  <Layout>
    <div
      class="flex flex-col w-screen min-h-screen mx-auto mb-24 overflow-hidden md:container md:pt-20"
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
};
</script>


