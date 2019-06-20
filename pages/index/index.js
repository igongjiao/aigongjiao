//index.js

// // 引入SDK核心类
let QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');

// 实例化API核心类
let qqmapsdk = new QQMapWX({
  key: 'I7OBZ-MZACP-B4PDK-VHGRK-H3THE-ZTBHC'
});

//获取应用实例
var app = getApp()
app.globalData.qqmapsdk = qqmapsdk;
Page({
  data: {
    city:"武汉",
    bus:[
      {
        bus_number:"781",destination:"武汉大学",station:"珞瑜东路佳园站",accuracy:"",wait_time:"45"
        },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45"
      }],
    show:false,
    place:'',
    scrollTop:0,
    //用户坐标
    latitude:0,
    longitude:0,
    //地图放大倍数
    scale:16,
    //用户所在城市信息
    province:"湖北省",
    city:"武汉",

  },

  /**
* 生命周期函数--监听页面加载   获取用户当前位置
*/
  onLoad: function (options) {
    let _page = this;
    //获取用户坐标经纬度
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        _page.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 10
        });
        wx.setStorageSync('userlatlng', {
          lat: res.latitude,
          lng: res.longitude
        });
        //console.log(res);

        //获取用户位置信息
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
            _page.setData({
              province: res.result.address_component.province,
              city: res.result.address_component.city,
            });
            //console.log("Success");
            //console.log(res.result.address_component.province);
          },
          fail: function (res) {
          },
          complete: function (res) {
          }
        })
      }
    })
    
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  Search: function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  Switch_show:function(){
    var show_hidden=this.data.show
    console.log(app.globalData.search_place)
    this.setData({
       show:(!show_hidden)
    })
  },

  
})
