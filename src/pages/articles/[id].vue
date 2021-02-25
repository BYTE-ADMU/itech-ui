<template lang="html">
  <Layout>
    <section class="flex justify-center min-h-screen pt-16 pb-32">
      <div class="w-full">
        <div v-if="article === null" class="w-2/3 mx-auto">
          <p class="mb-10 breadcrumb"><g-link to="/dashboard/">Home</g-link></p>
          <Loader/>
        </div>
        <div v-else class="w-2/3 mx-auto">
          <p class="mb-10 breadcrumb">
            <g-link to="/dashboard/">Home</g-link
            ><g-link
              v-if="article.courses.length !== 0"
              :to="`/courses/${article.courses[0].id}`"
            >
              / {{ article.courses[0].name }}</g-link
            >
          </p>

          <div class="mx-24 mb-12">
            <!-- START: ARTICLE INFO -->

            <!-- START: First Row -->
            <p class="mb-5 article-title">{{ article.title }}</p>
            <!-- END: First Row -->

            <!-- START: Second Row -->
            <div class="flex">
              <!-- Start: Article Author and Dates -->
              <div class="w-full">
                <div class="flex items-center text-black no-underline">
                  <g-image
                    alt="author-image"
                    class="block rounded-full author-image"
                    :src="article.author.profileImage.url"
                  />
                  <div class="ml-5">
                    <p class="author-name">{{ article.author.name }}</p>
                    <p class="article-publishedDate">
                      Published on {{ formatDate(article.published_at) }}
                    </p>
                    <p class="article-lastEditedDate">
                      Last Edited on {{ formatDate(article.updatedAt) }}
                    </p>
                  </div>
                </div>
              </div>
              <!-- End: Article Author and Dates -->

              <!-- Start:Icons -->
              <div class="w-full">
                <div class="flex float-right">
                  <a
                    href="https://twitter.com/byteadmu"
                    target="_blank"
                    class="mx-2"
                    ><g-image
                      :src="require('@/assets/img/icons/Twitter_Outline.svg')"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/byteadmu/"
                    target="_blank"
                    class="mx-2"
                    ><g-image
                      :src="require('@/assets/img/icons/Facebook_Outline.svg')"
                  /></a>
                  <a
                    href="https://www.facebook.com/byteadmu/"
                    target="_blank"
                    class="mx-2"
                    ><g-image :src="require('@/assets/img/icons/Bookmark.svg')"
                  /></a>
                </div>
              </div>
              <!-- End:Icons -->
            </div>
            <!-- END: Second Row -->
          </div>
          <!-- END: ARTICLE INFO -->

          <!-- START: FEATURED IMAGE -->

          <g-image
            class="w-full mb-24 overflow-auto"
            :src="article.featuredImage.url"
          />
          <!-- END: FEATURED IMAGE -->

          <!-- START: ARTICLE CONTENT -->
          <div class="mx-24 overflow-hidden">
            <VueMarkdown
              class="mb-24 article-content"
              :source="article.content"
            />
            <div class="mb-24 overflow-auto article-sources">
              <VueMarkdown :source="article.sources" />
            </div>
          </div>
          <!-- END: ARTICLE CONTENT -->

          <!-- START: DIVIDER -->
          <div class="flex justify-center w-full mb-24">
            <div>
              <svg
                width="214"
                height="10"
                viewBox="0 0 214 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="106" cy="5" r="5" fill="#151316" />
                <circle cx="209" cy="5" r="5" fill="#151316" />
                <circle cx="5" cy="5" r="5" fill="#151316" />
              </svg>
            </div>
          </div>
          <!-- END: DIVIDER -->

          <!-- START: Next Articles and Comments Section-->
          <div class="flex">
            <!-- Start: Article Author and Dates -->
            <div class="w-full mx-24">
              <div class="flex items-center">
                <!-- START: FIRST COLUMN -->
                <div class="w-full">
                  <p class="whats-next">What's Next?</p>
                  <hr class="my-5" />

                  <div v-for="article in nextArticles" v-bind:key="article.id">
                    <ArticleButtonCard
                      v-bind:article="article"
                    ></ArticleButtonCard>
                  </div>
                </div>
              </div>
            </div>
            <!-- END: FIRST COLUMN -->

            <!-- START:SECOND -->
            <div class="w-full">
              <form class="w-full max-w-xl px-4 pt-2 bg-white rounded-lg">
                <div class="flex flex-wrap mb-6 -mx-3">
                  <div class="mb-5">
                    <p class="comment-header">Have a question? A comment?</p>
                    <p class="comment-subheader">Leave one below!</p>
                  </div>

                  <div class="w-full">
                    <textarea
                      class="w-full h-20 px-3 py-2 font-medium leading-normal border border-gray-400 rounded resize-none focus:outline-none focus:bg-white"
                      name="body"
                      required
                    ></textarea>
                  </div>
                  <div class="w-full">
                    <input
                      type="submit"
                      class="float-right comment-button"
                      value="Post Comment"
                    />
                  </div>
                </div>
              </form>
              <div v-for="comment in article.comments" v-bind:key="comment.id">
                <CommentCard v-bind:comment="comment"></CommentCard>
              </div>
            </div>
            <!-- END:SECOND COLUMN -->
          </div>
          <!-- END: Next Articles and Comments Section-->
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Loader from "../../components/Loader";
import ArticleButtonCard from "../../components/auth/articles/ArticleButtonCard";
import CommentCard from "../../components/auth/articles/CommentCard";
import VueMarkdown from "vue-markdown";

import moment from "moment";
import axios from "axios";

export default {
  name: "Article",
  metaInfo() {
    return {
      title: this.title,
    };
  },

  components: {
    Loader,
    VueMarkdown,
    ArticleButtonCard,
    CommentCard,
  },

  data() {
    return {
      title: "Loading...",
      article: null,
    };
  },

  async mounted() {
    const data = await this.getArticle(this.$route.params.id);
    this.article = data;
    this.title = data.title;

    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
  },

  computed: {
    nextArticles() {
      return this.$store.state.articlesStore.articles.slice(0, 3);
    },
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    async getArticle(id) {
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/articles/${id}`
      );
      return data;
    },

    formatDate(date) {
      return moment(date).format("MMMM DD, YYYY");
    },
  },

  watch: {
    id(newId, oldId) {
      this.article = this.getArticle(newId);
      this.title = this.getArticle(newId).title;
    },
  },
};
</script>

<style scoped>
.article-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 64px;
  color: #151316;
}

.article-content {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  color: #151316;
}

.author-image {
  width: 65px;
  height: 65px;
}

.author-name {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}

.article-publishedDate {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #626262;
}

.article-lastEditedDate {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}

.article-content {
  font-family: HK Grotesk;
  font-size: 24px;
  line-height: 40px;
}

.article-sources {
  font-family: HK Grotesk;
  font-size: 24px;
  line-height: 40px;
  color: #8c8c8c;
}

.whats-next {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  color: #151316;
}

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

  /* ITECH Blue */

  background: #4e6afa;
  border-radius: 5px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: white;
}

.breadcrumb {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #c9c9c9;
}
</style>
