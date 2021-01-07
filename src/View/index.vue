<!-- 主页面 -->
<template>
  <div style="height: 1200px;">
<div>
  <!-- 轮播组件 -->
  <shufflingShow></shufflingShow>
  <!-- 热门预告 视频 -->
  
</div>
<div>
  <hotTrailer></hotTrailer>
</div>
<div>
  <!-- 简介展示 -->
  <!-- <showSimple></showSimple> -->
</div>
  </div>
</template>

<script>
  // 引入组件
  
import shufflingShow from '@/components/shufflingShow'  //轮播图
import hotTrailer from '@/components/hotTrailer' //热门预告 视频
import showSimple from '@/components/showSimple' //简介展示
export default {
  data() {
    return {

    };
  },
  // 组件
  components:{
    // 轮播图
    shufflingShow,
    // 热门预告 视频
    hotTrailer,
    // 简介展示
    showSimple,
  }

}

</script>
<style scoped>

</style>
