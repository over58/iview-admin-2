<template>
  <div>
    <p>
      需要注意的是：通过$attrs获得基本类型的数据，在子组件中修改，对自己以及父组件的数据毫无影响；对于object类型的数据，它们是共用一份数据，一个组件中更改们，全局更改；
    </p>
    <p>
      总而言之， 就是简单的参数传值，只不过对象传的是个地址罢了
    </p>

    <h2>组件间通信之$attrs和$listeners</h2>
    <h3>{{change}}</h3>
    {{name}}
    {{obj}}
    <A prop="props中的参数" :name="name" sex="man" :obj="obj" @change="handleChange"></A>
  </div>
</template>

<script>
import A from './A'
export default {
  components: {
    A
  },
  data () {
    return {
      change: false,
      name: 'tom',
      obj: {
        a: 1
      }
    }
  },
  methods: {
    handleChange () {
      console.log('a的chagne listener')
      this.change = !this.change
    }
  },
  created () {
    console.log('父组件:', this)
  }
}
</script>

<style>

</style>
