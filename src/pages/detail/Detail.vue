<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>
<script>
	import DetailBanner from './components/Banner.vue'
	import DetailHeader from './components/Header.vue'
	import DetailList from './components/List.vue'
	import axios from 'axios'
	export default {
		name:"Detail",
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data()
		{
			return {
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				list: []	
			}
		},
		methods:{
			getDetailInfo()
			{
				let self = this
				axios.get("/api/detail.json",{params:{id:this.$route.params.id}})
				.then((res)=>{	
					res = res.data
					if(res.ret && res.data)
					{
						console.log(res)
						const data = res.data
						self.list = data.categoryList
						self.sightName = data.sightName
						self.bannerImg = data.bannerImg
						self.gallaryImgs = data.gallaryImgs
					}
				}).catch((e)=>{

				})
			}
		},
		mounted()
		{
			this.getDetailInfo()
		}
	}
</script>
<style lang="stylus" scoped>
	.content
		height:50rem
</style>