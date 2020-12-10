<template>
	<div>
		<h2>{{message}}</h2>
		<button @click="btnClick()">按钮</button>
		<h2 class="title">{{name}}</h2>
		<!-- 引入自定义组件 -->
		<h2>首页的刷新啊</h2>
		<Cpn></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue'
	export default {
		data(){
			return {
				message: 'Hello Webpack',
				name: '李坤伟'
			}
		},
		methods:{
			btnClick(){
				console.log('我被点击了');
			}
		},
		components:{
			Cpn
		}
	}
</script>

<style>
	.title{
		color: red;
	}
</style>
