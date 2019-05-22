<template>
  <div class="tab-item" v-show="$parent.swiping || id === $parent.currentActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style lang="stylus" scoped>
.tab-item{
  flex-shrink 0
  width 100%
}
</style>
