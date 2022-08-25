import Vue from "vue";
import Router from 'vue-router';

import Home from './pages/home';
import Classroom from './pages/classroom';
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import Course from './pages/course';
import Login from './pages/login';
import Register from './pages/register';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/course',
            component: Course,
            props: true
        },
        {
            path: '/classroom',
            component: Classroom
        },
        {
            path: '*',
            component: Error
        },
        {
            path: '/register',
            component: Register
        }

    ]
}); 

export default router;