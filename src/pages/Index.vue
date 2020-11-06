<template>
<Layout>

  <Section1 />
  <Section2 />

</Layout>
</template>

<script>
import Section1 from '~/components/index-unauth/section1.vue';
import Section2 from '~/components/index-unauth/section2.vue';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Section1,
    Section2
  }
}
</script>

<style>
</style>
