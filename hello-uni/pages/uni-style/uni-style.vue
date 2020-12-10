<template>
	<view>
		<text>样式的学习</text>
		<view class="box">我要好好学习</view>
		<view class="iconfont icon-tupian" ></view>
		<icon type="success"></icon>
		<icon type="waiting" size="30px"></icon>
		<uni-icons type="cart" size="20" color="red"></uni-icons>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {uniIcons},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
   @import url("./a.css");

	.box{
		width: 375rpx;
		height: 375rpx;
		background-color: $uni-color-error;
		font-size: 40rpx;
		color: #FFFFFF;
		
	}
</style>
