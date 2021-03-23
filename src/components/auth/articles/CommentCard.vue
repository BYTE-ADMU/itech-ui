<template>
  <div class="flex w-full mb-6 rounded-lg">
    <div class="w-1/5">
      <img
        :src="comment.user.profileImage.url"
        class="object-cover h-full rounded-lg"
        style="width: 75px; height: 75px"
      />
    </div>
    <div class="w-4/5">
      <p class="mb-2 truncate">
        <span class="comment-username">{{ comment.user.username }}</span
        ><span class="ml-5 comment-comment">{{
          formatDate(comment.published_at)
        }}</span>
      </p>
      <p class="mb-2 comment-comment">{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CommentCard",
  props: ["comment"],
  methods: {
    formatDate(date) {
      return moment(date).format("MMMM DD, YYYY");
    },
  },
};
</script>

<style scoped>
.comment-username {
  font-family: Objectivity;
  font-style: bold;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #151316;
}

.comment-comment {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #8c8c8c;
}
</style> 