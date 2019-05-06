<template>
  <div class="codemirror-container">
    JSON
    <codemirror v-model="content" :options="jsonOption"></codemirror>
    <Divider/>
    SQL
    <codemirror v-model="sqlContent" :options="sqlOption"></codemirror>

  </div>
</template>

<script>

// json
import sqlFormatter from 'sql-formatter'
import 'codemirror/theme/monokai.css'
require('codemirror/mode/sql/sql')
require('codemirror/addon/selection/active-line')
require('codemirror/addon/edit/matchbrackets.js')
require('codemirror/addon/scroll/scrollpastend.js')

let jsonOption = {
  mode: 'application/json',
  tabSize: 1,
  theme: 'solarized',
  styleActiveLine: true,
  lineNumbers: true,
  // lineWrapping: true,
  line: true,
  foldGutter: true,
  readOnly: true,
  fullScreen: false,
  matchBrackets: true
}
let sqlOption = {
  tabSize: 2,
  mode: 'text/x-sql',
  // theme: 'solarized',
  theme: 'monokai',
  lineNumbers: true,
  line: true,
  readOnly: false,
  fullScreen: false,
  styleActiveLine: true,
  lineWrapping: true,
  dragDrop: true,
  extraKeys: {
    'Tab': 'autocomplete'
  }
}

export default {
  name: 'testCodemirror',
  data () {
    return {
      jsonOption: jsonOption,
      content: JSON.stringify({ 'name': 'Tom', 'sex': 'man' }, null, 2),

      sqlOption: sqlOption,
      sqlContent: sqlFormatter.format('select name,sex,age,class,fmaily,phone,phone,phone,phone,phone,phone，phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone,phone from person where name > 18')
      // sqlContent: 'SELECT name,sex,age,class from person where name > 18'
    }
  }
}
</script>

<style>

</style>
