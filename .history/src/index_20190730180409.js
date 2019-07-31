import CountDown from './countDown.vue'

// 导出模块
export default CountDown

//global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Time-Count-to', CountDown)
}