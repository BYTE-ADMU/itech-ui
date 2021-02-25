<template>
  <g-link
    class="flex flex-row sm:flex-col w-9/12 h-48 mx-1 mb-12 rounded"
    :to="`/articles/${article.node.id}`"
  >
    <!-- PUT IMAGE AND DETAILS INSIDE -->
    <div class="w-48 sm:w-full h-24 sm:h-full mb-2 rounded-lg">
      <img
        :src="article.node.thumbnailImage"
        class="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div class="flex flex-col mx-3 mt-2 mb-1">
      <p class="mb-2 articleEntry-topic">Topic</p>
      <p class="flex flex-col mb-2 articleEntry-title">
        {{ article.node.title }}
      </p>
      <p class="flex flex-row mb-2 articleEntry-author">{{ article.node.author }}</p>
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
</style>