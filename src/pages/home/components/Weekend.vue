<template>
	<div>
		<div class="weekend-title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
				recommendList:[
					{id:"0001",imgUrl:require("@/assets/images/weekend1.jpg"),title:"杭州彻天彻地童玩中心",desc:"浪漫的世界儿童乐园"},
					{id:"0002",imgUrl:require("@/assets/images/weekend1.jpg"),title:"杭州彻天彻地童玩中心",desc:"浪漫的世界儿童乐园"},
					{id:"0003",imgUrl:require("@/assets/images/weekend1.jpg"),title:"杭州彻天彻地童玩中心",desc:"浪漫的世界儿童乐园"},
					{id:"0004",imgUrl:require("@/assets/images/weekend1.jpg"),title:"杭州彻天彻地童玩中心",desc:"浪漫的世界儿童乐园"},
				]
			}
		},
	}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
	.weekend-title
		margin-top:.2rem
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrapper
		height:0
		overflow:hidden
		padding-bottom:33.9%
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