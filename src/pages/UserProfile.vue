<template>
  <Layout>
    <div class="container flex flex-col w-full min-h-screen p-6 pt-10 pb-20 mx-auto">
      <!-- cover -->
      <div class="mb-10">
        <cover/>
      </div>
      <!-- end cover -->

      <!-- content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mx-auto w-full lg:w-4/5">
        <!-- account info -->
        <div>
          <!-- name -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Name</h1>
            <input type="text" class="w-full px-6 py-3 mb-4 border rounded-md text-grey-darker text-base sm:text-xl"
              v-bind:value="username"/>
          </div>
          <!-- email -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Email</h1>
            <input type="email" class="w-full px-6 py-3 mb-4 border rounded-md text-grey-darker text-base sm:text-xl"
              v-bind:value="userEmail"/>
          </div>
          <!-- password -->
          <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Password</h1>
            <input type="password" class="w-full px-6 py-3 mb-4 border rounded-md text-grey-darker text-base sm:text-xl"
              />
          </div>
          <!-- year & course -->
          <!-- <div class="mb-6">
            <h1 class="font-bold accountdetails mb-3">Year and Course</h1>
            {{ userYearAndCourse }}
          </div> -->
          <!-- delete account -->
          <div>
            <button class="update-button font-objectivity font-bold py-3 px-5">Update Profile</button>
          </div>
        </div>
        <!-- end account info -->
        <!-- profile picture -->
        <div class="mx-auto hidden lg:block">
          <!-- <g-image :src="profilePic"/> -->
          <g-image :src="require('../assets/img/icons/DefaultUserIcon.svg')"
            class="w-40"/>
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

.update-button {
  background: linear-gradient(283.99deg, #B0CA88 7.28%, #70B9A2 100%);
  border-radius: 34px;
  color: #F9F7F2;
}

@media screen and (max-width: 500px) {
  .accountdetails {
    font-size: 16px;
  }
}
</style>