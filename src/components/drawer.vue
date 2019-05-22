<template>
  <div v-transfer-dom v-show="visible" :data-transfer="true">
    <div class="mask"></div>

    <div class="action-sheet-wrapper" @click="handleMask">
      <transition name="fade">
        <div v-if="visible" :class="['action-sheet', `action-sheet-${position}`]">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me-action-sheet',
  props: {
    value: {
      tyep: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (newVal) {
      this.visible = newVal
    }
  },
  methods: {
    handleMask () {
      this.$emit('input', !this.visible)
    }
  }
}
</script>

<style lang="stylus" scoped>
.mask{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(55,55,55,.6);
  height: 100%;
  z-index: 1000;
}
.action-sheet-wrapper{
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  box-sizing: border-box;
}
.action-sheet{
  position fixed
  overflow auto
  background-color white
}
.action-sheet-bottom{
  bottom: 0;
  left: 0
  right: 0
  min-height: 300px;
  max-height: 60%
}
.action-sheet-right{
  right: 0;
  top: 0;
  bottom:0;
  min-width: 300px;
  max-width: 60%
}

.fade-enter{
  opacity 0
}
.fade-enter-active{
  transition all .5s ease
}
.fade-enter{
  opacity 1
}
</style>
