import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);

import Register from '../components/register';
import Login from '../components/login';
import index from '../components/indexMain.vue';
import order from '../components/order.vue';
import orderMeg from '../components/orderMeg.vue';
import shopCar from '../components/shopCar.vue';
import productDetail from '../components/productDetail.vue';
const routes = [
	{ path: '/login', component: Login },
	{ path: '/register', component: Register },
	{
		path: '/index',
		component: index
	},
	{
		path: '/order',
		component: order
	},
	{
		path: '/orderMeg',
		component: orderMeg
	},
	{
		path: '/shopCar',
		component: shopCar
	},
	{
		path: '/productDetail',
		component: productDetail
	}
];

const router = new VueRouter({
	mode: 'history',
	routes // (缩写) 相当于 routes: routes
});

export default router;
