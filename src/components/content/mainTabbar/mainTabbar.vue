<template>
  <Tabbar>
    <Tabbaritem path="/home">
      <!-- css样式里引入别名要在前面加~ -->
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/home_active.png"
        alt=""
      />
      <div slot="item-text">首页</div>
    </Tabbaritem>
    <Tabbaritem path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/category_active.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </Tabbaritem>
    <Tabbaritem path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/shopcart_active.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </Tabbaritem>
    <Tabbaritem path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/profile_active.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </Tabbaritem>
  </Tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/tabbar.vue";
import Tabbaritem from "components/common/tabbar/tabbaritem.vue";
export default {
  components: {
    Tabbar,
    Tabbaritem,
  },
};
</script>

<style>
</style>