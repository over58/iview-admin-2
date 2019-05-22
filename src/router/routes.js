import Form from '@/views/Form.vue'

export default [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/contentEditable',
    name: 'contentEditable',
    component: () => import('@/views/ContentEditable')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/views/Chart')
  },
  {
    path: '/check',
    name: 'check',
    component: () => import('@/views/CheckBox')
  },
  {
    path: '/btnpop',
    name: 'btnpop',
    component: () => import('@/views/BtnPop')
  },
  {
    path: '/fullscreen',
    name: 'fullscreen',
    component: () => import('@/views/fullscreen')
  },
  {
    path: '/countto',
    name: 'countto',
    component: () => import('@/views/CountTo')
  },
  {
    path: '/transition',
    name: 'transition',
    component: () => import('@/views/transition')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () => import('@/views/drawer')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/modal')
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import('@/views/dropdown')
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('@/views/tabs')
  }
]
