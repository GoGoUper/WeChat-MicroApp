//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    trips: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    var tempTraps = []
    for (var i = 0; i<100; i++){
      var obj = {name : "trip"+i}
        tempTraps.push(obj)
    }
    that.setData({
      trips:tempTraps
    })
  },
  bindTextTap: function() {
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
      },
      sourceType: ["camera"]
    })
  }
})
