<template>
  <g-link
    class="flex flex-col w-1/3 h-48 mx-2 rounded-t-lg"
    :to="`/articles/${article.node.id}`"
  >
    <!-- PUT IMAGE AND DETAILS INSIDE -->
    <div class="w-full mb-2 bg-blue-400 rounded-lg h-pic">
      <img
        :src="article.node.thumbnailImage"
        class="object-cover w-full h-full rounded-lg"
      />
    </div>
    <p class="mb-2 articleEntry-topic">Topic</p>
    <p class="mb-2 articleEntry-title">
      {{ article.node.title }}
    </p>
    <p class="mb-2 articleEntry-author">{{ article.node.author }}</p>
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