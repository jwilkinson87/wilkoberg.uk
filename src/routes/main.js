import VueRouter from "vue-router"
import Home from './../components/pages/Home';
import CV from './../components/pages/CV';
import Photography from './../components/pages/Photography';

const routes = [
  {
    path: "/",
    name: 'pages.home',
    component: Home
  },
  {
    path: "/cv",
    name: 'pages.cv',
    component: CV
  },
  {
    path: '/photos',
    name: 'pages.photos',
    component: Photography
  }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
