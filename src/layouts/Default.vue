<template>
  <div class="layout">
    <Navbar class="lg:block hidden" />
    <NavbarMobile class="lg:hidden block" />
    <div class="w-full" @click="closeDropdowns">
      <slot />
      <Footer />
    </div>
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";
import NavbarMobile from "~/components/NavbarMobile.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "unauth-index",
  components: {
    Navbar,
    NavbarMobile,
    Footer,
  },

  mounted() {
    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
    this.$store.dispatch("categoriesStore/getCategories");
    this.$store.dispatch("admuCoursesStore/getAdmuCourses");
    this.$store.dispatch("teamCommitteesStore/getTeamCommiittees");
    this.$store.dispatch("teamMembersStore/getTeamMembers");
  },

  methods: {
    closeDropdowns() {
      this.$store.dispatch("userStore/updateIsOpenSearchDropdown", false);
      this.$store.dispatch("userStore/updateIsOpenUserDropdown", false);
    },
  },
};
</script>

<style>
@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-Bold.otf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-Bold.otf") format("truetype");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-BoldSlanted.otf")
    format("truetype");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-Medium.otf")
    format("truetype");
  font-weight: medium;
  font-style: normal;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-MediumSlanted.otf")
    format("truetype");
  font-weight: medium;
  font-style: italic;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-Regular.otf")
    format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-RegularSlanted.otf")
    format("truetype");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-Light.otf")
    format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: Objectivity;
  src: url("../assets/font/Objectivity/Objectivity-Light.otf")
    format("truetype");
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: Neue Machina;
  src: url("../assets/font/NeueMachina-Ultrabold.woff");
}

.hackerColor {
  color: #4e6afa;
}
.hipsterColor {
  color: #f3748a;
}
.hustlerColor {
  color: #40a5a6;
}

.font-objectivity {
  font-family: Objectivity;
}

.font-neuemachina {
  font-family: Neue Machina;
}

.form_header {
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
}

.form_text {
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
}

.form_button {
  background: #64c0c1;
  border-radius: 34px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #f9f7f2;
  transition: all ease-in-out 200ms;
  outline: none;
}

.form_button:hover {
  background-color: #40a5a6;
}

.form_button:active {
  transform: translateY(1px);
  box-shadow: inset -7px 7px 30px rgba(0, 0, 0, 0.25);
}

.form_inputs {
  font-size: 24px;
}

.sub_button {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #64c0c1;
  text-align: center;
}
</style>
