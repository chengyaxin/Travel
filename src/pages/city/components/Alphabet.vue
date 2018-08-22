<template>
	<div class="list">
		<li class="item" v-for="item of letters" :key="item" :ref="item">{{item}}</li>
	</div>
</template>
<script>
	export default {
		name:"CityAlphabet",
		props:{
			cities:Object,
		},
		computed:{
			letters()
			{
				const letters = []
				for(let i in this.cities)
				{
					letters.push(i)
				}
				return letters
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	display:flex
	flex-direction:column
	justify-content:center
	position:absolute
	right:0
	top:1.58rem
	bottom:0
	width:.4rem
	.item
		text-align:center
		line-height:.4rem
		color:$bgColor
		list-style:none
</style>