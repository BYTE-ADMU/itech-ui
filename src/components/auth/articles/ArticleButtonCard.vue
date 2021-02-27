<template>
  <g-link
    class="flex w-full mb-6 rounded-lg"
    style="height: 116px"
    :to="`/articles/${article.id}`"
  >
    <div class="w-3/4 pr-2">
      <g-link
        v-if="article.courses.length > 0"
        :to="`/courses/${article.courses[0].id}`"
        v-bind:class="articleTopic"
        class="mb-2 card-topic truncate ..."
        >{{ article.courses[0].name }}</g-link
      >

      <g-link
        v-else
        :to="`/categories/${article.categories[0].name}`"
        v-bind:class="articleTopic"
        class="mb-2 card-topic truncate ..."
        >{{ article.categories[0].name }}</g-link
      >

      <p class="mb-2 card-title">
        {{ article.title }}
      </p>
      <p class="mb-2 card-author">{{ article.author.name }}</p>
    </div>
    <div class="w-1/4">
      <g-image
        :src="article.thumbnailImage.url"
        class="float-right object-cover h-full rounded-lg"
        style="width: 116px"
      />
    </div>
  </g-link>
</template>

<script>
export default {
  name: "ArticleButtonCard",
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