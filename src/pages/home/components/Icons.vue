<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src='item.imgUrl' />
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<!-- div class="swiper-pagination"  slot="pagination"></div> -->
		</swiper>
	</div>
</template>
<script>
	export default {
		name:"HomeIcons",
		data()
		{
			return {
				 swiperOption: {
			          autoplay: true,
			          pagination : {el:'.swiper-pagination'},
			          loop:true
			        },
			     iconList:[
			     	{id:"0001",imgUrl:require('@/assets/images/icon1.png'),desc:"景点门票"},
			     	{id:"0002",imgUrl:require('@/assets/images/icon2.png'),desc:"一日游"},
			     	{id:"0003",imgUrl:require('@/assets/images/icon3.png'),desc:"杭州必游"},
			     	{id:"0004",imgUrl:require('@/assets/images/icon4.png'),desc:"漂流"},
			     	{id:"0005",imgUrl:require('@/assets/images/icon5.png'),desc:"夏日玩水"},
			     	{id:"0006",imgUrl:require('@/assets/images/icon6.png'),desc:"西湖"},
			     	{id:"0007",imgUrl:require('@/assets/images/icon7.png'),desc:"宋城千古情"},
			     	{id:"0008",imgUrl:require('@/assets/images/icon8.png'),desc:"汽车票"},
			     	{id:"0009",imgUrl:require('@/assets/images/icon9.png'),desc:"千岛湖"},
			     	{id:"00010",imgUrl:require('@/assets/images/icon10.png'),desc:"全部玩乐"}
			     ]
			}
		},
		computed:
		{
			pages()
			{
				const pages = [];
				this.iconList.forEach((item,index)=>{
					const page = Math.floor(index / 8);
					if(!pages[page])
					{
						pages[page] = [];
					}
					pages[page].push(item);
				})
				return pages;
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			height:0
			padding-bottom:25%
			.icon-img
				position:absolute
				top:.1rem
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:.2rem
				height:.44rem
				line-height:.44rem
				color:$darkTextColor
				text-align:center
				ellipsis()
</style>