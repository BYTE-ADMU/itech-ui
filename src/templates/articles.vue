<template lang="html">
  <Layout>
    <h1>{{$page.articles.title}}</h1>
    <p>by {{$page.articles.author}} ({{formatDate($page.articles.date)}})</p>
    <p>Content: {{$page.articles.content}}</p>
  </Layout>
</template>

<page-query>
query($id:ID!){
    articles(id:$id){
      id,
      title,
      author,
      date,
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
