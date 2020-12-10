<template>
	<view>
		<view>B：接收到的数据为{{num}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:0
			};
		},
		created() {
			let that =this;
			uni.$on('updateNum',function(num){
				console.log('B开始接收数据:'+num);
				that.num += num;
			})
		}
	}
</script>

<style>

</style>
