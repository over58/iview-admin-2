<template>
    <div class="layout h-100">
      <Layout class="h-100">
          <Sider hide-trigger :style="{background: '#fff', width: '0px'}">
              <Menu active-name="Form" theme="light" width="auto" @on-select="selectMenuItem">
                  <template v-for="submenu in routes">
                    <MenuItem v-if="!submenu.children || !submenu.children.length" :key="submenu.name" :name="submenu.name">
                      {{submenu.name}}
                    </MenuItem>
                    <Submenu v-else :name="submenu.name" :key="submenu.name">
                        <template slot="title">
                            <!-- <Icon type="ios-navigate"></Icon> -->
                            {{submenu.name}}
                        </template>
                        <MenuItem v-for="menuitem in submenu.children" :key="menuitem.name" name="menuitem.name">{{menuitem.name}}</MenuItem>
                    </Submenu>
                  </template>
              </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
              <Breadcrumb :style="{margin: '15px 0'}">
                  <BreadcrumbItem v-for="path in fullpath" :key="path">{{path}}</BreadcrumbItem>
              </Breadcrumb>
              <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                  <router-view></router-view>
              </Content>
          </Layout>
      </Layout>
    </div>
</template>
<script>
import routes from '@/router/routes'
export default {
  name: 'Home',
  data () {
    return {
      routes: routes
    }
  },
  computed: {
    fullpath () {
      let arr = this.$route.fullPath.split('/').filter(item => item)
      arr = arr.length === 0 ? ['/'] : arr
      return arr
    }
  },
  methods: {
    selectMenuItem (menuitem) {
      this.$router.push({ name: menuitem })
    }
  }
}
</script>
<style lang="less">
html,body,#app{
  // height: 100%;
  overflow: auto;
}
.h-100{
  // height: 100%;
  overflow: auto;
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: auto;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

</style>
