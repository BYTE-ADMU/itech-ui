<template>
  <div class="shadow-md w-1/5 rounded-2xl">
    <div
      class="block w-40 minWidth mx-auto sm:mb-2"
    >
      <g-image
        :src="member.image.url"
        class="object-cover w-full h-full rounded-lg"
      />
    </div>
    <div class="p-3 my-auto text-center">
      <h1
        class="sm:mb-2 member-name text-black ..."
        >{{ member.name }}</h1
      >

      <p class="sm:mb-2 member-role">
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
.minWidth {
  min-width: 206px;
}

.member-name {
  font-family: Objectivity;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
}

.member-role {
  font-family: Objectivity;
  color: #40A5A6;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 8px;
}
</style>