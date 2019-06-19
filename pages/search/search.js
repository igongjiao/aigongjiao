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
  //起点输入框绑定的函数
  getStart(e){
    console.log("CPY!!");
  }
})