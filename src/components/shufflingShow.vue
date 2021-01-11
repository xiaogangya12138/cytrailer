<!-- shuffling 轮播图和热门超英-->
<template>
  <div>
    <div style="height: 6.05rem">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in shuffling" :key="index">
          <img style="width: 100%" v-lazy="item.image" @click="pushDetails(index)" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 热门超英 模块 -->
    <!-- 图标 -->
    <div class="icon_Hot">
      <div class="icon_Hot_Box">
        <van-icon style="top: 0.05rem" name="fire-o" color="#ee0a24" />
        <span>热门超英</span>
      </div>

      <!-- 展示 -->
      <div class="shuffling_Show">
        <div class="shuffling_Show_Low" v-for="(item, index) in chris" :key="index">
          <img style="width: 100%" :src="item.cover" @click="pushDetails(index)" />
          <div class="show_Text">
            <span>{{ item.name }}</span>
          </div>
          <!-- 评分 -->
          <div>
            <van-rate v-model="score" allow-half void-icon="star" void-color="#eee" color="#ffd21e" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import server from '../gtiDataManage/gitDataUrlManage.js'
  export default {
    data() {
      return {
        shuffling: "",
        chris: "",
        score: "",
      };
    },
    methods: {
      // 轮播图
      gitshufflingData() {
        server.gitshufflingDataImges().then(res => {
          this.shuffling = res
        })
      },
      // 热门超英
      gitShowData() {
        server.gitHotTrailerData().then((res) => {
          this.chris = res;
          //评分处理
          for (let i = 0; i < this.chris.length; i++) {
            this.score = parseFloat(this.chris[i].score) / 2;
          }
        })
      },
      // 点击跳转到详情页
      pushDetails(index) {
        // 携带id 进行跳转
        this.$router.push('/details/' + this.chris[index].id)

      }
    },
    mounted() {
      this.gitshufflingData();
      this.gitShowData();
      // this.getTrailer('marvel-1011');

    },
  };

</script>
<style scoped>
  .icon_Hot {
    position: relative;
    width: 100%;
    height: 5.525rem;
  }

  .icon_Hot_Box {
    line-height: 0.825rem;
    font-size: 0.5rem;
    padding-left: 0.18rem;
    font-weight: 600;
  }

  .shuffling_Show {
    /* position: fixed; */
    width: 100%;
    height: 4.525rem;
    margin-top: 0.04rem;
    white-space: nowrap;
    overflow-y: scroll;
  }

  .shuffling_Show::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }

  .shuffling_Show_Low {
    display: inline-block;
    width: 2.655rem;
    height: 3.125rem;
    padding-left: 0.18rem;
  }

  .show_Text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
