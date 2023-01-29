// components/player/player.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../utils/store'
Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      num1: 'num1',
      num2: 'num2',
      sum: 'sum'
    },
    actions: {
      updateNum1: 'updateNum1'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    sum() {
      this.updateNum1(1)
      console.log('点击事件被触发！！');
    },
  }
})
