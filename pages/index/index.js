//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    city:"武汉",
    array:[
      {
        id:0,
        text:"推荐",
    },
      {
        id: 1,
        text: "收藏",
    }, {
        id: 2,
        text: "历史",
    }],
    image:[{
      src:'../../image/main_1.png',
      page:'../logs/logs'
      },
      { 
        src: '../../image/main_2.png' ,
        page:'../logs/logs'
        },
      { 
        src: '../../image/main_3.png',
        page:'../logs/logs'
         },
      { src: '../../image/main_4.png' ,
        page:'../logs/logs'
      }],
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
    num:-1,
    scrollTop:300,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  Location: function(){
  //  this.setData({
  //    city:"上海"
  //  })
    //  wx.navigateTo({
    //    url: '../',
    //  })
  },
  Search: function(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
  Button_jump: function(){
    var url = e.currentTarget.dataset.index
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  Change_color:function(e){
    var index = parseInt(e.currentTarget.dataset.index)
    this.setData({
      num: index
    })
  },

  
})
