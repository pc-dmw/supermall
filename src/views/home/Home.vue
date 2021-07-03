<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      class="tbcShow"
      v-show="isTabFixed"
    ></tab-control>
    <!-- 滚动区域 -->
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        ref="tabControl2"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        isTabFixed
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backtopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/HomeRecommendView.vue";
import Feature from "./childComps/Feature.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

import { debounce } from "common/utils.js";
// import BScroll from "better-scroll";
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", //当前选中类型
      isShowBackTop: false, //是否显示返回顶部
      tabOffsetTop: 0, //tabcontrol距离容器顶部的高度
      isTabFixed: false, //是否吸顶
      saveY: 0, //离开组件时保存Y值
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //网络请求方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.banner.list; //this指向为created里的this
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //每一次请求数据都让page加一
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },

    //事件监听相关方法
    tabClick(index) {
      // console.log(index);
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backtopClick() {
      //调用scroll组件里的BscrollTo方法
      this.$refs.scroll.BscrollTo(0, 0);
    },
    contentScroll(position) {
      //判断BackTop是否显示
      this.isShowBackTop = position.y < -1000;

      //判断TabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop - 44;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImageLoad() {
      //获取tabcontrol的offsetTop
      //所有的组件都有一个属性$el，用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },

  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  mounted() {
    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImageLoad", () => {
      //图片加载完成后重新获取数据
      refresh();
    });
  },
  destroyed() {
    //使用keep-alive后组件创建后不会销毁
    console.log(111);
  },

  activated() {
    //组件被激活
    this.$refs.scroll.BscrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //组件失去焦点
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
  },
};
</script>

<style>
.home-nav {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
  background: var(--color-tint);
  color: #fff;
}
/* #home {
  height: 1500px;
  padding-top: 44px;
} */
/* .tab-control {    
  position: sticky;
  top: 44px;
  z-index: 8;
  background: #fff;
} */
.wrapper {
  height: calc(100vh - 44px - 49px);
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  overflow: hidden;
}
/* .fixed {    better-scroll滚动原理是通过平移改变位置，固定定位也会被改变
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
.tbcShow {
  position: fixed;

  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
  background: #fff;
  box-shadow: 0 -1px 0.5px #fff;
}
</style>