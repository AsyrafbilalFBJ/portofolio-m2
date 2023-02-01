import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import ProductDisplay from '../components/FirstStuff.vue'
import Unit3C from '../components/SecondStuff.vue'
import GadgetCatalog from '../components/ThirdStuff.vue'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/about', 
        component: About 
    },
    { 
        path: '/ProductDisplay', 
        component: ProductDisplay 
    },
    { 
        path: '/Unit3C', 
        component: Unit3C 
    },
    { 
        path: '/GadgetCatalog', 
        component: GadgetCatalog 
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;