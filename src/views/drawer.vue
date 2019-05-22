<template>
  <div>
    <button @click="visible=!visible">open at right</button>
    <drawer v-model="visible" position="right">
      这是right drawer中的内容
    </drawer>

    <button @click="visible1=!visible1">open at bottom</button>
    <drawer v-model="visible1">
      这是bottom drawer中的内容
    </drawer>

  </div>
</template>

<script>
import drawer from '@/components/drawer'
export default {
  components: {
    drawer
  },
  data () {
    return {
      visible: false,
      visible1: false
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
