<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.background">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isload: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      //只发送一次事件
      if (!this.isload) {
        this.$emit("swiperImageLoad");
        this.isload = true;
      }
    },
  },
};
</script>

<style>
</style>