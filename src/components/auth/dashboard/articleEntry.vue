<template>
  <g-link
    class="flex w-1/3 p-2 rounded-lg shadow-md sm:flex-col md:mb-6"
    :to="`/articles/${article.id}`"
  >
    <!-- PUT IMAGE AND DETAILS INSIDE -->
    <div
      class="block w-1/3 bg-blue-400 rounded-lg minWidth sm:w-full sm:mb-2 h-pic"
    >
      <g-image
        :src="article.thumbnailImage.url"
        class="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div class="p-3 my-auto">
      <p class="sm:mb-2 articleEntry-topic">Topic</p>
      <p class="sm:mb-2 articleEntry-title">
        {{ article.title }}
      </p>
      <p class="sm:mb-2 articleEntry-author">{{ article.author.name }}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  name: "ArticleEntry",
  props: ["article"],
};
</script>
<style scoped>
.h-pic {
  height: 8.5rem;
}

.articleEntry-topic {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */

  /* ITECH Teal */

  color: #64c0c1;
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
}

.minWidth {
  min-width: 206px;
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