<template>    
    <div>
    <MHead>首页</MHead>
    <div class="content">
      <Swiper :swiperSlides='silders'></Swiper>
    </div>
    </div>
</template>
<script>
import MHead from '../base/MHead.vue';
import Swiper from '../base/Swiper.vue';
import {getSlider} from '../api'
export default {
  async created(){
    // 给data起别名 对象中的属性名字必须和得到的结果名字一致
    let {data:silders} = await getSlider();
    // 将获取的数据放到sliders中
    this.silders = silders;
  },
  data() {
    return {
      silders:[]
    };
  },
  methods: {},
  computed: {},
  components: {
    MHead,Swiper
  }
};
</script>
<style scoped>

</style>
