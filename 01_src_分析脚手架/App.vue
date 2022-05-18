<template>
    <div id="root">
        <School/>
        <Student/>
    </div>
</template>

<script>
// 在脚手架中，.vue写也行，不写也行
    import school from './components/School.vue'
    import student from './components/Student'
    export default {
        name:'App',
        components:{
            school,
            student
        }
    }
</script>

<style>

</style>