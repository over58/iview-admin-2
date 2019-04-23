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
  }
]
