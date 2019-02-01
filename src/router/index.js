import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Question from '@/views/Question.vue'
import Success from '@/views/success.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/questions',
      name: 'question',
      component: Question

    },
    {
      path: '/success',
      name: 'success',
      component: Success
    }
  ]
})