<template>
  <div>
    <Dropdown>
      <button>Button</button>
      <div slot="list">
        <DropdownItem>论坛</DropdownItem>
        <DropdownItem>聊天室</DropdownItem>
        <DropdownItem>支持Vue</DropdownItem>
        <DropdownItem>参与翻译</DropdownItem>
        <DropdownItem>学习</DropdownItem>
      </div>
    </Dropdown>

    <Dropdown trigger="contextMenu">
      <button>Button</button>
      <div slot="list">
        <DropdownItem>论坛</DropdownItem>
        <DropdownItem>聊天室</DropdownItem>
        <DropdownItem>支持Vue</DropdownItem>
        <DropdownItem>参与翻译</DropdownItem>
        <DropdownItem>学习</DropdownItem>
      </div>
    </Dropdown>
  </div>

</template>

<script>
import Dropdown from '@/components/dropdown/Dropdown'
import DropdownItem from '@/components/dropdown/DropdownItem'
export default {
  components: {
    Dropdown,
    DropdownItem
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
