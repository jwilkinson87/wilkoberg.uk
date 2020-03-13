import VueRouter from "vue-router"
import Home from './../components/pages/Home';
import Contact from './../components/pages/Contact';

const routes = [
  {
    path: "/",
    name: 'pages.home',
    component: Home
  },
  {
    path: "/contact",
    name: 'pages.contact',
    component: Contact
  }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
