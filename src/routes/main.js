import VueRouter from "vue-router"

const routes = [
  {
    path: "/",
    name: 'pages.home',
    component: () => import("./../components/pages/Home")
  },
  {
    path: "/contact",
    name: 'pages.contact',
    component: () => import("./../components/pages/Contact")
  }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
