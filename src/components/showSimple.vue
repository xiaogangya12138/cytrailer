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
    <div>
        <div class="showSimple">
            <!-- 内容 -->
            <div>
                <!-- 图片 -->
                <div>
                    
                </div>
                <!-- 文字介绍 -->
                <div>
                    
                </div>
            </div>
            <!-- 点赞 -->
            <div>
                点赞
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style  scoped>
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
.showSimple{
width: 100%;
height: .625rem;
background-color: pink;
}
</style>