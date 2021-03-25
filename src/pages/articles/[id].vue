<template lang="html">
  <Layout v-bind:class="{ 'no-scroll': !isAuthenticated}">
    <!-- MODAL -->
    <unauthModal v-if="!isAuthenticated && article !== null" class="z-50"/>
    <!-- END MODAL -->
    <section class="flex justify-center min-h-screen pt-8 pb-32 md:pt-16">
      <div class="w-screen lg:px-10 2xl:px-0 md:container">
        <div class="pl-4 mb-4 sm:mb-10 sm:pl-12 md:mx-8 breadcrumb-container md:pl-0">
          <span>
              <button button @click="$router.go(-1)"
                class="pr-6 breadcrumb-text">
                  Back
              </button>
              <span v-if="article !== null" class="hidden pr-6 breadcrumb-slash md:inline">/</span>
              
              <button v-if="article !== null && article.courses.length !== 0" @click="$router.push(`/courses/${article.courses[0].id}`)"
                class="hidden pr-6 breadcrumb-text md:inline-block">
                  {{article.courses[0].name}}
              </button>
                            <button v-else-if="article !== null && article.categories.length !== 0" @click="$router.push(`/categories/${article.categories[0].name.toLowerCase()}`)"
                class="hidden pr-6 breadcrumb-text md:inline-block">
                  {{article.categories[0].name}}
              </button>
              <span v-if="article !== null" class="hidden pr-6 breadcrumb-slash md:inline">/</span>
              <span v-if="article !== null" class="hidden breadcrumb-text md:inline-block">{{ article.title }}</span>
            </span>
        </div>

        <!-- START:LOADER -->
        <div v-if="article === null" >
          <Loader/>
        </div>
        <!-- END:LOADER -->
        

      <!-- START:ARTICLE -->
        <div v-else >
          <div class="flex justify-center px-4 mb-12 md:px-24">
            <div class="w-full">

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

<button v-if="!isBooked" @click="saveArticle" class="flex items-center px-6 py-2 font-bold text-teal-500 bg-transparent border border-teal-500 border-solid rounded-full outline-none focus:outline-none bookmark-hover" type="button">
  <span>Bookmark</span> <g-image :src="require('@/assets/img/icons/Bookmark.svg')" class="ml-2 bookmark-icon"/>
</button>
<button v-else  @click="removeArticle" class="flex items-center px-6 py-2 font-bold text-white bg-teal-500 border border-teal-500 border-solid rounded-full outline-none focus:outline-none bookmark-hover" type="button">
  <span>Bookmarked</span> <g-image :src="require('@/assets/img/icons/Bookmark.svg')" class="ml-2 bookmark-icon"/>
</button>
                </div>
              </div>
              <!-- End:Icons -->
        </div>

        

            <!-- END: Second Row -->
          </div>
          </div>
          <!-- END: ARTICLE INFO -->

          <!-- START: FEATURED IMAGE -->

          <g-image
            class="w-full mb-8 overflow-auto md:mb-24"
            :src="article.featuredImage.url"
          />
          <!-- END: FEATURED IMAGE -->

          <!-- START: ARTICLE CONTENT -->
          <div class="px-4 overflow-hidden md:px-24 " >
              <ProcessedMarkdown class="mb-6 md:mb-12 article-content" :markdown="article.content"/>
              <ProcessedMarkdown class="mb-12 overflow-auto md:mb-24 article-sources":markdown="article.sources" />

              <!-- <VueMarkdown @rendered="syntaxHighlight" class="mb-6 md:mb-12 article-content" :source="article.content"/> -->
              <!-- <VueMarkdown class="mb-12 overflow-auto md:mb-24 article-sources":source="article.sources" /> -->
          </div>
          <!-- END: ARTICLE CONTENT -->

          <!-- START: DIVIDER -->
          <div class="flex justify-center w-full mb-12 md:mb-24">
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
        <div class="grid grid-cols-1 px-4 md:px-24 md:gap-4 md:grid-cols-2 md:container ">
          <CommentSection class="block mb-24 md:hidden" :article="article"/>
          <NextArticlesSection :nextArticles="nextArticles"/>
          <CommentSection class="hidden md:block" :article="article"/>
        </div>
          <!-- END: NEXT ARTICLES & COMMENTS SECTION-->
          </div>
      <!-- END:ARTICLE -->
      </div>
    </section>
  </Layout>
</template>

<script>
import unauthModal from "@/components/unauth/unauthModal";
import Loader from "@/components/Loader";
import NextArticlesSection from "@/components/auth/articles/NextArticlesSection";
import CommentSection from "@/components/auth/articles/CommentSection";
import ProcessedMarkdown from "@/components/auth/articles/ProcessedMarkdown";

import moment from "moment";

