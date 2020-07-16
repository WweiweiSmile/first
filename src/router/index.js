import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

import Login from '../components/login';
import Register from '../components/register';

const routes = [ { path: '/login', component: Login }, { path: '/register', component: Register } ];

const router = new VueRouter({
	mode: 'history',
	routes // (缩写) 相当于 routes: routes
});

export default router;
