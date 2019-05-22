<template>
  <div>
    <tabs v-model="active" swipeable>
      <tab-item id="a">
        AAAAAAAAAAAAAAAA
        AAAAAAA
        AAA
        AAA
        AAAAAAAAAAAA
        AAAAAAA
        AAAAAAAA
        AAAAAAAA
        AAAAAAA
        AAAAAAAAA
      </tab-item>
      <tab-item id="b">
        BBBBBBBBB
        BBBBBBBBB
        BBBBBBBBBBB
        BBBBBBBBBBBBBBBB
        BBBBBBBBBB
        BBBBBBBBB
        BBBBBB
        BBBBBBBBBB
      </tab-item>
      <tab-item id="c">
        CCCCCCCCCCC
        CCCCCCC
        CCCCCCCCCC
        CCCCCCCCC
        CCCCCCCC
        CCCCCCCCCCCCCC
        CCCCCCCCC
        CCCCCCCCCCCC
      </tab-item>
    </tabs>
  </div>
</template>

<script>
import tabs from '@/components/tabs/tabs'
import tabItem from '@/components/tabs/tab-item'
export default {
  components: {
    tabs,
    tabItem
  },
  data () {
    return {
      active: 'a'
    }
  }
}
</script>

<style>

</style>
