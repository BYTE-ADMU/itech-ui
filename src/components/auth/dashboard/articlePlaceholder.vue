<template>
  <div
    class="flex w-1/3 p-2 rounded-lg bg-gray-400 shadow-md sm:flex-col md:mb-6 article-hover animate-pulse"
  >
    <!-- PUT IMAGE AND DETAILS INSIDE -->
    <div
      class="block w-1/3 rounded-lg minWidth sm:w-full sm:mb-2 h-pic"
    >
      <div
        class="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div class="p-3 my-auto overflow-hidden">
      <div
        class="sm:mb-2 articleEntry-topic truncate ..."
        ></div
      >

      <p class="sm:mb-2 articleEntry-title">
        
      </p>
      <p class="sm:mb-2 articleEntry-author"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "articlePlaceholder",
};
</script>
<style scoped>
.hackerColor {
  color: #4e6afa;
}
.hipsterColor {
  color: #f3748a;
}
.hustlerColor {
  color: #40a5a6;
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

.minWidth {
  min-width: 206px;
}

.article-hover {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.article-hover:hover {
  transform: scale(1.06);
  box-shadow: 0 5px 7px 1px rgba(0, 0, 0, 0.1),
    0 3px 5px 1px rgba(0, 0, 0, 0.06);
}

@media screen and (min-width: 640px) and (max-width: 1024px) {
  .minWidth {
    min-width: 150px;
  }
}

@media screen and (max-width: 425px) {
  .articleEntry-title {
    font-size: 14px;
    line-height: 18px;
  }

  .minWidth {
    min-width: 130px;
  }
}
</style>