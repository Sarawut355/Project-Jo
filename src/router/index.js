import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue";

Vue.use(VueRouter)

const routes = [{
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ("../views/Register.vue")
    },
    {
        path: "/admin/:User",
        name: "Admin",
        component: () =>
            import ("../views/Admin.vue")
    },
    {
        path: "/results",
        name: "Results",
        component: () =>
            import ("../views/Results.vue")
    },
    {
        path: "/select",
        name: "Select",
        component: () =>
            import ("../views/Select.vue")
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router