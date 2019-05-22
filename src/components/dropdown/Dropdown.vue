<template>
  <div class="dropdown" v-clickoutside="onClickoutside">
    <div class="reference" @click="handleClick" @contextmenu.prevent="handleRightClick"><slot></slot></div>
    <div class="dropdown-menu" v-transfer-dom :transfer="transfer" v-if="currentVisible">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transfer: Boolean,
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data () {
    return {
      currentVisible: false
    }
  },
  methods: {
    handleClick () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'click') return false
      this.currentVisible = true
    },
    handleRightClick () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'contextMenu') {
        return false
      }
      this.currentVisible = !this.currentVisible
    },
    onClickoutside (e) {
      this.handleClose()
      this.handleRightClose()
      if (this.currentVisible) this.$emit('on-clickoutside', e)
    },
    handleClose () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'click') {
        return false
      }
      this.currentVisible = false
    },
    handleRightClose () {
      if (this.trigger === 'custom') return false
      if (this.trigger !== 'contextMenu') {
        return false
      }
      this.currentVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.dropdown{
  position relative
  display inline-block
  .reference{

  }
  .dropdown-menu{
    position absolute
    border solid 1px #dfdfdf
    border-radius 2px;
    background-color white
    white-space nowrap
    .dropdown-item:last-child{
      border-bottom none
    }
  }
}
</style>
