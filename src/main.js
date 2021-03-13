// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/assets/css/styles.css");

import DefaultLayout from '~/layouts/Default.vue'
import store from './store/index';

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  appOptions.store = store;
  appOptions.router = router;

  if (process.isClient) {
    router.beforeEach((to, from, next) => {
      if (
        to.path.includes("dashboard") ||
        to.path.includes("topics") ||
        to.path.includes("courses") ||
        // to.path.includes("articles") ||
        to.path.includes("discover")
      ) {
        if (!store.state.userStore.isAuthenticated) {
          next("/login/");
        } else {
          next();
        }
      } else {
        next();
      }
    });
  }




  Vue.component('Layout', DefaultLayout);
}
