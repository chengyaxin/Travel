<template>
	<div class="list">
		<li class="item" v-for="item of letters" :key="item" :ref="item"
		  @touchstart.prevent="handleTouchStart"
	      @touchmove="handleTouchMove"
	      @touchend="handleTouchEnd"
	      @click="handleLetterClick"
		>{{item}}</li>
	</div>
</template>
<script>
	export default {
		name:"CityAlphabet",
		props:{
			cities:Object,
		},
		data()
		{
			return {
				touchStatus:false,
				startY:0,
				timer:null
			}
		},
		updated(){
			this.startY = this.$refs['A'][0].offsetTop
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
		},
		methods:{
			handleTouchStart()
			{
				//手指触摸时
				this.touchStatus = true;
			},
			handleTouchMove(e)
			{
				if(this.timer)
				{
					clearTimeout(this.timer)
				}
				//延迟16毫秒之后执行,函数节流
				this.timer = setTimeout(()=>{
					//可以上下拖动时
					if(this.touchStatus)
					{
						//touches[0]表示手指的一些信息,79表示头部高度,20是每块字母的高度
						const touchY = e.touches[0].clientY - 79
						const index = Math.floor((touchY - this.startY)/20)
						if(index>=0&&index<this.letters.length)
						{
							this.$emit('change',this.letters[index])
						}					
					}	
				},16)
				
			},
			handleTouchEnd()
			{
				//结束滑动时
				this.touchStatus = false;
			},
			handleLetterClick(e)
			{
				//借助City.vue将数据传递给List.vue
				this.$emit("change",e.target.innerText)
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