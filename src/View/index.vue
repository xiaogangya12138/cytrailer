<!--  -->
<template>
  <div>
<div>
  <!-- 轮播组件 -->
  <shufflingShow></shufflingShow>
</div>
  </div>
</template>

<script>
  // 引入组件
  
import shufflingShow from '@/components/shufflingShow'  //轮播图
export default {
  data() {
    return {

    };
  },
  // 组件
  components:{
    // 轮播图
    shufflingShow,
  }

}

</script>
<style scoped>

</style>
