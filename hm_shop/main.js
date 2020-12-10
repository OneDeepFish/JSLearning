import Vue from 'vue'
import App from './App'
import {myRequest} from './util/api.js'

Vue.prototype.$myRequest = myRequest
Vue.config.productionTip = false
Vue.filter("formatDate",(res)=>{
	const date = new Date(res);
	const year = date.getFullYear();
	const month = (date.getMonth()+1).toString().padStart(2,0);
	const day = date.getDay().toString().padStart(2, 0);
	return year+"-"+month+"-"+day;
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
