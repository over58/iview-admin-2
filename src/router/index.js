import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash

        if (document.querySelector(to.hash)) {
          return position
        }
        return false
      }
      return new Promise(resolve => {
        if (to.matched.some(x => x.meta.scrollTop)) {
          position.x = 0
          position.y = 0
        }
        this.app.$root.$once('triggerScroll', () => {
          resolve(position)
        })
      })
    }
  },
  routes
})
