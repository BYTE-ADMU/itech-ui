import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

//START: MODULES
import userStore from "./modules/userStore"
//END: MODULES

//LOAD VUEX
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userStore: userStore
    }
});


store.state.userStore;
export default store;