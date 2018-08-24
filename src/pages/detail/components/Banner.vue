<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" />
			<div class="banner-info">
				<div class="banner-title">上海迪士尼乐园</div>
				<div class="banner-number"><span class="iconfont banner-icon">
				&#xe692;
			</span>39</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>
<script>
import CommonGallary from "common/gallary/Gallary"
	export default {
		name:"Banner",
		components:{
			CommonGallary
		},
		data()
		{
			return {
				imgs:['http://img1.qunarzz.com/sight/p0/1711/a7/a753b93561cdda70a3.img.jpg_350x240_6ce92df9.jpg','http://img1.qunarzz.com/sight/p0/1711/d9/d9119bcadf6045f5a3.img.jpg_350x240_95ba8b32.jpg'],
				showGallary:false
			}
		},
		methods:{
			handleBannerClick()
			{
				this.showGallary = true
			},
			handleGallaryClose()
			{
				this.showGallary = false
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.banner
		position:relative
		overflow:hidden
		height:0
		padding-bottom:55%
		.banner-img
			width:100%
		.banner-info
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.6rem
			color:#fff
			background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
			.banner-title
				flex:1
				font-size:.32rem
				padding:0 .2rem
			.banner-number
				line-height:.32rem
				height:.32rem
				margin-top:.14rem
				padding:0 .4rem
				border-radius:.2rem
				background:rgba(0,0,0,.8)
				font-size:.24rem
				.banner-icon
					font-size:.24rem


</style>