<template>
	<div>
		<div class="item" v-for="(item,index) of list" :key="index">
			<div class="item-title border-bottom">
				<span class="item-title-icon">	
				</span>
				{{item.title}}
			</div>
			<!-- 在层级关系分明但是具体几层却不清楚时用递归组件 -->
			<div v-if="item.children" class="item-children">
			<!-- detail-list是对应下面的name,传递数据给自己，即递归显示 -->
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"DetailList",
		props:{
			list:Array
		}
	}
</script>
<style lang="stylus" scoped>
	.item-title-icon
		position:relative
		top:.06rem
		left:.06rem
		display:inline-block
		width:.36rem
		height:.36rem
		background:url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") 0 -.45rem no-repeat
		margin-right:.1rem
		background-size:.4rem 3rem
	.item-title
		line-height:.8rem
		font-size:.32rem
		padding:0 .2rem
	.item-children
		padding:0 .2rem
</style>