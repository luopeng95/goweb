//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    content:"搜索",
    images:["../../images/banner1.jpg","../../images/banner2.jpg","../../images/banner3.jpg"],
    navs:["../../images/cat1.png","../../images/cat2.png","../../images/cat3.png","../../images/cat4.png","../../images/cat5.png"],
    shoping:["http://www.linweiqin.cn/img/floor1.jpg","http://www.linweiqin.cn/img/floor2.jpg","http://www.linweiqin.cn/img/floor3.jpg","http://www.linweiqin.cn/img/floor4.jpg","http://www.linweiqin.cn/img/floor5.jpg","http://www.linweiqin.cn/img/floor6.jpg"]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
