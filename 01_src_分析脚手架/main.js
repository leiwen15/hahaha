import Vue from 'vue'
import App from './App.vue'

// new Vue({
//     el:'#root',
//     template:`<App></App>`,
//     components:{
//         App
//     },

// })

new Vue({
    el: '#app',
    render: h=> h(App),
})