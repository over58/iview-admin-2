<template>
  <div class="dropdown-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.dropdown-item{
  border-bottom solid 1px #dfdfdf
  padding 5px 10px
  &:hover{
    cursor pointer
    background-color: rgba(0,0,0, .1)
  }
}
</style>
