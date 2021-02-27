<template>
  <g-link
    class="flex w-full mb-6 rounded-lg"
    style="height: 116px"
    :to="`/articles/${article.id}`"
  >
    <div class="w-3/4 pr-2">
      <p class="mb-2 card-topic">Topic</p>
      <p class="mb-2 card-title">
        {{ article.title }}
      </p>
      <p class="mb-2 card-author">{{ article.author.name }}</p>
    </div>
    <div class="w-1/4">
      <g-image
        :src="article.thumbnailImage.url"
        class="object-cover h-full rounded-lg"
        style="width: 116px"
      />
    </div>
  </g-link>
</template>

<script>
export default {
  name: "ArticleButtonCard",
  props: ["article"],
};
</script>

<style scoped>
.card-topic {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */

  /* ITECH Teal */

  color: #64c0c1;
}

.card-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
}

.card-author {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
}
</style> 