<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }} </span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>

      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top img {
  width: 40px;
  border-radius: 20px;
  box-shadow: 0 0 1px #666;
  vertical-align: middle;
}
.title {
  display: inline-block;
  color: #777;
  font-size: 16px;
  margin-left: 10px;
}
.shop-middle {
  margin-top: 15px;
  display: flex;
}
.shop-middle-item {
  flex: 1;
  text-align: center;
}
.shop-middle-left {
  border-right: 2px solid #f2f5f8;
  display: flex;
  align-items: center;
}
.shop-middle-left > div {
  flex: 1;
  color: #000;
}
.shop-middle-right table {
  margin-left: 25px;
  font-size: 14px;
}
.shop-middle-right table tr td {
  padding: 5px;
}
.score {
  color: #0a0;
}
.score-better {
  color: #c00;
}
.better {
  color: #fff;
  background: #0a0;
}
.better-more {
  color: #fff;
  background: #c00;
}
.shop-bottom {
  margin-top: 15px;
}
.enter-shop {
  margin: 0 auto;
  width: 50%;
  padding: 10px 0;
  border-radius: 20px;
  background: rgb(219, 236, 235);
  text-align: center;
}
</style>