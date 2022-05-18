<template>
  <div>
      <h2>学校名字：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="showName">点我显示名字</button>
  </div>
</template>

<script>
// 引入一个混合
    import { mixin, mixin2 } from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name: '永无岛',
                address: 'neverland'
            }
        },
        mixins:[mixin, mixin2]
    }
</script>

