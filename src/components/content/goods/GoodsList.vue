<template>
  <div class="goods">
    <!-- <slot></slot> -->
    <goods-listitem
      v-for="(item, index) in goods"
      :key="index"
      :goodsitem="item"
    />
    <!-- {{ goods }} -->
  </div>
</template>

<script>
import GoodsListitem from "./GoodsListitem.vue";
export default {
  components: {
    GoodsListitem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
</style>