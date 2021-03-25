<template>
  <div class="w-full">
    <form class="w-full pt-2 mx-auto bg-white rounded-lg" @submit="addComment">
      <div class="flex flex-wrap mb-6">
        <div class="mb-5">
          <p class="comment-header">Have a question? A comment?</p>
          <p class="comment-subheader">Leave one below!</p>
        </div>

        <div class="w-full">
          <textarea
            class="w-full h-20 px-3 py-2 leading-normal border border-gray-400 rounded-lg resize-none focus:outline-none focus:bg-white"
            name="body"
            required
            v-model="content"
          ></textarea>
        </div>
        <div class="w-full">
          <button
            type="submit"
            class="block float-right px-6 py-2 text-sm comment-button"
          >
            Comment
          </button>
        </div>
      </div>
    </form>

    <div class="mt-12 overflow-y-auto" style="max-height: 480px">
      <p v-if="isCommentsLoading">Loading</p>
      <CommentCard
        v-else
        v-for="comment in filteredComments"
        v-bind:key="comment.id"
        v-bind:comment="comment"
      ></CommentCard>
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
  props: ["article"],
  data() {
    return {
      content: "",
      isCommentsLoading: false,
    };
  },

  computed: {
    comments() {
      const data = this.$store.state.articlesStore.comments;
      return data;
    },

    filteredComments() {
      let filteredCommentsArray = [];
      if (typeof this.comments !== "undefined") {
        for (const comment of this.comments) {
          if (comment.article.id === this.article.id) {
            filteredCommentsArray.push(comment);
          }
        }
      }
      return filteredCommentsArray;
    },
  },

  methods: {
    addComment(event) {
      event.preventDefault();
      this.isCommentsLoading = true;
      let comment = {
        article: this.article,
        user: this.$store.state.userStore.user,
        content: this.content,
      };
      this.content = "";
      // this.filteredComments.push(comment);
      this.$store
        .dispatch("articlesStore/addComment", comment)
        .then(() => {
          this.$store.dispatch("articlesStore/getComments");
        })
        .then(() => {
          this.isCommentsLoading = false;
        })
        .catch((error) => console.log(error));
    },
  },
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
  background-color: #64c0c1;
  border-radius: 34px;
  color: #f9f7f2;
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.comment-button:hover {
  background-color: #40a5a6;
}
</style>