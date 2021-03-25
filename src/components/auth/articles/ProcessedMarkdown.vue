<template>
  <div class="markdown" v-html="processedMarkdown"></div>
</template>

<script>
import marked from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default {
  props: ["markdown"],
  computed: {
    processedMarkdown() {
      return marked(this.markdown, {
        highlight(md) {
          return highlight.highlightAuto(md).value;
        },
      });
    },
  },
};
</script>

<style scoped>
::v-deep code:before {
  content: "" !important;
}

::v-deep pre code {
  display: block;
  overflow-x: auto;
  padding: 10px;
  background: #282c34;
  -webkit-text-size-adjust: none;
  color: #abb2bf;
  border-radius: 10px;
  overflow-x: scroll;
  font-size: 18px;
  padding: 30px;
}

::v-deep pre code *::selection,
.hljs::selection {
  background: rgba(224, 146, 58, 0.35) !important;
}
</style>