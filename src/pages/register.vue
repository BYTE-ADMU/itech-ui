<template>
  <Layout>
    <div class="h-screen">
      <tabs :mode="mode">
        <tab>Tab 1</tab>
        <tab>Tab 2</tab>
        <tab>Tab 3</tab>
        <tab>Tab 4</tab>
      </tabs>
    </div>
  </Layout>
</template>

<script>
import Tab from "~/components/unauth/register/Tab.vue";
import Tabs from "~/components/unauth/register/Tabs.vue";

export default {
  components: {
    Tab,
    Tabs,
  },
};
</script>