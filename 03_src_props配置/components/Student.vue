<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{myAge}}</h2>
      <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                myAge: this.age,
                msg:'退休真快乐！',
                // name:'小明',
                // sex:'男',
                // age:67
            }
        },
        methods: {
            updateAge(){
                this.myAge +=1             
            }
        },
        // 简单接收
        // props:['name', 'age', 'sex']

        // 接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String,
        // }

        // 接收的同时对数据：进行类型限制 + 默认值的指定 + 必要性的限制
        props:{
            name:{
                type:String,
                required:true // 必须传递的数据
            },
            age:{
                type:Number,
                default:99 // 默认值
            },
            sex:{
                type:String,
                required:true
            },
        }
    }
</script>

