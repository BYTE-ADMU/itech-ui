//START: TEMPLATE
<template>
  <Layout>
    <!-- ROOT -->
    <div
      class="container flex flex-col w-screen min-h-screen py-20 mx-auto mb-24"
    >
      <div class="flex items-start justify-between w-full">
        <!-- Featured & New On ITECH -->
        <div class="flex flex-col w-9/12">
          <featureEntry
            v-for="article in featuredArticle"
            v-bind:key="article.node.id"
            v-bind:article="article"
          />

          <h3 class="mx-2 mt-12 text-xl font-bold uppercase font-objectivity">
            New On ITECH
          </h3>
          <div class="flex justify-between mt-1 mb-24">
            <articleEntry
              v-for="article in newOnItech"
              v-bind:key="article.node.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
        <!-- Topic of the Week -->
        <playlistTall />
      </div>

      <hr class="mb-12" />

      <!-- Featured Courses & Playlists-->
      <div class="flex w-full mt-4">
        <div class="w-3/12">
          <h2 class="p-2 mx-auto text-4xl font-neuemachina">
            Featured Courses & Playlists ✨
          </h2>
        </div>
        <playlistEntry />
        <playlistEntry />
        <playlistEntry />
      </div>
      <!-- Hacker -->
      <div class="flex items-center w-full mt-8 mb-8">
        <bitbotFeature bb3="hacker" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="flex justify-between mb-2">
            <articleHeader />
            <articleHeader />
            <articleHeader />
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <articleEntry
              v-for="article in threeHackerArticles"
              v-bind:key="article.node.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- Hipster -->
      <div class="flex items-center w-full mt-8 mb-8">
        <bitbotFeature bb3="hipster" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="flex justify-between mb-2">
            <articleHeader />
            <articleHeader />
            <articleHeader />
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <articleEntry
              v-for="article in threeHipsterArticles"
              v-bind:key="article.node.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- Hustler -->
      <div class="flex items-center w-full mt-8 mb-8">
        <bitbotFeature bb3="hustler" />
        <div class="flex flex-col w-9/12">
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Topics
          </h5>
          <div class="flex justify-between mb-2">
            <articleHeader />
            <articleHeader />
            <articleHeader />
          </div>
          <h5 class="mx-2 mb-1 font-bold uppercase text-md font-objectivity">
            Articles
          </h5>
          <div class="flex justify-between">
            <articleEntry
              v-for="article in threeHustlerArticles"
              v-bind:key="article.node.id"
              v-bind:article="article"
            ></articleEntry>
          </div>
        </div>
      </div>
      <!-- END COMPONENTS -->
    </div>
  </Layout>
</template>
//END: TEMPLATE

// START: PAGE QUERY
<page-query>
  query {
    allArticles(order:DESC){
      edges{
        node{
          publishedDate,
          id,
          category,
          title,
          author,
          thumbnailImage,
        }
      }
    },
    newOnItech:allArticles(order:DESC,limit:3){
    edges{
      node{
        publishedDate,
        id,
        title,
        author,
        thumbnailImage
      }
    }
  }
}

</page-query>
// END : PAGE QUERY

//START: SCRIPT
<script>
import articleEntry from "../components/auth/dashboard/articleEntry";
import featureEntry from "../components/auth/dashboard/featureEntry";
import playlistEntry from "../components/auth/dashboard/playlistEntry";
import playlistTall from "../components/auth/dashboard/playlistTall";
import bitbotFeature from "../components/auth/dashboard/bitbotFeature";
import articleHeader from "../components/auth/dashboard/articleHeader";

export default {
  name: "Dashboard",
  metaInfo: {
    title: "Dashboard",
  },
  data() {
    return {
      newOnItech: [],
      articles: [],
    };
  },

  mounted() {
    this.newOnItech = this.$page.newOnItech.edges;
    this.articles = this.$page.allArticles.edges;
  },

  computed: {
    hackerArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hacker");
      });
    },
    hipsterArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hipster");
      });
    },
    hustlerArticles() {
      return this.articles.filter((article) => {
        return article.node.category.includes("Hustler");
      });
    },

    featuredArticle() {
      return this.articles.slice(0, 1);
    },

    threeHackerArticles() {
      return this.hackerArticles.slice(0, 3);
    },
    threeHipsterArticles() {
      return this.hipsterArticles.slice(0, 3);
    },
    threeHustlerArticles() {
      return this.hustlerArticles.slice(0, 3);
    },
  },

  components: {
    articleEntry,
    featureEntry,
    playlistEntry,
    playlistTall,
    bitbotFeature,
    articleHeader,
  },
};
</script>
//END: SCRIPT

<style>
div > .tg {
  filter: brightness(80%);
}

.h-pic {
  height: 8.5rem;
}

.articleEntry-topic {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  /* or 138% */

  /* ITECH Teal */

  color: #64c0c1;
}

.articleEntry-title {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  text-align: left;
}

.articleEntry-author {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
}
</style>



