<template>
<div>
  <Form :label-width="100">
    <Form-item label="端口" prop="">
      {{selectedPort}}
      <CheckAll :data="arr" :value="selectedPort" @on-change="handleChange"></CheckAll>
    </Form-item>
  </Form>
</div>
</template>
<script>
import CheckAll from '@/components/CheckAll'

export default {
  components: {
    CheckAll
  },
  data () {
    return {
      arr: [
        3303, 3304, 3305, 3306, 8803, 3003, 23412, 1341, 345, 234523, 23452345, 2345, 2345, 2345234, 5423, 52345, 2345
      ],
      selectedPort: []
    }
  },
  methods: {
    handleChange (data) {
      this.selectedPort = data
    }
  }
}
</script>
