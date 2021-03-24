<template>
  <div class="flex lg:block shadow-md rounded-2xl px-3 sm:px-6 lg:px-0 pt-2 my-1 lg:my-5 member-card">
    <div
      class="flex w-16 sm:w-40 sm:h-48 lg:mx-auto mb-2 relative overflow-y-hidden memberImg-container"
    >
      <g-image
        :src="member.image.url"
        class="object-cover lg:mx-auto w-full sm:h-full member-img"
      />
    </div>
    <div class="px-3 pt-1 lg:pb-6 my-auto mx-auto text-center">
      <h1
        class="mb-1 sm:mb-3 member-name text-black ..."
        >{{ member.name }}</h1
      >

      <p class="mb-1 sm:mb-2 member-role">
        {{ member.role }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "teamMemberCard",
  props: [
    "member"
  ]
}
</script>

<style>
.member-card {
  min-width: 255px; max-width: 255px
}

.member-name {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 18px;
}

.member-role {
  font-family: Objectivity;
  color: #40A5A6;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 8px;
}

@media screen and (max-width:1024px) {
  .member-card {
    width: 440px;
    max-width: none;
    min-width: none;
  }
}

@media screen and (max-width:640px) {
  .member-card {
    min-height: 152px;
  }

  .memberImg-container {
    width: 96px;
  }
}

@media screen and (max-width:470px) {
  .member-card {
    max-height: 88px;
    min-height: 88px;
  }

  .memberImg-container {
    width: 64px;
    position: relative;
  }

  .member-img {
    position: absolute;
    top: 0;
  }
  
  .member-name {
    font-size: 14px;
  }

  .member-role {
    font-size: 10px;
  }
}
</style>