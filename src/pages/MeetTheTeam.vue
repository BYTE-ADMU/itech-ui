<template>
  <Layout>
    <cover class="hidden lg:block"/>
    <coverMobile class="block lg:hidden"/>
  </Layout>
</template>

<script>
import cover from '../components/unauth/meetTheTeam/cover'
import coverMobile from '../components/unauth/meetTheTeam/coverMobile'

export default {
  name: "MeetTheTeam",
  metaInfo: {
    title: "Meet The Team",
  },
  
  components: {
    cover,
    coverMobile,
  },
}
</script>

<style>

</style>