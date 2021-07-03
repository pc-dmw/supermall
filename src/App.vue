<template>
  <div id="app">
    <!-- exclude 不保留Detail的状态，组件要有自己的name -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from "components/content/mainTabbar/mainTabbar.vue";
export default {
  name: "App",
  components: {
    maintabbar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>
