<!-- @format -->

<script>
export default {
  name: 'rate-star', // vue component name
  props: {
    //星星的数量
    count: {
      type: Number,
      default: 5
    },
    //星星之间的间距
    space: {
      type: Number,
      default: 5
    },
    //默认选中的星星
    defaultValue: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: 0 //评分的结果
    };
  },
  methods: {
    check(index) {
      this.value = index + 1;
    }
  },
  watch: {
    defaultValue(newVal) {
      this.value = newVal;
    },
    value(newVal) {
      this.$emit('onChange', newVal);
    }
  }
};
</script>

<template>
  <ul class="rate">
    <li v-for="(item,index) in count" 
        :key="index" 
        :class="value > index ? 'checked' : 'zero'" 
        @click="check(index)"
        :style="{'margin-right': space + 'px'}"></li>
  </ul>
</template>

<style scoped>
.rate {
  list-style: none;
}

.rate li {
  display: inline-block;
  width: 30px;
  height: 30px;
  list-style: none;
  background: url(./icons.png) no-repeat;
}

.rate li.checked,
.rate:hover li {
  background-position: 0px -30px;
}

.rate li:hover ~ li {
  background-position: 0 0;
}
</style>
