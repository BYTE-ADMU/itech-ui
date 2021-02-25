<template>
  <div class="layout">
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "unauth-index",
  components: {
    Navbar,
    Footer,
  },

  mounted() {
    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
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
  border-radius: 50px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #f9f7f2;
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
