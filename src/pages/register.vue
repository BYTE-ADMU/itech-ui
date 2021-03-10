<template>
  <Layout>
    <Tabs v-bind:tabsData="tabsData"></Tabs>
  </Layout>
</template>

<script>
import Tabs from "~/components/unauth/register/Tabs.vue";

export default {
  name: "register",
  metaInfo: { title: "Register" },
  components: { Tabs },
  data() {
    return {
      tabsData: [
        {
          id: 1,
          isLayoutCentered: false,
          image: "Tab1.svg",
          header: "Hi! I am Bit Bot 3,",
          text: "but you can call me BB3! I’d like to know your name!",
          buttonText: "Next",
        },
        {
          id: 2,
          isLayoutCentered: true,
          image: "Tab2.svg",
          header: "Nice to meet you!",
          text:
            "Here in ITECH you can learn a bunch of cool stuff related to Hacker, Hipster, and Hustler tracks of ITE!",
          buttonText: "Next",
        },
        {
          id: 3,
          isLayoutCentered: false,
          image: "Tab3.svg",
          header: "Okay! But first,",
          text: "May I know your OBF email? ",
          buttonText: "Next",
        },
        {
          id: 4,
          isLayoutCentered: true,
          image: "Tab4.svg",
          header: "Thanks!",
          text:
            "We’ll need that to keep track of all your progress, favorite finds, and your points whenever you finish a topic",
          buttonText: "Next",
        },
        {
          id: 5,
          isLayoutCentered: false,
          image: "Tab5.svg",
          header: "Now, an important note",
          text:
            "Let’s create a top secret password and don’t forget to confirm!",
          buttonText: "Next",
        },
        {
          id: 6,
          isLayoutCentered: true,
          image: "Tab6.svg",
          header: "IT’S JUST FOR YOU!",
          text:
            "ITECH is only for BYTE members and ITE students. This is one of the places BYTE builds young tech entrepreneurs",
          buttonText: "Next",
        },
        {
          id: 7,
          isLayoutCentered: false,
          image: "Tab7.svg",
          header: "Just curious...",
          text:
            "BYTE is filled with people of different background so what is your year and course? ",
          buttonText: "Next",
        },
        {
          id: 8,
          isLayoutCentered: false,
          image: "Tab8.svg",
          header: "We are almost done!",
          text: "I wanna know what time you want to get reminders to study!",
          buttonText: "Next",
        },
        {
          id: 9,
          isLayoutCentered: true,
          image: "Tab9.svg",
          header: "We are finally done!",
          text:
            "Now, explore ITECH, see what you love and watch out for new topics! Beep Boop friend.",
          buttonText: "Next",
        },
      ],
    };
  },
};
</script>