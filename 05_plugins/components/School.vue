<template>
  <div>
      <h2>学校名字：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
// 引入一个混合
    // import { mixin, mixin2 } from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name: '永无岛neverlsand',
                address: 'neverland'
            }
        },
        // mixins:[mixin, mixin2]
    }
</script>

