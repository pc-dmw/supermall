<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      bscroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    BscrollTo(x, y, time = 300) {
      //es6语法  形参默认值
      //scrollTo(X坐标,Y坐标,滚动时间)    将显示区的内容滚动到指定位置
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp(); //允许多次上拉加载更多
    },
    refresh() {
      this.bscroll && this.bscroll.refresh(); //刷新bscroll
      // console.log(123);
    },
    getScrollY() {
      return this.bscroll ? this.bscroll.y : 0; //返回当前位置
    },
  },
  mounted() {
    //创建Bscroll对象
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true, //控制类似于div的元素是否可以点击
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //监听滚动的位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.bscroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }
    //监听上拉加载更多
    if (this.pullUpLoad) {
      this.bscroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
};
</script>

<style scoped>
</style>>
