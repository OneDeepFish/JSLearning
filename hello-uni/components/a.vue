<template>
	<view>
		<button type="default" @click="addNum">A：传递给B的数据为{{num}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num : 10
			};
		},
		methods:{
			addNum(){
				console.log('开始传递数据:'+this.num);
				uni.$emit('updateNum', this.num);
			}
		}
	}
</script>

<style>

</style>
