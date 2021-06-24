<template>
  <div id="app">
    <router-view></router-view>
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
