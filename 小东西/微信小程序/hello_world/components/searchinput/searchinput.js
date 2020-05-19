// components/searchinput/searchinput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content:String,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    ttt:function(e){
      let detaile = {name:"lp"};
      this.triggerEvent("myevent",detaile);
    },
  }
})
