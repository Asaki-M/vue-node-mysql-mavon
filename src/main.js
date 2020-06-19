import Vue from 'vue'
import App from './App.vue'
import hljs from 'highlight.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import VueRouter from 'vue-router'


import edit from "./components/edit.vue"
import article from "./components/article.vue"

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(VueRouter)
Vue.prototype.$axios = axios

const router =  new VueRouter({
	routes: [
		{
			path: '/',
			component: edit
		},
		{
			path: '/acticle',
			component: article
		}
	]
}) 

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
