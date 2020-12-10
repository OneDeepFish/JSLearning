<template>
	<div>
		<h2>我是子组件</h2>
		<li>{{message}}</li>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				message: '我是子组件的你大爷'
			}
		}
	}
</script>

<style>
</style>
