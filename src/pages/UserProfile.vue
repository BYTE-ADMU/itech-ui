<template>
  <Layout>
    <div class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto mb-24">
      <!-- cover -->
      <div class="mb-10">
        <cover/>
      </div>
      <!-- end cover -->

      <!-- content -->
      <div class="grid grid-cols-2 gap-10 mx-auto w-4/5">
        <!-- account info -->
        <div>
          <!-- name -->
          <div>
            <h1 class="font-bold">Name</h1>
            <!-- {{ username }} -->
          </div>
          <!-- email -->
          <div>
            <h1 class="font-bold">Email</h1>
            {{ userEmail }}
          </div>
          <!-- password -->
          <div>
            <h1 class="font-bold">Password</h1>
          </div>
          <!-- year & course -->
          <div>
            <h1 class="font-bold">Year and Course</h1>
          </div>
          <!-- delete account -->
          <div>
            <button>I'd like to delete my account</button>
          </div>
        </div>
        <!-- end account info -->
        <!-- profile picture -->
        <div class="mx-auto">
          <!-- <g-image :src="profilePic"/> -->
          <g-image :src="require('../assets/img/icons/DefaultUserIcon.svg')"/>
        </div>
        <!-- end profile picture -->
      </div>
      <!-- end content -->
    </div>
  </Layout>
</template>

<script>
import Vue from "vue"
import cover from '../components/auth/userprofile/cover'
export default Vue.extend ({
  name: "UserProfile",
  metaInfo: {
    title: "UserProfile",
  },
  components: {
    cover,
  },
  computed: {
    userEmai() {
      return this.$store.state.userStore.user.email;
    },
  }
});
</script>

<style>

</style>