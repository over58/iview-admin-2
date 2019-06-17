<template>
  <div>
    <count-to :end-val="1000"></count-to>
    <button @click="toScroll">scroll</button>
  </div>
</template>

<script>
import CountTo from '@/components/CountTo'
export default {
  components: {
    CountTo
  },
  methods: {
    toScroll () {
      this.$router.push({
        path: '/scroll#abc'
      })
    }
  }
}
</script>

<style>

</style>
