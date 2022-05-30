export default {
    install(Vue){
        console.log('@@@@install')

        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })
    }
}
