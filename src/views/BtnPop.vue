<template>
  <div>
    <p>{{select}}</p>
    <button-popup title="访问量" :width="250" :data="groups" :value="select" @on-change="handleChange"></button-popup>
  </div>
</template>

<script>
import ButtonPopup from '@/components/ButtonPopup'
export default {
  components: {
    ButtonPopup
  },
  data () {
    return {
      groups: [
        'Read(toatl_read_requess)',
        'Write(toatl_write_requess)',
        'Qps(total_commands_total)'
      ],
      select: [
        'Read(toatl_read_requess)',
        'Write(toatl_write_requess)',
        'Qps(total_commands_total)'
      ]
    }
  },
  methods: {
    handleChange (val) {
      this.select = val
    }
  }
}
</script>

<style>

</style>
