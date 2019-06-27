<template>
  <div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
      <Checkbox :indeterminate="indeterminate" :value="checkAll"  @click.prevent.native="handleCheckAll">{{allText}}</Checkbox>
      <Checkbox v-for="(item, index) in data" v-show="('' + item).indexOf(search) > -1" :key="index" :label="item"></Checkbox>
    </CheckboxGroup>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    allText: {
      type: String,
      default: '全选'
    }
  },
  data () {
    return {
      indeterminate: true,
      checkAll: false,
      checkAllGroup: [],
      search: ''
    }
  },
  watch: {
    value () {
      this.init()
    }
  },
  methods: {
    handleCheckAll () {
      if (this.indeterminate) {
        this.checkAll = false
      } else {
        this.checkAll = !this.checkAll
      }
      this.indeterminate = false

      if (this.checkAll) {
        this.checkAllGroup = this.data
      } else {
        this.checkAllGroup = []
      }
      this.$emit('on-change', this.checkAllGroup)
    },
    checkAllGroupChange (data) {
      if (data.length === this.data.length) {
        this.indeterminate = false
        this.checkAll = true
      } else if (data.length > 0) {
        this.indeterminate = true
        this.checkAll = false
      } else {
        this.indeterminate = false
        this.checkAll = false
      }
      this.$emit('on-change', data)
    },
    changeSearch (e) {
      this.search = this.search.replace(/[^0-9]+/g, '')
      e.target.value = this.search
    },
    init () {
      if (this.value.length > 0) {
        this.checkAllGroup = this.value
      } else {
        this.checkAllGroup = this.data.length ? this.data.slice(0, 1) : []
        this.$emit('on-change', this.checkAllGroup)
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>
