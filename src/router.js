import { createRouter,createWebHistory } from 'vue-router';
import dashboard from './components/dashboard.vue';
import Login from './components/Login.vue';
const router=createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path:'/dashboard',
            component: dashboard
        }
    ]
})
export default router;
