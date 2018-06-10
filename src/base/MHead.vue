<template>
    <div class="header">
      <i class="iconfont icon-fanhui"></i>
        首页      
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  components: {}
};
</script>
<style scoped lang="less">
  .header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: skyblue;
    font-weight: 700;
    i{
      position: absolute;
      left: 15px;
    }
  }
</style>
 