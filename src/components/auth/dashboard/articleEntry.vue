<template>
  <g-link
    class="flex flex-row sm:flex-col sm:w-full mx-1 mt-2 mb-2 rounded h-pic"
    :to="`/articles/${article.node.id}`"
  >
    <!-- PUT IMAGE AND DETAILS INSIDE -->
    <div class="block minWidth w-3/12 sm:w-full sm:mb-2 rounded-lg h-pic">
      <img
        :src="article.node.thumbnailImage"
        class="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div class="flex flex-col mx-3 mt-2 mb-2">
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

.minWidth {
  min-width: 136px;
}

@media screen and (min-width: 640px) and (max-width:1024px) {
  .minWidth {
    min-width: 150px;
  }
}
</style>