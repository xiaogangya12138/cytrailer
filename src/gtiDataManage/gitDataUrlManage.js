// 引入axios
import axios from 'axios'
// 接口
const BASEURL = "https://www.imovietrailer.com/superhero" //注意斜杠的问题
// 设置请求头
function request(config) {

  const instance = axios.create({
    baseURL: BASEURL,
    timeout: 8000
  })
  return instance(config)
}
// 
// 获取轮播图数据  "https://www.imovietrailer.com/superhero/index/carousel/list?qq=2478029182";
// 函数 轮播图数据
function gitshufflingDataImges() {
  // 两个参数成功resolve 失败reject
  return new Promise((resolve, reject) => {
    // 写参数 请求 request
    request({
      // 两个参数 接口Url 与 请求方法method
      url: "/index/carousel/list?qq=2478029182",
      method: 'post'
    }).then(({
      data,
      status
    }) => {
      // console.log(data,status);
      let isStatus = status == 200;
      // 进行数据处理
      const unalterableData = data.data;
      // console.log(unalterableData);
      // 进行数据细化 检查数据类型是否是页面需要的不是的话再进行改造
      let isArray = Array.isArray(unalterableData) //判断是不是数组 
      if (isArray && isStatus) { //判断两个数据是否为真
        unalterableData.forEach(item => { //forEach 循环数组
          resolve(unalterableData); //返回处理好的数据
          return //结束循环
        });
      }
      //判断两个数据为假
      reject(false);

    })
  })
}

function gitHotTrailerData() {
  // 返回 Promise 数据
  return new Promise((resolve, reject) => {
    request({
      url: "index/movie/hot?type=superhero&qq=2478029182",
      method: 'post'
    }).then(({
      data,
      status
    }) => {
      let isStatus = status == 200;
      const hotTrailer = data.data;
      let isArray = Array.isArray(hotTrailer);
      if (isStatus && hotTrailer) {
        hotTrailer.forEach((item) => {
          resolve(hotTrailer);
          return
        });
      }
      reject(false);
    })
  })
}

// 导入封装的函数
export default {
  gitshufflingDataImges,
  gitHotTrailerData,
}
