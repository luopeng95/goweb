// components/logout/logout.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    dis:false,
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
    },
    hide: function() {
      // 页面被隐藏
    },
    resize: function(size) {
      // 页面尺寸变化
    }
  },
  lifetimes:{
    attached: function() {
      // 在组件实例进入页面节点树时执行
      
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick:function(){
      this.setData({
        dis:true
      })
    },
    handleCancle:function(){
      this.setData({
        dis:false
      })
    },
    handleSure:function(){
      wx.removeStorageSync(this.properties.userInfo);
      this.setData({
        dis:false
      })
    }
  }
})
