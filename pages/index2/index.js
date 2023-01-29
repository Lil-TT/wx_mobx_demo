// home页面的 home.js

import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../utils/store'

Page({
  onLoad: function (options) {
    this.storeBindings = createStoreBindings(this,{
      store,                          // 传入store
      fields: ['num1','num2','sum'],  // 需要什么数据都在此处声明
      actions: ['updateNum1']          // action在此声明，使用actions时 this.updateNum1即可触发action
    })
  },
  sum() {
    this.updateNum1(1)
    console.log('点击事件被触发！！');
  },
  back() {
    wx.navigateBack()
  },
  onUnload: function () {
    this.storeBindings.destroyStoreBindings()  // 页面卸载时销毁数据绑定
    console.log('页面卸载时销毁数据绑定');
  }
})