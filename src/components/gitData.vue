<!-- 全局配置获取数据 -->
<template>
  <div></div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    // 
    mounteds: {
      gitDataImage() {
        let url = 'https://www.imovietrailer.com/superhero/index/carousel/list?qq=2478029182'
        this.axios.post(url).then(({
          data,
          status
        }) => {
          return data.data
        })
      
      }

    },
    mounted(){
 
    }

  }

</script>
<style scoped>

</style>
