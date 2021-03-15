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
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Name</h1>
            <input type="text" v-model="updatedUsername">
          </div>
          <!-- email -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Email</h1>
            <p> {{ userEmail }}</p>
            {{ userEmail }}
          </div>
          <!-- password -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Password</h1>
          </div>
          <!-- year & course -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Year and Course</h1>
            <!-- {{ userYearAndCourse }} -->
          </div>
          <!-- delete account -->
          <div>
            <h1 class="font-bold accountdetails mb-3">Delete Account</h1>
            <button class="delete-button font-objectivity font-bold py-3 px-5">I'd like to delete my account</button>
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
import cover from '../components/auth/userprofile/cover'
export default {
  name: "UserProfile",
  metaInfo: {
    title: "UserProfile",
  },
  components: {
    cover,
  },
  data() {
    return {
      updatedUsername: "",
    }
  },
  computed: {
    username() {
      return this.$store.state.userStore.user.username;
    },
    userEmail() {
      return this.$store.state.userStore.user.email;
    },
    // userYearAndCourse() {
    //   console.log(this.$store.state.userStore.user.course);
    //   return this.$store.state.userStore.user.course;
    // },

  }
}
</script>

<style>
.accountdetails {
  font-size: 24px;
}

.userinformation {
  font-size: 24px;
}

.delete-button {
  background: #FE4242;
  border-radius: 34px;
  color: #F9F7F2;
}
</style>