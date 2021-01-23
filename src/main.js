// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/assets/css/styles.css");

import DefaultLayout from '~/layouts/Default.vue'
import store from './store';

export default function (Vue, {appOptions, router, head, isClient }) {
  // Set default layout as a global component
  appOptions.store = store;
  appOptions.router = router;
  Vue.component('Layout', DefaultLayout);
}
