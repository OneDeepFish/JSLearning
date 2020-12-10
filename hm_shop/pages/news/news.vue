<template>
	<view class="news">
		<news-item :newsList="newsList" @goDetail="naviDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news_list.vue'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.message;
			},
			naviDetail(id){
				uni.navigateTo({
					url:'./new_detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews();
		},
		components:{
			"news-item":newsItem
		}
	}
</script>

<style lang="scss">
	.news {
		
	}
</style>
