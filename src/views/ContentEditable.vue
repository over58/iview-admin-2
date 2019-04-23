<template>
  <div class="haveInput" contenteditable="true" placeholder="请输入...">

  </div>
</template>

<script>
export default {
  name: 'contenteditable',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.haveInput{
  min-height: 200px;
  line-height: 18px;
  padding: 5px;
  border-radius: 5px;
}
.haveInput:not(:focus)::before{
  content: attr(placeholder);
  display: block;
  color: #333;
  border: solid 1px #dfdfdf;
}
.haveInput:focus{
  outline: none;
  outline-width: 0 !important;
  border: solid 1px #2d8cf0;
  border-radius: 5px;
}
</style>
