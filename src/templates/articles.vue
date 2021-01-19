<template lang="html">
  <Layout>
    <section class="flex justify-center h-screen my-24">
    <div class="flex w-3/4">
      <div class="w-full px-24">
        <!-- START: First Row -->
        <p class="mb-5 article-title">{{$page.articles.title}}</p>
        <!-- END: First Row -->

        <!-- START: Second Row -->
        <div class="flex">
        <!-- Start: Article Author and Dates -->
        <div class="w-full">
        <div class="flex items-center text-black no-underline hover:underline">
          <img alt="author-image" class="block rounded-full author-image" src="https://picsum.photos/32/32/?random">
          <div class="ml-5">
            <p class="author-name">{{$page.articles.author}}</p>
            <p class="article-publishedDate">Published on {{formatDate($page.articles.publishedDate)}}</p>
            <p class="article-lastEditedDate">Last Edited on {{formatDate($page.articles.lastEditedDate)}}</p>
          </div>
        </div>  
        </div>
        <!-- End: Article Author and Dates -->

        <!-- Start:Icons -->
        <div class="w-full">
        <div class="flex float-right">
            <a href="https://twitter.com/byteadmu" target="_blank" class="mx-2"
              ><img :src="require('@/assets/img/icons/Twitter_Outline.svg')"
            /></a>
            <a
              href="https://www.facebook.com/byteadmu/"
              target="_blank"
              class="mx-2"
              ><img :src="require('@/assets/img/icons/Facebook_Outline.svg')"
            /></a>
                        <a
              href="https://www.facebook.com/byteadmu/"
              target="_blank"
              class="mx-2"
              ><img :src="require('@/assets/img/icons/Bookmark.svg')"
            /></a>
          </div>
          </div>
        <!-- End:Icons -->
        </div>
        <!-- END: Second Row -->      
      </div>
    <!--END: First Row -->

      
    </div>  
  </section>


<!-- FIRST ROW -->
<p class="article-title">{{$page.articles.title}}</p>
<!-- FIRST ROW -->


                    
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

