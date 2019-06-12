<template>
  <div class="form">
    <Form ref="myForm" :model="myForm" :rules="myFormRules" label-position="right" :label-width="100">
      <Form-item label="a.b.c.d" prop="a.b.c.d" :rules="myFormRules.notInputEmpty">
        <Input v-model="myForm.a.b.c.d" placeholder="Enter something..."/>
      </Form-item>
      <Form-item label="b.c.d[0]" prop="b.c.d[0]" :rules="myFormRules.notInputEmpty">
        <Input v-model="myForm.b.c.d[0]" placeholder="Enter something..."/>
      </Form-item>

      <Form-item label="密码" prop="password" :rules="myFormRules.notInputEmpty">
        <Input type="password" v-model="myForm.password" placeholder="Enter something..."/>
      </Form-item>
      <Form-item label="再次输入密码" prop="repassword">
        <Input type="password" v-model="myForm.repassword" placeholder="Enter something..."/>
      </Form-item>

      <p>{{myForm.daterange}}</p>
      <Form-item label="daterange" prop="daterange">
        <DatePicker type="daterange" show-week-numbers v-model="myForm.daterange" :options="options" placeholder="Select date" style="width: 200px"></DatePicker>
      </Form-item>

      <Form-item label="getPropByPath">
        <p>{{getPropByPath(myForm, 'b.c.d[0]')}}</p>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="submit">提交</Button>
        <Button type="warning" @click="reset">重置</Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
let vm = null
const repasswordValidator = (rule, value, callback) => {
  console.log(rule, value, callback)
  if (vm.myForm.password === value) {
    callback()
  } else {
    callback(new Error('两个密码不同'))
  }
}
let myFormRules = {
  notInputEmpty: [
    { type: 'string', required: true, trigger: 'blur' }
  ],
  repassword: {
    validator: repasswordValidator, trigger: 'hover'
  }
}

export default {
  name: 'my-form',
  data () {
    return {
      myForm: {
        a: {
          b: {
            c: {
              d: 'a.b.c.d'
            }
          }
        },
        b: {
          c: {
            d: [
              'b.c.d-1',
              'b.c.d-2'
            ]
          }
        },
        password: '123456',
        repassword: '',
        daterange: []
      },
      myFormRules: myFormRules,
      options: {
        shortcuts: [
          {
            text: '一天前',
            value () {
              let date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              return [date, new Date()]
            },
            onClick: (picker) => {
              this.$Message.info('昨天-今天')
            }
          },
          {
            text: '一周前',
            value () {
              let date = new Date()
              date.setTime(date.getTime() - 7 * 3600 * 1000 * 24)
              return [date, new Date()]
            },
            onClick: (picker) => {
              this.$Message.info('一周前-今天')
            }
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.myForm.validate(valid => {
        if (valid) {
          this.$Message.success('表单验证成功')
        } else {
          this.$Message.error('表单验证失败')
        }
      })
    },
    reset () {
      this.$refs.myForm.reestFields()
    },
    getPropByPath (obj, path) {
      let tempObj = obj
      path = path.replace(/\[(\w+)\]/g, '.$1')
      path = path.replace(/^\./, '')

      let keyArr = path.split('.')
      let i = 0

      for (let len = keyArr.length; i < len - 1; ++i) {
        let key = keyArr[i]
        if (key in tempObj) {
          tempObj = tempObj[key]
        } else {
          throw new Error('[iView warn]: please transfer a valid prop path to form item!')
        }
      }
      return {
        o: tempObj,
        k: keyArr[i],
        v: tempObj[keyArr[i]]
      }
    }
  },
  created () {
    vm = this
  }
}
</script>

<style>

</style>
