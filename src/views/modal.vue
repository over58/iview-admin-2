<template>
  <div>
    <button @click="show=!show">button toggle</button>
    <modal v-model="show"  maskClosable></modal>
    <!-- <modal v-model="show"  :fullscreen="true"></modal> -->
  </div>
</template>

<script>
import modal from '@/components/Modal'
export default {
  components: {
    modal
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
