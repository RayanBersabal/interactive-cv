
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(),

scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        resolve({
          el: to.hash,
          behavior: 'smooth',
        })
      })
    })
  }

  return {
    top: 0,
    behavior: 'auto',
  }
},

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true,
    },
  ],
})

export default router
