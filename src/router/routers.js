import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/home.vue"
import Common from "../layouts/common.vue"
import Headlight from "../pages/headlight.vue"
import Balloon from "../pages/balloon.vue"
import KitchenProducts from "../pages/kitchenProducts.vue"
import BathProducts from "../pages/bathProducts.vue"
import notFound from "../pages/notFound.vue"
import NotFound from "../pages/notFound.vue";

let routes = [
    {
        path: "/",
        name: "common",
        component: Common,
        children: [
            {
                path: "/",
                name: "Home",
                component: Home,
            },
            {
                path: "/headlight",
                name: "Headlight",
                component: Headlight,
            },
            {
                path: "/balloon",
                name: "Balloon",
                component: Balloon,
            },
        ],
    },
    {
        path: "/kitchenProduct",
        name: "kitchenProduct",
        component: KitchenProducts,
    },
    {
        path: "/bathProduct",
        name: "bathProduct",
        component: BathProducts,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})

export default router
