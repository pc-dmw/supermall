<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabcontrolitem"
      :class="{ active: index == currentIndex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 44px;
}
.tabcontrolitem {
  flex: 1;
}
.tabcontrolitem span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>