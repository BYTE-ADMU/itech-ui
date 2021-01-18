<template lang="html">
  <Layout>
    <div  class="min-h-screen">

    

   
       <p class="article-title">{{$page.articles.title}}</p>

       <!-- START: Author and Article Information -->
                    
                    <div class="flex items-center text-black no-underline hover:underline">
                        <img alt="author-image" class="block rounded-full author-image" src="https://picsum.photos/32/32/?random">
                        <div class="ml-5">
                          <p class="author-name">{{$page.articles.author}}</p>
                          <p class="article-publishedDate">Published on {{formatDate($page.articles.publishedDate)}}</p>
                          <p class="article-lastEditedDate">Last Edited on {{formatDate($page.articles.lastEditedDate)}}</p>
                        </div>
                    </div>
      <!-- END: Author and Article Information -->

    <!-- <p>by {{$page.articles.author}} ({{formatDate($page.articles.date)}})</p>
    <p>Content: {{$page.articles.content}}</p> -->
    </div>
  </Layout>
</template>

<page-query>
query($id:ID!){
    articles(id:$id){
      id,
      title,
      author,
      publishedDate,
      lastEditedDate,
      content
    }
  }
</page-query>

<script>
import moment from "moment";
export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
    };
  },

  methods: {
    formatDate(date) {
      return moment(date).format("MMMM DD, YYYY");
    },
  },
};
</script>

<style scoped>
.article-title {
  position: absolute;
  width: 996px;
  height: 64px;
  left: 222px;
  top: 226px;
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 64px;
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
</style>

