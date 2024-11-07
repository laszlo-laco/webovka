import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from "../views/HomeView.vue"
import MathView from "../views/MathsView.vue"
import TeachView from "../views/TeachView.vue"

const routes = [
    {path: "/", component: HomeView},
    {path: "/maths", component: MathView},
    {path: "/teach", component: TeachView},
]

const router = createRouter({history: createMemoryHistory(), routes})

export default router