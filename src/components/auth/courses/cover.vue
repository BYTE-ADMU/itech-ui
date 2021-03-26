<template>
  <div class="w-full mb-12">
    <unauthBookmarkModal
      id="unauthBookmark"
      class="top-0 left-0 z-50 hidden"
      style="height: 110vh; width: 100vw"
    />
    <div :class="coverStyle" class="z-0">
      <g-image :src="botStyle" class="bitBot" />
      <div
        class="w-full h-full pt-10 pl-10 pr-20 lg:pt-16 lg:pl-56 sm:pr-32 lg:pr-12"
      >
        <div class="hidden float-right lg:block" v-if="isAuthenticated">
          <button
            v-if="!isBooked"
            @click="saveCourse"
            class="flex items-center px-6 py-2 overflow-x-hidden font-bold text-white bg-transparent border border-white border-solid rounded-full outline-none hover:border-teal-500 focus:outline-none bookmark-hover"
            type="button"
          >
            <span>Bookmark</span>
            <g-image
              :src="require('@/assets/img/icons/BookmarkWhite.svg')"
              class="ml-2 bookmark-icon"
            />
          </button>
          <button
            v-else
            @click="removeCourse"
            class="flex items-center px-6 py-2 font-bold text-white bg-teal-500 border border-teal-500 border-solid rounded-full outline-none focus:outline-none bookmark-hover"
            type="button"
          >
            <span>Bookmarked</span>
            <g-image
              :src="require('@/assets/img/icons/Bookmark.svg')"
              class="ml-2 bookmark-icon"
            />
          </button>
        </div>
        <div class="hidden float-right lg:block" v-else>
          <button
            v-if="!isBooked"
            @click="openModal"
            class="flex items-center px-6 py-2 overflow-x-hidden font-bold text-white bg-transparent border border-white border-solid rounded-full outline-none hover:border-teal-500 focus:outline-none bookmark-hover"
            type="button"
          >
            <span>Bookmark</span>
            <g-image
              :src="require('@/assets/img/icons/BookmarkWhite.svg')"
              class="ml-2 bookmark-icon"
            />
          </button>
        </div>
        <div>
          <h2
            class="text-white truncate select-none text-feature font-neuemachina lg:mb-2"
          >
            {{ course.name }}
          </h2>

          <h3
            class="mb-2 text-base text-white font-objectivity articlesBold lg:hidden"
          >
            Articles
          </h3>
          <p
            class="mb-10 overflow-y-hidden text-sm text-white font-objectivity overflow-ellipsis"
            style="max-height: 160px"
          >
            {{ course.description }}
          </p>

          <div class="block lg:hidden">
            <button
              v-if="!isBooked"
              @click="saveCourse"
              class="flex items-center px-6 py-2 overflow-x-hidden font-bold text-white bg-transparent border border-white border-solid rounded-full outline-none hover:border-teal-500 focus:outline-none bookmark-hover"
              type="button"
            >
              <span>Bookmark</span>
              <g-image
                :src="require('@/assets/img/icons/BookmarkWhite.svg')"
                class="ml-2 bookmark-icon"
              />
            </button>
            <button
              v-else
              @click="removeCourse"
              class="flex items-center px-6 py-2 font-bold text-white bg-teal-500 border border-teal-500 border-solid rounded-full outline-none focus:outline-none bookmark-hover"
              type="button"
            >
              <span>Bookmark</span>
              <g-image
                :src="require('@/assets/img/icons/Bookmark.svg')"
                class="ml-2 bookmark-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import unauthBookmarkModal from "../../unauth/unauthBookmarkModal";

export default {
  name: "cover",
  props: ["course", "isBooked"],
  components: {
    unauthBookmarkModal,
  },
  computed: {
    botStyle() {
      const hacker = require("../../../assets/img/bitbots/bbhacker.svg");
      const hipster = require("../../../assets/img/bitbots/bbhipster.svg");
      const hustler = require("../../../assets/img/bitbots/bbhustler.svg");
      switch (this.course.categories[0].name) {
        case "Hacker":
          return hacker;
        case "Hipster":
          return hipster;
        case "Hustler":
          return hustler;
        default:
          return hacker;
      }
    },
    coverStyle() {
      const defaultStyle = "w-full heighter rounded-xl relative";
      switch (this.course.categories[0].name) {
        case "Hacker":
          return `hackerStyle ${defaultStyle}`;
        case "Hipster":
          return `hipsterStyle ${defaultStyle}`;
        case "Hustler":
          return `hustlerStyle ${defaultStyle}`;
        default:
          return `hackerStyle ${defaultStyle}`;
      }
    },

    isAuthenticated() {
      return this.$store.state.userStore.isAuthenticated;
    },

    user() {
      if (this.isAuthenticated) {
        const data = this.$store.state.userStore.user;
        return data;
      }
      return null;
    },
  },
  methods: {
    saveCourse() {
      this.user.courses.push(this.course);
      this.$store.dispatch("userStore/updateUser", this.user);
    },

    removeCourse() {
      this.user.courses = this.user.courses.filter(
        (course) => course.id !== this.course.id
      );
      this.$store.dispatch("userStore/updateUser", this.user);
    },

    openModal() {
      const modal = document.getElementById("unauthBookmark");
      modal.classList.remove("hidden");
    },
  },
};
</script>
<style scoped >
.bitBot {
  position: absolute;
  width: 189px;
  height: 193.13px;
  top: 80px;
}
.heighter {
  height: 230px;
}
.hackerStyle {
  background: linear-gradient(283.99deg, #4e6afa 7.28%, #9298ff 100%);
}
.hipsterStyle {
  background: linear-gradient(283.99deg, #ff7b92 7.28%, #e13894 100%);
  border-radius: 10px;
}
.hustlerStyle {
  background: linear-gradient(283.99deg, #b0ca88 7.28%, #70b9a2 100%);
  border-radius: 10px;
}
.text-feature {
  font-size: 56px;
  line-height: 50px;
}

.articlesBold {
  font-weight: 700;
}

@media screen and (max-width: 1023px) {
  .heighter {
    height: 320px;
  }

  .bitBot {
    top: 170px;
    right: 0;
  }
}

@media screen and (max-width: 640px) {
  .text-feature {
    font-size: 46px;
  }

  .heighter {
    height: 340px;
  }

  .bitBot {
    width: 140px;
    top: 200px;
  }
}

@media screen and (max-width: 475px) {
  .text-feature {
    font-size: 36px;
    line-height: 40px;
  }
}

.bookmark-hover,
.bookmark-hover > span,
.bookmark-hover > .bookmark-icon {
  transition: 0.2s ease-in-out;
  -webkit-transition: 0.2s ease-in-out;
  -moz-transition: 0.2s ease-in-out;
  -o-transition: 0.2s ease-in-out;
}

.bookmark-hover:hover {
  width: 151px;
  height: 42px;
  background: #38b2ac;
}

.bookmark-hover:hover > .bookmark-icon {
  transform: translateX(32px);
  filter: brightness(500%);
}

.bookmark-hover:hover > span {
  display: none;
}
</style>