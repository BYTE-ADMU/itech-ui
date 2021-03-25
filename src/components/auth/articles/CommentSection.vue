<template>
  <div class="w-full">
    <form class="w-full max-w-xl px-4 pt-2 mx-auto bg-white rounded-lg">
      <div class="flex flex-wrap mb-6 -mx-3">
        <div class="mb-5">
          <p class="comment-header">Have a question? A comment?</p>
          <p class="comment-subheader">Leave one below!</p>
        </div>

        <div class="w-full">
          <textarea
            class="w-full h-20 px-3 py-2 font-medium leading-normal border border-gray-400 rounded-lg resize-none focus:outline-none focus:bg-white"
            name="body"
            required
          ></textarea>
        </div>
        <div class="w-full">
          <input
            type="submit"
            class="block float-right px-8 py-3 text-sm comment-button"
            value="Comment"
          />
        </div>
      </div>
    </form>
    <div v-for="comment in comments" v-bind:key="comment.id">
      <CommentCard v-bind:comment="comment"></CommentCard>
    </div>
  </div>
</template>

<script>
import CommentCard from "./CommentCard";
export default {
  name: "CommentSection",
  components: {
    CommentCard,
  },
  props: ["comments"],
};
</script>

<style>
.comment-header {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #151316;
}

.comment-subheader {
  font-family: Objectivity;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* or 167% */

  color: #8c8c8c;
}

.comment-button {
  padding: 10px 18px;
  background-color: #64c0c1;
  border-radius: 34px;
  color: #f9f7f2;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  transition: .20s ease-in-out;
  -webkit-transition: .20s ease-in-out;
  -moz-transition: .20s ease-in-out;
  -o-transition: .20s ease-in-out;
}

.comment-button:hover {
  background-color: #40A5A6;
}
</style>