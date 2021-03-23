import Vue from 'vue';
import Vuex from 'vuex';


//START: MODULES
import userStore from "./modules/userStore"
import articlesStore from "./modules/articlesStore"
import coursesStore from "./modules/coursesStore"
import topicsStore from "./modules/topicsStore"
import categoriesStore from "./modules/categoriesStore"
import admuCoursesStore from "./modules/admuCoursesStore"
import itechStore from "./modules/itechStore"

//END: MODULES

//LOAD VUEX
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        userStore: userStore,
        categoriesStore: categoriesStore,
        topicsStore: topicsStore,
        coursesStore: coursesStore,
        articlesStore: articlesStore,
        admuCoursesStore: admuCoursesStore,
        itechStore: itechStore,
    }
});


store.state.userStore;
store.state.categoriesStore;
store.state.topicsStore;
store.state.coursesStore;
store.state.articlesStore;
store.state.admuCoursesStore;
store.state.itechStore;

export default store;