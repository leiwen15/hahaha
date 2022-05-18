// 引入vue
import Vue from 'vue'
// 引入app
import App from './App.vue'

Vue.config.productionTip = false

// 创建 vm
new Vue({
    el:'#app',
    render: h => h(App)
})