<template>
  <g-link
    class="relative flex w-full overflow-hidden bg-black rounded-lg course-hover"
    style="height: 157px"
    :to="`/courses/${course.id}`"
  >
    <div class="overflow-hidden overflow-ellipsis ...">
      <g-image
        :src="course.thumbnail.url"
        class="object-cover h-full rounded-lg"
        style="opacity: 0.65"
      />
      <div
        class="absolute w-full mt-auto bottom-0 py-5 px-10 rounded-lg sm:px-5 overflow-ellipsis overflow-hidden ..."
      >
        <p
          class="mt-12 text-white card-title overflow-ellipsis overflow-hidden ..."
        >
          {{ course.name }}
        </p>
        <p class="py-0 font-light text-white">
          {{ itemCount }} <span v-if="itemCount > 1">Items</span
          ><span v-else>Item</span>
        </p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "CourseButton",
  props: ["course"],

  computed: {
    itemCount() {
      return this.course.articles.length;
    },
  },

  // computed: {
  //   articleTopic() {
  //     switch (this.course.categories[0].name.toLowerCase()) {
  //       case "hacker":
  //         return "hackerColor";
  //       case "hipster":
  //         return "hipsterColor";
  //       case "hustler":
  //         return "hustlerColor";
  //       default:
  //         return "hustlerColor";
  //     }
  //   },
  // },
};
</script>

<style scoped>
.card-topic {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
}

.card-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
}

.card-author {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
}

.course-hover {
  transition: .20s ease-in-out;
  -webkit-transition: .20s ease-in-out;
  -moz-transition: .20s ease-in-out;
  -o-transition: .20s ease-in-out;
}

.course-hover:hover {
  transform: scale(1.06);
  box-shadow: 0 10px 15px -2px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}
</style> 