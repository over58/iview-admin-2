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
  }
]
