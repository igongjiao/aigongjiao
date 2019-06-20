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
    show:true,
    place:'',
    scrollTop:0,
    windowHeight:0,
    scrollViewHeight:0
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
    this.setData({
       show:(!show_hidden)
    })
  },
  Collect_routine:function (e){
    var that=this
    var index = parseInt(e.currentTarget.dataset.index)
    var x=!this.data.bus[index].collected
    var bus=that.data.bus
    if(x==true){
      var key="bus["+index+"].collected"
      that.setData({
        [key]:true
    })
    }

    if (x == false) {
      var key = "bus[" + index + "].collected"
      that.setData({
        [key]: false
      })
    }
  },
  Select_routine:function() {
    wx.navigateTo({
      url: '../routine/routine',
    })
  }
})
