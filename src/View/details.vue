<!-- 详情主页面 -->
<template>
  <div>
    <div>
      <detailspageVideo v-bind:videoId="videoId"></detailspageVideo>
    </div>
  </div>
</template>

<script>
// 引入组件
import detailspageVideo from '@/components/detailspageVideo'
export default {
  // 接收所传来的值 写在data上面
  props: ["id"],
  data() {
    return {
      videoId:this.id,
    };
  },
  methods:{
    // 向子组件传值
    chuanzhi(){
      // console.log(this.videoId);
    }
  },
  mounted(){
    this.chuanzhi();
  },
  // 组件
  components:{
detailspageVideo,

  }
};
</script>
<style  scoped>
</style>