<template>
    <div class="header">
      <slot></slot>
      <i class="iconfont icon-fanhui"
          v-if="back"
          @click="goBack"   
      ></i>
            
    </div>
</template>
<script>
export default {
  props:{
    back:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  },
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
      font-size: 22px;
    }
  }
</style>
 