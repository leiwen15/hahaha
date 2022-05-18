<template>
  <div>
      <!-- 加上冒号，将其变成js表达式使用 -->
      <Student name="小明" :age="18" sex="male"/>
      <Student name="小花" :age="66" sex="female"/>
  </div>
</template>

<script>
    // 引入 Student 组件
    import Student from './components/Student'
    
    export default {
        name:'App',
        components:{Student}
    }
</script>

<style>

</style>