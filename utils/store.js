// store.js
import { observable,action } from 'mobx-miniprogram'

export const store = observable({
  num1: 1,
  num2: 2,

  get sum(){
    return this.num1 + this.num2
  },
  updateNum1: action(function(step){  // 注意，此处是用action包住一个函数，函数的第一个参数是触发action时传的参数
    this.num1 += step
  })
})