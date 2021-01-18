<template>
  <Layout>
    <p v-for="article in $page.allArticles.edges" :key="article.node.id">
      {{ article.node.title }}

      <button @click="$router.push(`/articles/${article.node.id}`)">
        More Info
      </button>
    </p>
  </Layout>
</template>



<page-query>
  query {
    allArticles{
      edges{
        node{
          id,
          title,
        }
      }
    }
  }
</page-query>


<script>
import moment from "moment";

export default {
  metaInfo: {
    title: "Hello, world!",
  },

  data() {
    return {
      tab: 0,
    };
  },

  mounted() {
    this.events = this.$page.events.edges;
  },

  watch: {
    tab(val) {
      if (this.tab === 0) {
        this.showAllEvents();
      } else {
        this.showEventsByType(val);
      }
    },
  },

  methods: {
    showAllEvents() {
      this.events = this.$page.events.edges;
    },
    showEventsByType(val) {
      this.events = this.$page.events.edges.filter((edge) => {
        return edge.node.category === val;
      });
    },
    formatDate(date) {
      return moment(date).format("MMMM Do YYYY, h:mm a");
    },
    getEvents(searchText) {
      return this.events.filter((edge) => {
        return edge.node.title.toLowerCase().includes(searchText.toLowerCase());
      });
    },
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
