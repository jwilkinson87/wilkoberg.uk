import VueRouter from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("./../components/pages/Home")
  },
  {
    path: "/contact",
    component: () => import("./../components/pages/Contact")
  }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
