<template>
	<div>
		<div class="weekend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>	
		</ul>
	</div>
</template>
<script>
	export default{
		name:"HomeWeekend",
		data()
		{
			return {
			
			}
		},
		props:{
			list:Array
		}
	}
</script>
<!-- 图片宽高比height:0
		overflow:hidden
		padding-bottom:37.09% -->
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.weekend-title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrapper
		height:0
		overflow:hidden
		padding-bottom:37.09%
		.item-img
			width:100%
	.item-info
		padding:.1rem
	.item-title
		ellipsis()
		line-height:.54rem
		font-size:.32rem
	.item-desc
		ellipsis()
		line-height:.4rem
		color:#ccc

</style>