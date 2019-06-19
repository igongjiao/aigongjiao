// pages/search/search.js
var app=getApp();
var qqmapsdk = app.globalData.qqmapsdk;
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
  },

  onLoad:function(options){
    let _page = this;
    //console.log("输入的信息：" + e.detail.value)
    qqmapsdk.geocoder({
      //address: res.address,
      address: "武汉市珞喻路1037号",
      success: function (res) {
        let lat = res.result.location.lat;
        let lng = res.result.location.lng;
        wx.setStorageSync('latlngendSend', {
          lat: lat,
          lng: lng
        });
        console.log(res);
      },
      fail: function (res) {
        console.log("fail" + res);
      },
      complete: function (res) {
        console.log("complete" + res);
      }
    });
  },

})