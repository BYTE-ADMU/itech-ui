<template lang="html">
  <Layout>
    <section class="flex justify-center min-h-screen my-24">
      <div class="w-full mx-64">

        <!-- START: ARTICLE INFO -->
        <div class="mx-24 mb-12">
          <!-- START: First Row -->
            <p class="mb-5 article-title">{{$page.articles.title}}</p> 
          <!-- END: First Row -->

          <!-- START: Second Row --><div class="flex">
            <!-- Start: Article Author and Dates -->
            <div class="w-full">
              <div class="flex items-center text-black no-underline">
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
          </div><!-- END: Second Row -->    
        </div>
        <!-- END: ARTICLE INFO -->

        <!-- START: FEATURED IMAGE -->
          <img class="w-full mb-24" :src="`http://localhost:1337${$page.articles.featuredImage}`" />
        <!-- END: FEATURED IMAGE -->
        
        <!-- START: ARTICLE CONTENT -->
          <VueMarkdown class="mb-24 article-content" :source="$page.articles.content"/>
          <VueMarkdown class="mb-24 article-sources" :source="$page.articles.sources"/>
        <!-- END: ARTICLE CONTENT -->

        <!-- START: DIVIDER -->
          <div class="flex justify-center w-full mb-24">
            <div>
              <svg width="214" height="10" viewBox="0 0 214 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="106" cy="5" r="5" fill="#151316"/>
                <circle cx="209" cy="5" r="5" fill="#151316"/>
                <circle cx="5" cy="5" r="5" fill="#151316"/>
              </svg>
            </div>
          </div>
        <!-- END: DIVIDER -->

        <!-- START: Second Row --><div class="flex">
            <!-- Start: Article Author and Dates -->
            <div class="w-full">
              <div class="flex items-center">
                <p class="whats-next">What's Next?</p>
                
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
          </div><!-- END: Second Row --> 



      </div>
    </section>
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
      content,
      sources,
      featuredImage,
      thumbnailImage,
    }
  }
</page-query>

<script>
import VueMarkdown from "vue-markdown";
import moment from "moment";
export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
    };
  },

  components: {
    VueMarkdown,
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

.article-content {
  font-family: HK Grotesk;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
}

.article-sources {
  font-family: HK Grotesk;
  font-style: italic;
  font-weight: bold;
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
</style>

