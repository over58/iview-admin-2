<template>
  <div>
    <button class="button" @click="toggle">toggle</button>
    <transition name="slide-fade">
      <p v-if="on" class="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, numquam exercitationem possimus, quaerat sequi sint at iusto quibusdam temporibus laboriosam, impedit accusamus laudantium veritatis deleniti nisi ducimus voluptate doloribus aperiam.</p>
    </transition>

    <transition name="scale">
       <p class="circle" v-if="on"></p>
    </transition>
    <pre>
      在进入/离开的过渡中，会有 6 个 class 切换。

      1. v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

      2. v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

      3. v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

      4. v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

      5. v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

      6. v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
    </pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      on: true
    }
  },
  methods: {
    toggle () {
      this.on = !this.on
    }
  }
}
</script>

<style lang="stylus" scoped>
.desc {
  line-height 40px;
  font-size: 30px;
  font-weight: bold;
  opacity 1;
}
.slide-fade-enter-active{
  transition: all .3s ease;
}
.slide-fade-leave-active{
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.circle{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: pink;
  opacity 1
}
.scale-enter{
  opacity 0
  height 0
  width 0
}
.scale-enter-active, .scale-leave-active{
  transition: all .5s ease
}
.scale-enter-to{
  opacity 1
}
.scale-leave-to{
  transform scale(1.5)
  opacity 0
}
</style>
