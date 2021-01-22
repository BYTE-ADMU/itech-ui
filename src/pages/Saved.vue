<template>
  <Layout>
    <!-- ROOT -->
    <div class="container flex flex-col w-screen min-h-screen py-20 mx-auto">
      <!-- Hacker -->
      <div class="flex items-center w-full mt-4">
        <bitbotFeature bb3="hacker" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="flex justify-between mb-2">
            <articleHeader />
            <articleHeader />
            <articleHeader />
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <!-- <articleEntry />
            <articleEntry />
            <articleEntry /> -->
          </div>
        </div>
      </div>
      <!-- Hipster -->
      <div class="flex items-center w-full mt-4">
        <bitbotFeature bb3="hipster" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="flex justify-between mb-2">
            <articleHeader />
            <articleHeader />
            <articleHeader />
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <!-- <articleEntry />
            <articleEntry />
            <articleEntry /> -->
          </div>
        </div>
      </div>
      <!-- Hustler -->
      <div class="flex items-center w-full mt-4">
        <bitbotFeature bb3="hustler" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="flex justify-between mb-2">
            <articleHeader />
            <articleHeader />
            <articleHeader />
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <!-- <articleEntry />
            <articleEntry />
            <articleEntry /> -->
          </div>
        </div>
      </div>
      <!-- END COMPONENTS -->
    </div>
  </Layout>
</template>
<script>
// import articleEntry from "../components/auth/dashboard/articleEntry";
import bitbotFeature from "../components/auth/dashboard/bitbotFeature";
import articleHeader from "../components/auth/dashboard/articleHeader";

export default {
  name: "SavedArticles",
  components: {
    // articleEntry,
    bitbotFeature,
    articleHeader,
  },
};
</script>
<style>
</style>
