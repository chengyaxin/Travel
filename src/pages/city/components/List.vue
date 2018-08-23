<template>
	<!-- ref用来获取dom元素，wrapper的是名字，在当前文件则获取类名为list的dom元素 -->
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>	
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>	
			<div class="area" v-for="(item,index) of cities" :ref="index" :key="index">
				<div class="title border-topbottom">{{index}}</div>
				<div class="item-list" v-for="city of item" :key="city.id">
					<div class="item border-bottom"  @click="handleCityClick(city.name)">
						{{city.name}}
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
	export default {
		name:"CityList",
		props:{
			cities:Object,
			hot:Array,
			letter:String
		},
		computed:{
			//也可以给该计算属性起个新名字currentCity
			...mapState({
				currentCity:'city'
			})
		},
		watch:
		{
			letter()
			{
				if(this.letter)
				{
					//this.$refs[this.letter]数组而不是dom元素或者dom选择器
					this.scroll.scrollToElement(this.$refs[this.letter][0])
				}
			}
		},
		methods:{
			handleCityClick(city)
			{
				//1.派发一个名字是changeCity的Action，把city传过去，以此来改变city
				// this.$store.dispatch("changeCity",city)
				// 2.略过action,直接commit给mutation来改变city
				// this.$store.commit("changeCity",city)
				//3.可以通过mapMutations来实现commit给mutation来改变city
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(["changeCity"])
		},
		mounted()
		{
			this.scroll = new BScroll(this.$refs.wrapper)
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