<template>
  <div v-transfer-dom :data-transfer="transfer">

    <transition name="fade">
      <div class="modal-mask" v-if="showMask" v-show="visible" @click="handleMask"></div>
    </transition>

    <div :class="['modal-content',{'modal-fullscreen': fullscreen, 'modal-wrapper': !fullscreen}]" v-show="visible">
      <div class="modal">
        <div class="modal-head">
          <b class="title">{{title}}</b>
          <slot name="extra">
            <i class="close" @click="close">X</i>
          </slot>
        </div>
        <div class="modal-body"><slot>body</slot></div>
        <div class="modal-footer">
          <slot name="footer">
            <button class="button primary">submit</button>
            <button class="button" @click="cancel">close</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Title'
    },
    transfer: Boolean,
    showMask: {
      type: Boolean,
      default: true
    },
    maskClosable: Boolean,
    fullscreen: Boolean
  },
  data () {
    return {
      visible: this.value
    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible () {

    }
  },
  methods: {
    close () {
      this.visible = false
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    handleMask () {
      if (this.maskClosable && this.showMask) {
        this.close()
      }
    },
    cancel () {
      this.close()
    }
  }
}
</script>

<style lang="stylus" scoped>

.modal-mask{
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background-color: rgba(55,55,55,.6);
  z-index 1000
}
.modal-content{
  background-color white
  z-index 1000
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255,255,255, .6)
}
.modal-wrapper{
  width: 500px
  position fixed
  left 50%
  top 50%
  transform translate(-50%, -50%)
}
.modal{
  .modal-head, .modal-footer{
    height 50px;
    padding: 5px;
    line-height 50px;
  }
  .modal-head{
    border-bottom solid 1px #dfdfdf;
    .title{
    }
    .close{
      display inline-block
      height 40px
      width 40px
      float: right
      line-height 40px
      text-align center
      color red
      cursor pointer
    }
  }
  .modal-footer{
    border-top solid 1px #dfdfdf;
    text-align right
    line-height 40px
    .button{
      height 30px
      line-height 20px
      padding 5px 13px;
      margin 0 5px;
      border none
      background #dfdfdf
      &:active{
        outline none
      }
      &:hover{
        opacity .8
      }
    }
    .button.primary{
      background-color: #2d8cf0
    }
  }
  .modal-body{
    padding 5px;
    min-height 100px;
  }
}
.modal-fullscreen{
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  .modal-footer{
    position absolute
    bottom 0
    width 100%
  }
}

// animation

.fade-enter-active, .fade-leave-active{
  opacity 0
  animation-timing-function linear
  animation-animation-duration 1s
}

</style>
