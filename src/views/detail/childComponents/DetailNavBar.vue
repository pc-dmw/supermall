<template>
  <div>
    <nav-bar>
      <div slot="left" class="backbtn" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          @click="itemClick(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </div>
      </div></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-evenly;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
.backbtn {
  text-align: center;
}
.backbtn img {
  vertical-align: middle;
}
</style>