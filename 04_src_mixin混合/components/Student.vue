<template>
  <div>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="showName">点我显示名字</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name: '小明',
                age: 21
            }
        }
    }
</script>

