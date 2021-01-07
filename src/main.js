// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 视频组件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
// 配置组件
import {
  Button,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon,
  Rate,
  Toast,
  NavBar
} from 'vant';
// vant 组件
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Rate);
Vue.use(Toast);
Vue.use(NavBar);
// 视频组件
Vue.use(VideoPlayer)
// 配置flexible
import 'lib-flexible/flexible.js'
// 配置axiso
import axios from "axios"
Vue.prototype.axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
