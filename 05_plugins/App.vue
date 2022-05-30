<template>
  <div>
      <!-- 加上冒号，将其变成js表达式使用 -->
      <School/>
      <Student/>
  </div>
</template>

<script>
    // 引入 Student 组件
    import Student from './components/Student'
    import School from './components/School'
    
    export default {
        name:'App',
        components:{Student, School}
    }
</script>

<style>

</style>