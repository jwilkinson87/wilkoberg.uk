import VueRouter from "vue-router"
import Home from './../components/pages/Home';
import Contact from './../components/pages/Contact';
import CV from './../components/pages/CV';
import Skills from './../components/pages/Skills';

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
    path: "/skills",
    name: 'pages.skills',
    component: Skills
  },
  {
    path: "/contact",
    name: 'pages.contact',
    component: Contact
  }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router
