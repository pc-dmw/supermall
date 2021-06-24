<template>
  <!-- <div> -->
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- <slot name="item-text"></slot> -->
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      // isActive: false,
    };
  },
  props: {
    path: String,
    itemColor: {
      type: String,
      default: "rgba(77, 220, 245, 0.925)",
    },
  },
  methods: {
    itemClick() {
      // console.log(this.$router);
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.isActive ? { color: this.itemColor } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* line-height: 49px; */
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .active {
  color: itemColor;
} */
</style>