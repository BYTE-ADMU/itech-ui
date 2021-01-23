<template>
  <div class="flex w-full mb-6 rounded-lg">
    <div class="w-1/4 bg-black">
      <!-- <img
        :src="`http://localhost:1337${article.node.thumbnailImage}`"
        class="object-cover h-full rounded-lg"
        style="width: 116px"
      /> -->
    </div>
    <div class="w-3/4 pl-2">
      <p class="mb-2 comment-username">{{ comment.username }}</p>
      <p class="mb-2 comment-comment">{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  props: ["comment"],
};
</script>

<style scoped>
.comment-username {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  color: #151316;
}

.comment-comment {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  /* or 125% */

  color: #8c8c8c;
}
</style> 