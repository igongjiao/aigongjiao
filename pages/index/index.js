//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    city:"武汉",
    bus:[
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      }, 
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },
      {
        bus_number: "781", destination: "武汉大学", station: "珞瑜东路佳园站", accuracy: "", wait_time: "45", collected: false
      },],
    show:false,
    place:'',
    scrollTop:0,
  },
  //页面加载函数
  onLoad:function(options){
    
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
  Collect_routine:function (e){
    var index = parseInt(e.currentTarget.dataset.index)
    var x=!this.data.bus[index].collected
    this.data.bus[index].collected=x
  }
})
