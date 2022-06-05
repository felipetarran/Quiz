import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },
    {
      path: '/perguntas',
      component: () => import('../views/PerguntaView.vue'),
      beforeEnter: (to, from) => {
        if(store.autenticado){
          return true
        }else{
          router.push("/login")
        }
      },
    }
  ]
})

export default router