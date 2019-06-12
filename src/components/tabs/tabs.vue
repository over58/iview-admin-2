<template>
  <div
    @touchstart="startDrag"
    @mousedown="startDrag"
    @touchmove="onDrag"
    @mousemove="onDrag"
    @touchend="endDrag"
    @mouseup="endDrag"
    class="tabs">
    <div ref="wrap" class="tabs-wrap">
      {{currentActive}}
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { once } from '@/utils/dom'
export default {
  props: {
    value: {},
    swipeable: Boolean
  },
  data () {
    return {
      start: { x: 0, y: 0 },
      swiping: false,
      activeItems: [],
      pageWidth: 0,
      currentActive: this.value
    }
  },
  watch: {
    value (val) {
      this.currentActive = val
    },
    currentActive (val, oldVal) {
      this.$emit('input', val)
      if (!this.swipeable) return
      const lastIndex = this.$children.findIndex(item => item.id === oldVal)
      this.swipeLeaveTransition(lastIndex)
    }
  },
  methods: {
    swipeLeaveTransition (lastIndex = 0) {
      if (typeof this.index !== 'number') {
        this.index = this.$children.findIndex(item => item.id === this.currentActive)
        this.swipeMove(-lastIndex * this.pageWidth)
      }
      setTimeout(() => {
        this.wrap.classList.add('swipe-transition')
        this.swipeMove(-this.index * this.pageWidth)

        once(this.wrap, 'webkitTransitionEnd', _ => {
          console.log('once')
          this.wrap.classList.remove('swipe-transition')
          this.wrap.style.webkitTransform = ''
          this.swiping = false
          this.index = null
        })
      }, 0)
    },
    swipeMove (offset) {
      this.wrap.style.webkitTransform = `translate3d(${offset}px, 0, 0)`
      this.swiping = true // 正在移动中
    },
    startDrag (evt) {
      if (!this.swipeable) return
      evt = evt.changedTouches ? evt.changedTouches[0] : evt

      this.dragging = true
      this.start.x = evt.pageX
      this.start.y = evt.pageY
      console.log(this.start)
    },
    onDrag (evt) {
      if (!this.dragging) return
      let swiping
      const e = evt.changedTouches ? evt.changedTouches[0] : evt
      const offsetTop = e.pageY - this.start.y
      const offsetLeft = e.pageX - this.start.x
      const y = Math.abs(offsetTop)
      const x = Math.abs(offsetLeft)
      swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
      if (!swiping) return
      evt.preventDefault()
      const len = this.$children.length - 1
      const index = this.$children.findIndex(item => item.id === this.currentActive)
      const currentPageOffset = index * this.pageWidth
      const offset = offsetLeft - currentPageOffset
      const absOffset = Math.abs(offset)
      if (absOffset > len * this.pageWidth ||
          (offset > 0 && offset < this.pageWidth)) {
        this.swiping = false
        return
      }
      this.offsetLeft = offsetLeft
      this.index = index
      this.swipeMove(offset)
    },
    endDrag () {
      if (!this.swiping) return
      this.dragging = false
      const direction = this.offsetLeft > 0 ? -1 : 1
      const isChange = Math.abs(this.offsetLeft) > this.limitWidth
      if (isChange) {
        this.index += direction
        const child = this.$children[this.index]
        if (child) {
          this.currentActive = child.id
          return
        }
      }
      this.swipeLeaveTransition()
    }
  },
  mounted () {
    if (!this.swipeable) return

    this.wrap = this.$refs.wrap
    this.pageWidth = this.wrap.clientWidth
    this.limitWidth = this.pageWidth / 4
  }
}
</script>

<style lang="stylus" scoped>
.tabs{
  overflow: hidden;
  position: relative;
  min-height 500px
  background #dfdfdf
  .tabs-wrap{
    display: flex;
  }
  .swipe-transition {
    transition: transform 150ms ease-in-out;
  }
}
</style>
