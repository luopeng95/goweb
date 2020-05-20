// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:"",
    uu:"userInfo",
  },
  getUserInfo:function(e){
    // 拿到用户信息赋值并保存
    let obj = e.detail.userInfo;
    console.log(obj);
    this.setData({userInfo:obj});
    wx.setStorageSync("userInfo", obj);
    // wx.switchTab({
    //   url: '/pages/index/index',
    //   success:function(){
    //     console.log("跳转成功");
    //   }
    // });
    // this.onShow();
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    let obj = wx.getStorageSync("userInfo");
    this.setData({userInfo:obj});
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})