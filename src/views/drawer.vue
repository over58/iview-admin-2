<template>
  <div>
    <!-- <Button @click="startIntroduce()">开启引导</Button>
    <br>
    <br>
    <br>
    <p id="first" class="step-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, pariatur! Alias deleniti aliquid officiis debitis, amet commodi. Recusandae, autem vero fugit, temporibus nihil ut maxime nostrum dicta odio perferendis vitae.</p>

    <p id="second" class="step-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, pariatur! Alias deleniti aliquid officiis debitis, amet commodi. Recusandae, autem vero fugit, temporibus nihil ut maxime nostrum dicta odio perferendis vitae.</p>

    <textarea name="" v-show="showTextarea" id="third" cols="30" rows="10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus possimus delectus officiis sunt debitis nobis repellat sint fuga fugit perspiciatis illum voluptatibus asperiores quas, eum error voluptates! Ratione, magnam qui!
    </textarea>

    <textarea id="forth" v-model="forthText"></textarea> -->

    <button @click="visible=!visible">open at right</button>
    <drawer v-model="visible" position="right">
      这是right drawer中的内容
    </drawer>

    <button @click="visible1=!visible1">open at bottom</button>
    <drawer v-model="visible1">
      这是bottom drawer中的内容
    </drawer>

  </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import drawer from '@/components/drawer'
import { setTimeout } from 'timers'
let vm = null
export default {
  components: {
    drawer
  },
  data () {
    return {
      visible: false,
      visible1: false,
      driver: null,
      showTextarea: false,
      forthText: 'AADAFADSFASDFASDFASDFASDF'
    }
  },
  methods: {
    startIntroduce () {
      this.driver = new Driver({
        allowClose: false,
        opacity: 0.5
      })
      this.driver.defineSteps([
        {
          element: '#first',
          popover: {
            title: 'step-1',
            className: 'popover-class',
            description: 'description'
          }
        },
        {
          element: '#second',
          popover: {
            title: 'step-1',
            className: 'popover-class',
            description: 'description'
          },
          onNext () {
            vm.showTextarea = true
            vm.driver.reset(true)
            setTimeout(() => {
              vm.driver.start(2)
            })
          }
        },
        {
          element: '#third',
          popover: {
            title: 'step-3',
            className: 'popover-class',
            description: 'description'
          }
        },
        {
          element: '#forth',
          popover: {
            title: 'step-4',
            className: 'popover-class',
            description: 'description'
          }
        }
      ])
      this.driver.start()
    }
  },
  mounted () {
    vm = this
  }
}
</script>

<style lang="less" scoped>
p{
  font-size: 20px;
  background: black;
  color: #fff;
}
</style>
