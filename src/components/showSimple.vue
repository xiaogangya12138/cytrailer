<!-- 简介展示 -->
<template>
  <div>
    <!-- 猜你喜欢 -->
    <div>
      <div class="icon_Hot">
        <div class="icon_Hot_Box">
          <van-icon style="top: 0.05rem" name="star-o" color=" #1df6f6" />
          <span>猜你喜欢</span>
        </div>
      </div>
      <!-- 展示 -->
      <div style="width: 100%; padding-bottom: 100px;" >
        <div class="showSimple"  v-for="(item,index) in showSimpleData" :key="index" >
          <div style="height:3.632rem; margin-bottom: 30px;" >
            <!-- 内容 -->
            <div class="showSimple_l"  @click="pushDetails(index)">
              <!-- 图片 -->
              <div class="showSimple_imge">
                <img style="height: 100%; width: 100%; border-radius: 5px;" :src="item.cover" alt="">
              </div>
              <!-- 文字介绍 -->
              <div class="showSimple_text">
                <div class="showSimple_text_name">
                  <span>{{item.name}}</span>
                </div>
                <div>
                  <van-rate v-model="showValue" allow-half void-icon="star" color="#ffd21e" void-color="#eee" :size="4"
                    :gutter='7' />
                </div>
                <div class="showSimple_text_info">
                  <span>{{item.basicInfo}}</span>
                </div>
                <div class="showSimple_release" style="color: #9D9D9D;">
                  <span>{{item.releaseDate}}</span>
                </div>
              </div>
            </div>
            <div class="showSimple_r" @click="donghua" >
              <div class="showSimple_r_zan" >
                <div class="showSimple_r_zan_imge">
                  <van-icon name="thumb-circle" :size="40" color="#FFBE33" />
                </div>
                <div class="showSimple_r_zan_text">
                  <span>赞一下</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 点赞 -->
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
        showSimpleData: '',
        showValue: Number(''),
      };
    },
    // "https://www.imovietrailer.com/superhero/index/guessULike?qq=2478029182"
    methods: {
      // 评分赋值的问题
      ShowSimpleDate() {
        server.gitShowSimpleDate().then((res) => {
          this.showSimpleData = res;
          // this.showValue = Number(showSimpleData.score / 2)
          // console.log(res);
          // console.log(this.showSimpleData[1].score);

          this.showSimpleData.forEach(data => {
                this.showValue = Number(data.score / 2)
                // console.log(this.showValue);
            });

          // for (let i = 0; i < this.showSimpleData.length; i++) {
          //   this.showValue = parseFloat(this.showSimpleData[i].score / 2) ;
            
          // }
          // console.log(this.ShowSimpleDate);
          //   this.showValue = parseFloat(this.ShowSimpleDate.score / 2);
  
          //   // console.log(fore this.showSimpleData.score);
          //  
        })
      },
      pushDetails(index){
        this.$router.push('/details/' + this.showSimpleData[index].id)
        // console.log(this.showSimpleData[index].id);
        console.log(this.showSimpleData[index]);
      },
      // 添加点击动画
      donghua(){
        console.log('点击了赞一下');
      }
    },
    mounted() {
      this.ShowSimpleDate()
    },
  };

</script>
<style scoped>
  .icon_Hot {
    width: 100%;
    height: 0.825rem;
    margin-top: 0.220rem;
    margin-bottom: 0.220rem;
  }

  .icon_Hot_Box {
    line-height: 0.825rem;
    font-size: 0.5rem;
    padding-left: 0.18rem;
    font-weight: 600;
  }

  /* 展示 */
  .showSimple {
    width: 100%;
    font-family: 微软雅黑;
    margin-bottom: .125rem;
  }

  .showSimple_l {
    float: left;
    width: 7.915rem;
    border-right: 1px dashed #ccc;
    border-width: 5px;
  }

  .showSimple_imge {
    float: left;
    width: 2.825rem;
    height: 3.625rem;
  }

  .showSimple_text {
    float: left;
    margin-left: 0.250rem;
    width: 4.565rem;
    /* width: 100%; */
  }

  .showSimple_text_name span {
    font-size: .425rem;
    font-weight: 400;
    font-family: 微软雅黑;
    color: #676767;
  }

  .showSimple_text_info {
    width: 100%;
    font-size: .360rem;
    white-space: break-word;
    font-family: 微软雅黑;
    color: #A1A1A1;
    /* #818181 */

  }

  .showSimple_release span {
    width: 100%;
    font-size: .348rem;
    white-space: break-word;
    font-family: 微软雅黑;
    color: #9D9D9D;
  }

  /* 点赞 */
  .showSimple_r {
    float: left;
    width: 2.018rem;
  }

  .showSimple_r_zan {
    width: 2.018rem;
    height: 3.632rem;

  }

  .showSimple_r_zan_imge {
    display: inline-block;
    width: .625rem;
    height: .625rem;

    margin-left: 0.44667rem;
    margin-top: 50%;
  }
.showSimple_r_zan_text {
  width: 1.025rem;
  height: .625rem;
  margin: auto;
color: #FFBE33;
}
</style>
