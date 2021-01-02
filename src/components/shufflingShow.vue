<!-- shuffling 轮播图 -->
<template>
  <div>
    <div style="height: 6.05rem">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in shuffling" :key="index">
          <img style="width: 100%" v-lazy="item.image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门预告 模块 -->
    <!-- 图标 -->
    <div class="icon_Hot">
      <div class="icon_Hot_Box">
      <van-icon  name="fire-o" color="#ee0a24" />
      <span>热门预告</span>
      </div>
    </div>
    <!-- 展示 -->
    <div class="shuffling_Show">
      <div class="shuffling_Show_Low">
        123
      </div>
      <div class="shuffling_Show_Low">
        123
      </div>
      <div class="shuffling_Show_Low">
        123
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shuffling: "",
    };
  },
  methods: {
    gitshufflingData() {
      let url =
        "https://www.imovietrailer.com/superhero/index/carousel/list?qq=2478029182";
      this.axios.post(url).then(({ data, status }) => {
        this.shuffling = data.data;
        console.log(this.shuffling);
      });
    },
  },
  mounted() {
    this.gitshufflingData();
  },
};
</script>
<style  scoped>
.shuffling_Show {
  position: fixed;
  white-space: nowrap; 
  width: 100%;
  background-color: pink;
  overflow-y: scroll;
}
.shuffling_Show::-webkit-scrollbar {
  width: 0;
  height: 0;
  display: none;
}

.shuffling_Show_Low {
  display: inline-block;
  width: 400px;
  height: 100px;
  margin-left: 20px;
  background-color: blue;
}
.icon_Hot{
width: 100%;
height: 0.825rem;
/* margin: auto; */
}
.icon_Hot_Box{

  line-height: 0.825rem;
  font-size: .5rem;
 
}

</style>