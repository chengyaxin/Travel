<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
			    <swiper-slide v-for="(item,index) of imgs" :key="index">
			      <img class="gallary-img" :src="item"/>
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div> 
		  </swiper>
		</div>
	</div>
</template>
<script>
	export default {
		name:"CommonGallary",
		data() {
		      return {
		        swiperOption: {
		          autoplay: true,
		          pagination : {el:'.swiper-pagination',type:"fraction"},
		          loop:true,
		          //解决该组件出现时轮播错误问题（宽度计算错误），swiper插件只要监听到该元素或父级元素发生dom结构变化时自动刷新一次
		          observeParents:true,
		          observer:true,
		        }
		    }
		},
		props:{
			imgs:{
				type:Array,
				default()
				{
					return []
				}
			}
		},
		methods:{
			handleGallaryClick()
			{
				this.$emit("close")
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content:center
		z-index:99
		position:fixed
		left:0
		right:0
		top:0
		bottom:0
		background:#000
		.wrapper
			height:0
			width:100%
			padding-bottom:100%
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem
</style>