<template lang="html">
  <Layout>
    <section class="flex justify-center min-h-screen pt-16 pb-32">
      <div class="w-screen md:container">

        <!-- START:LOADER -->
        <div v-if="article === null" >
          <p class="mb-10 breadcrumb"><g-link to="/dashboard/">Home</g-link></p>
          <Loader/>
        </div>
         <!-- END:LOADER -->
         

      <!-- START:ARTICLE -->
        <div v-else >
          <!-- START: BREADCRUMB -->
          <p class="px-12 mb-10 md:px-0 breadcrumb">
            <g-link to="/dashboard/">Home</g-link
            ><g-link
              v-if="article.courses.length !== 0"
              :to="`/courses/${article.courses[0].id}`"
            >
              <span class="mx-5"> / </span>{{ article.courses[0].name }}</g-link
            >
          </p>
           <!-- END: BREADCRUMB -->

          <div class="px-12 mb-12 md:px-24">

            <!-- START: TITLE -->
            <p class="mb-5 article-title">{{ article.title }}</p>
            <!-- END: TITLE -->

            <!-- START: Second Row -->
                    <div class="grid grid-cols-1 md:gap-2 md:grid-cols-2 md:container ">
<!-- Start: Article Author and Dates -->
              <div class="flex items-center w-full">
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
              <!-- End: Article Author and Dates -->

              <!-- Start:Icons -->
              <div class="w-full">
                <div class="flex items-center mt-6 md:mt-0 md:float-right">
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
                    ></a>

<button class="flex items-center px-6 py-2 font-bold text-teal-500 bg-transparent border border-teal-500 border-solid rounded-full outline-none hover:bg-teal-500 hover:text-white focus:outline-none" type="button">
   Bookmark <g-image :src="require('@/assets/img/icons/Bookmark.svg')" class="ml-2"/>
</button>
                </div>
              </div>
              <!-- End:Icons -->
        </div>

        
            <div class="flex">
              
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
          <div class="px-12 overflow-hidden md:px-24" >
            <VueMarkdown
              class="mb-24 article-content "
              style="font-family:Objectivity; font-weight:normal"
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

          <!-- START: NEXT ARTICLES & COMMENTS SECTION-->
        <div class="grid grid-cols-1 px-12 md:px-24 md:gap-4 md:grid-cols-2 md:container ">
          <CommentSection class="block mb-24 md:hidden" :comments="article.comments"/>
          <NextArticlesSection :nextArticles="nextArticles"/>
          <CommentSection class="hidden md:block" :comments="article.comments"/>
        </div>
          <!-- END: NEXT ARTICLES & COMMENTS SECTION-->
          </div>
      <!-- END:ARTICLE -->
      </div>
    </section>
  </Layout>
</template>

<script>
import Loader from "../../components/Loader";
import NextArticlesSection from "../../components/auth/articles/NextArticlesSection";
import CommentSection from "../../components/auth/articles/CommentSection";
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
    NextArticlesSection,
    CommentSection,
  },

  data() {
    return {
      title: "Loading...",
      article: null,
      nextArticles: null,
    };
  },

  async mounted() {
    const data = await this.getArticle(this.$route.params.id);
    this.article = data;
    this.title = data.title;

    this.nextArticles = await this.getNextArticles();

    this.$store.dispatch("articlesStore/getArticles");
    this.$store.dispatch("coursesStore/getCourses");
    this.$store.dispatch("topicsStore/getTopics");
  },

  watch: {
    "$route.params.id": async function (id) {
      this.article = await this.getArticle(id);
      this.nextArticles = await this.getNextArticles();
      this.title = this.article.title;
    },
  },

  methods: {
    async getArticle(id) {
      const { data } = await axios.get(
        `https://calm-everglades-39473.herokuapp.com/articles/${id}`
      );
      return data;
    },

    async getNextArticles() {
      let i = 0;
      const selectedData = [];
      while (i < 3) {
        selectedData.push(
          this.$store.state.articlesStore.articles[
            Math.floor(
              Math.random() * this.$store.state.articlesStore.articles.length
            )
          ]
        );
        i++;
      }
      return selectedData;
    },

    formatDate(date) {
      return moment(date).format("MMMM DD, YYYY");
    },
  },
};
</script>

<style scoped>
.article-title {
  font-family: Objectivity;
  font-weight: bold;
  font-style: normal;
  font-size: 48px;
  line-height: 64px;
  color: #151316;
}

.article-content {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #151316;
  line-height: 40px;
}

.article-sources {
  font-family: Objectivity;
  font-style: normal;
  font-weight: italic;
  font-size: 24px;
  color: #8c8c8c;
  line-height: 40px;
}

.author-image {
  width: 65px;
  height: 65px;
}

.author-name {
  font-family: Objectivity;
  font-weight: bold;
  font-style: normal;
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

.breadcrumb {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #dbdad5;
}
</style>
