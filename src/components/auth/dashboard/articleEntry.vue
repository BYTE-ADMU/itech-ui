
<template>
  <div class="relative w-full">
    <g-link
      v-if="article !== null"
      class="flex h-full p-2 rounded-lg shadow-md sm:flex-col md:mb-6 article-hover"
      :to="`/articles/${article.id}`"
    >
      <!-- PUT IMAGE AND DETAILS INSIDE -->
      <div class="block w-1/3 bg-blue-400 rounded-lg minWidth sm:w-full h-pic">
        <g-image
          :src="article.thumbnailImage.url"
          class="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div class="px-2 py-3 overflow-hidden">
        <g-link
          v-if="article.courses.length > 0"
          :to="`/courses/${article.courses[0].id}`"
          class="sm:mb-2 articleEntry-topic truncate ..."
          v-bind:class="articleTopic"
          >{{ article.courses[0].name }}</g-link
        >
        <g-link
          v-else
          :to="`/categories/${article.categories[0].name.toLowerCase()}`"
          class="sm:mb-2 articleEntry-topic truncate ..."
          v-bind:class="articleTopic"
          >{{ article.categories[0].name }}</g-link
        >

        <p class="mt-2 sm:mb-2 articleEntry-title">
          {{ article.title }}
        </p>
        <p class="absolute bottom-0 pb-4 md:pb-0 sm:mb-2 articleEntry-author">
          {{ article.author.name }}
        </p>
      </div>
    </g-link>

    <g-link
      v-else
      class="flex p-2 bg-gray-400 rounded-lg shadow-md sm:flex-col md:mb-6 article-hover"
    >
      <!-- PUT IMAGE AND DETAILS INSIDE -->
      <div
        class="block w-1/3 bg-gray-300 rounded-lg minWidth sm:w-full sm:mb-2 h-pic"
      ></div>
      <div class="p-3 my-auto overflow-hidden">
        <g-link class="sm:mb-2 articleEntry-topic truncate ...">&nbsp;</g-link>

        <p class="sm:mb-2 articleEntry-title">&nbsp;</p>
        <p class="sm:mb-2 articleEntry-author">&nbsp;</p>
      </div>
    </g-link>
  </div>
</template>


<script>
export default {
  name: "ArticleEntry",
  props: ["article"],

  computed: {
    articleTopic() {
      switch (this.article.categories[0].name.toLowerCase()) {
        case "hacker":
          return "hackerColor";
        case "hipster":
          return "hipsterColor";
        case "hustler":
          return "hustlerColor";
        default:
          return "hustlerColor";
      }
    },
  },
};
</script>
<style scoped>
.article-entry {
  height: 296px;
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

.h-pic {
  height: 8.5rem;
}

.articleEntry-topic {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
}

.articleEntry-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  text-align: left;
}

.articleEntry-author {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #757572;
}

.minWidth {
  min-width: 206px;
}

.article-hover {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.article-hover:hover {
  transform: scale(1.06);
  box-shadow: 0 5px 7px 1px rgba(0, 0, 0, 0.1),
    0 3px 5px 1px rgba(0, 0, 0, 0.06);
}

@media screen and (min-width: 640px) and (max-width: 1024px) {
  .minWidth {
    min-width: 150px;
  }
}

@media screen and (max-width: 425px) {
  .articleEntry-title {
    font-size: 14px;
    line-height: 18px;
  }

  .minWidth {
    min-width: 130px;
  }
}
</style>