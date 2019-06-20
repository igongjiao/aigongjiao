// pages/search/search.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_places: [{ name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" },],
  },
  loghistory(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  get_search:function(e){
    app.globalData.search_place = e.detail.value
  },
  Routine:function(){

    wx.switchTab({
      url: '../index/index' ,
    })
  }
  
})