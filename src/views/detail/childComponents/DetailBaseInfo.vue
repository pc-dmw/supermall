<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span
        v-if="goods.discount"
        class="discount"
        :style="{ background: goods.discountBgColor }"
        >{{ goods.discount }}</span
      >
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.discount {
  color: #fff;
  border-radius: 10px;
  padding: 5px;
  margin-left: 15px;
  font-size: 13px;
  vertical-align: super;
}
.info-other {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-bottom: 7px;
  font-size: 13px;
  border-bottom: 3px solid #f2f5f8;
}
.info-service {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  font-size: 13px;
  color: #222;
}
.info-service-item img {
  width: 14px;
  vertical-align: text-top;
  margin-right: 3px;
}
</style>