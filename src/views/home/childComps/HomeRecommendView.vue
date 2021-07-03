<template>
  <div class="recommend">
    <div
      v-for="item in recommends"
      :key="item.background"
      class="recommenditem"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommenditem {
  flex: 1;
  font-size: 14px;
}
.recommenditem img {
  margin-bottom: 5px;
  width: 80px;
  height: 80px;
}
</style>