<template>
  <div class="flex w-full mb-6 rounded-lg">
    <img
      :src="userImage"
      class="mr-4 rounded-full"
      style="width: 75px; height: 75px"
    />
    <div>
      <div class="flex mb-2">
        <p class="truncate comment-username">{{ comment.user.username }}</p>
        <p class="hidden ml-5 comment-comment sm:inline md:hidden lg:inline">
          {{ formatDate(comment.published_at) }}
        </p>
      </div>
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
  computed: {
    userImage() {
      try {
        const data = this.comment.user.profileImage.url;
        return data;
      } catch (error) {
        return require("@/assets/img/icons/DefaultUserIcon.svg");
      }
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