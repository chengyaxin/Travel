<template>
	<!-- ref用来获取dom元素，wrapper的是名字，在当前文件则获取类名为list的dom元素 -->
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">济源</div>
					</div>
				</div>
			</div>	
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>	
			<div class="area" v-for="(item,index) of cities" :ref="index" :key="index">
				<div class="title border-topbottom">{{index}}</div>
				<div class="item-list" v-for="city of item" :key="city.id">
					<div class="item border-bottom">
						{{city.name}}
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default {
		name:"CityList",
		mounted()
		{
			this.scroll = new BScroll(this.$refs.wrapper)
		},
		props:{
			cities:Object,
			hot:Array,
			letter:String
		},
		watch:
		{
			letter()
			{
				if(letter)
				{
					const element = this.$refs[this.letter][0]
        			this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
	&:before
		border-color:#ccc
	&:after
		border-color:#ccc
.list
	overflow:hidden
	position:absolute
	top:1.58rem
	left:0
	right:0
	bottom:0
	.title
		line-height:.54rem
		background:#eee
		padding-left:.2rem
		color:#666
		font-size:.26rem
	.button-list
		overflow:hidden
		padding:.1rem .6rem .1rem .1rem
		.button-wrapper
			float:left
			width:33.33%
			.button
				text-align:center
				margin:.1rem
				border:.02rem solid #ccc
				padding:.1rem
				border-radius:.06rem
	.item-list
		.item
			line-height:.76rem
			padding-left:.2rem
		.border-bottom
		&:before
			border-color:#ccc
</style>