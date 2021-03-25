<template>
  <g-link
    class="flex w-full bg-white rounded-lg"
    style="height: 157px"
    :to="`/articles/${article.id}`"
  >
    <div class="w-1/2 px-4 py-2 h-full overflow-ellipsis overflow-hidden ...">
      <div class="truncate ... overflow-hidden">
        <g-link
          v-if="article.courses.length > 0"
          :to="`/courses/${article.courses[0].id}`"
          v-bind:class="articleTopic"
          class="mb-2 card-topic"
          >{{ article.courses[0].name }}</g-link
        >

        <g-link
          v-else
          :to="`/categories/${article.categories[0].name}`"
          v-bind:class="articleTopic"
          class="mb-2 card-topic"
          >{{ article.categories[0].name }}</g-link
        >
      </div>

      <p class="my-4 mb-2 card-title">
        {{ article.title }}
      </p>
      <p class="bottom-0 mb-2 card-author">{{ article.author.name }}</p>
    </div>
    <div class="w-1/2">
      <g-image
        :src="article.thumbnailImage.url"
        class="float-right object-cover h-full rounded-r-lg"
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