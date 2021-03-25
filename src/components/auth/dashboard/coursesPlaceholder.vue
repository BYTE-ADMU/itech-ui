<template>
  <div class="w-3/12 animate-pulse">
    <div
      class="relative m-5 mx-2 bg-gray-400 rounded-xl feature-height tg sm:m-1 course-hover"
    >
      <div class="absolute z-30 w-full h-full px-10 rounded-lg sm:px-5 group">
        <p
          class="relative py-1 mt-12 text-3xl text-white course-name w-min sm:text-lg md:text-md lg:text-2xl font-objectivity hover:opacity-100"
        >
        </p>
        <p
          class="absolute py-0 font-light text-white course-items sm:bottom-0 sm:py-3 hover:opacity-100"
        >
        </p>
      </div>
      <div
        class="relative object-cover w-full h-full rounded-xl tg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "coursesPlaceholder",
};
</script>

<style scoped>
.feature-height {
  height: 198px;
}

.course-name {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
}

.course-items {
  font-family: Objectivity;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
}

.course-hover {
  transition: .20s ease-in-out;
  -webkit-transition: .20s ease-in-out;
  -moz-transition: .20s ease-in-out;
  -o-transition: .20s ease-in-out;
}

.course-hover:hover {
  transform: scale(1.06);
  box-shadow: 0 10px 15px -2px rgba(0, 0, 0, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}
</style>



