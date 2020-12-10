<template>
	<view class="total">
		<new_list :news="news" @goNewDetail="goDetailNew"></new_list>
	</view>
</template>

<script>
	import newsList from "../../components/news_list.vue"
	export default {
		data() {
			return {
				news:[]
			}
		},
		methods: {
			async getNews(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.news = res.data.message;
			},
			goDetailNew(id){
				console.log(id);
				uni.navigateTo({
					url:'./new_detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews();
		},
		components:{
			"new_list":newsList
		}
		
	}
</script>

<style lang="scss">
	
</style>
