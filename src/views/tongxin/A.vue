<template>
  <div>
    <h3>组件A</h3>
    <p>从父组件传过来的值：   {{$attrs}}</p>
    <B v-bind="$attrs"></B>
  </div>
</template>

<script>
import B from './B'
export default {
  components: {
    B
  },
  props: {
    prop: String
  },
  created () {
    console.log(this.$listeners)

    // 已下面这种方式可以正确调用父组件中关于子组件的listeners
    console.log(this.$listeners.change.apply(this.$parent))
    console.log('子组件', this)
  }
}
</script>

<style>

</style>