export default {
  name: "Article",
  metaInfo() {
    return {
      title: this.title,

      meta: [
        {
          name: "description",
          content:
            this.article === null
              ? this.$static.metadata.siteDescription
              : this.article.description,
        },
        // START: OPENGRAPH DATA
        {
          property: "og:title",
          content:
            this.article === null
              ? this.$static.metadata.siteName
              : this.article.description,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: this.$static.metadata.siteUrl,
        },

        {
          property: "og:image",
          content: this.article === null ? "" : this.article.thumbnailImage.url,
        },
        {
          property: "og:description",
          content:
            this.article === null
              ? this.$static.metadata.siteName
              : this.article.description,
        },
        // END: OPENGRAPH DATA

        // {
        //   name: "twitter:card",
        //   content: this.$page.post.image ? "summary_large_image" : "summary",
        // },
        // {
        //   name: "twitter:creator",
        //   content: `@${this.article.author.name}`,
        // },
      ],
    };
  },

  components: {
    Loader,
    ProcessedMarkdown,
    NextArticlesSection,
    CommentSection,
    unauthModal,
  },

  data() {
    return {
      title: "Loading...",
      article: null,
      nextArticles: null,
    };
  },

  async mounted() {
    const data = await this.$store.dispatch(
      "articlesStore/getArticle",
      this.$route.params.id
    );
    this.article = data;
    this.title = data.title;

    this.nextArticles = await this.getNextArticles();

    // this.$store.dispatch("articlesStore/getArticles");
    // this.$store.dispatch("coursesStore/getCourses");
    // this.$store.dispatch("topicsStore/getTopics");
    // this.$store.dispatch("categoriesStore/getCategories");
  },

  watch: {
    "$route.params.id": async function (id) {
      this.article = null;
      this.article = await this.$store.dispatch("articlesStore/getArticle", id);
      this.title = this.article.title;
      this.nextArticles = await this.getNextArticles();
    },
  },

  // START: COMPUTED
  computed: {
    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },

    user() {
      if (this.isAuthenticated) {
        const data = this.$store.state.userStore.user;
        return data;
      }
      return null;
    },

    isBooked() {
      if (this.isAuthenticated) {
        for (const eachArticle of this.user.articles) {
          if (this.article.id === eachArticle.id) {
            return true;
          }
        }
      }
      return false;
    },
  },
  // END: COMPUTED

  // START: METHODS
  methods: {
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

    saveArticle() {
      this.user.articles.push(this.article);
      this.$store.dispatch("userStore/updateUser", this.user);
    },

    removeArticle() {
      this.user.articles = this.user.articles.filter(
        (article) => article.id !== this.article.id
      );
      this.$store.dispatch("userStore/updateUser", this.user);
    },
  },
  // END: METHODS
};
</script>

<static-query>
    query {
        metadata {
          siteName,
          siteDescription,
          siteUrl,
        }
    }
</static-query>

<style scoped>
::v-deep .no-scroll {
  max-height: 100vh;
  overflow: hidden;
}

::v-deep .article-title {
  font-family: Objectivity;
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: #151316;
}

/* START: ARTICLE CONTENT */
::v-deep .article-content {
  font-family: Objectivity;
  color: #151316;
  font-size: 14px;
  line-height: 22px;
}

::v-deep .article-content > ul {
  list-style-type: circle;
}

::v-deep .article-content > h1 {
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
}

::v-deep .article-content > h2 {
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
}

::v-deep .article-content > h3 {
  font-weight: bold;
  font-style: normal;
  font-size: 14px;
}

::v-deep .article-content > p {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}

::v-deep .article-content > code {
  overflow-y: hidden;
  overflow-x: auto;
}
/* END: ARTICLE CONTENT */

/* START: ARTICLE SOURCES */
::v-deep .article-sources {
  font-family: Objectivity;
  color: #8c8c8c;
  line-height: 22px;
}

::v-deep .article-sources > h3 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
}

::v-deep .article-sources > p {
  font-style: italic;
  font-weight: normal;
  font-size: 14px;
  color: #8c8c8c;
}
/* END: ARTICLE SOURCES */

@media screen and (min-width: 1024px) {
  ::v-deep .article-title {
    font-size: 48px;
    line-height: 64px;
  }

  /* START: ARTICLE CONTENT */
  ::v-deep .article-content {
    font-size: 24px;
    line-height: 40px;
  }

  ::v-deep .article-content > h1 {
    font-size: 36px;
  }

  ::v-deep .article-content > h2 {
    font-size: 28px;
  }

  ::v-deep .article-content > h3 {
    font-size: 24px;
  }

  ::v-deep .article-content > p {
    font-size: 24px;
  }
  /* END: ARTICLE CONTENT */

  /* START: ARTICLE SOURCES */
  ::v-deep .article-sources {
    font-size: 24px;
    line-height: 40px;
  }
  ::v-deep .article-sources > h3,
  .article-sources > p {
    font-size: 24px;
    line-height: 40px;
  }
  /* END: ARTICLE SOURCES */
}

::v-deep .author-image {
  width: 65px;
  height: 65px;
}

::v-deep .author-name {
  font-family: Objectivity;
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
}

::v-deep .article-publishedDate {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #626262;
}

::v-deep .article-lastEditedDate {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}

::v-deep .breadcrumb,
.breadcrumb-text {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #dbdad5;
  /* display: inline-block; */
}

::v-deep .breadcrumb-slash {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #dbdad5;
}

::v-deep .breadcrumb-text {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

::v-deep .breadcrumb-text:hover {
  color: #83827f;
}

::v-deep .bookmark-hover,
.bookmark-hover > span,
.bookmark-hover > .bookmark-icon {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

::v-deep .bookmark-hover:hover {
  width: 151px;
  height: 42px;
  background: #38b2ac;
}

::v-deep .bookmark-hover:hover > .bookmark-icon {
  transform: translateX(32px);
  filter: brightness(500%);
}

::v-deep .bookmark-hover:hover > span {
  display: none;
}

@media screen and (max-width: 950px) {
  ::v-deep .breadcrumb-container {
    margin-top: 60px;
  }
}
</style>


