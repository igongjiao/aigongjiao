// pages/search/search.js
// // 引入SDK核心类
let QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');

// 实例化API核心类
let qqmapsdk = new QQMapWX({
  key: 'I7OBZ-MZACP-B4PDK-VHGRK-H3THE-ZTBHC'
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //从数据库获取历史数据TODO
    history_places: [{ name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" },]

  },
  //清空搜素历史TODO
  loghistory(){
    wx.switchTab({
      url: '../index/index',
    })
  },

  //加载页面时把定位存进数据TODO
  onLoad: function (options) {
    let _page = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        _page.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 10
        });
      },
      fail: function (error) {
        console.error("loca"+error);
      },
      complete: function (res){
        console.log("locaC" +res);
      }
    })
    console.log(this.data.latitude + "     " + this.data.longitude);
    // qqmapsdk.reverseGeocoder({
    //   location: {
    //     latitude: this.data.latitude,
    //     longitude: this.data.longitude
    //   },
    //   success: function (res) {
    //     console.log(res);
    //   }, 
    //   fail: function (error) {
    //     console.error(error);
    //   },
    //   complete: function (res) {
    //     console.log(res);
    //   }
    // })
  },

  //起点输入框绑定的函数TODO
  getStart(e){
    let inputStr = e.detail.value;
    console.log("输入内容： "+inputStr);
  }


})