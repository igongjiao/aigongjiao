// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history_places: [{ name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" }, { name: "武汉大学" },]

  },
  loghistory(){
    wx.switchTab({
      url: '../index/index',
    })
  }
})