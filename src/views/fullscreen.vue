<template>
  <div ref="a" class="a">
    <FullScreen :elem="elem" v-if="elem"></FullScreen>
    AAAA
  </div>
</template>

<script>
import FullScreen from '@/components/Fullscreen.vue'
export default {
  components: {
    FullScreen
  },
  data () {
    return {
      elem: null
    }
  },
  mounted () {
    this.elem = this.$refs.a
  }
}
</script>

<style lang="less" scoped>
.a{
  background: #fff;
}
</style>
