<template>
 <div class="wriper">
 	<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
 </div>
</template>
<script>
  export default {
     name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: true,
          pagination : {el:'.swiper-pagination'},
          loop:true
        },
        swiperList:[
        {id:'0001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/12/a100ed94e5ea3102.jpg_750x200_03956e08.jpg'},
        {id:'0002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'}
        ]
      }
    },
    computed: {
    },
    mounted() {
    }
  }
</script>
<!-- 宽100%,高度相对于宽度撑开26.67% ,其目的是页面加载时就撑开而不是加载完才撑开-->
<style lang="stylus" scoped>
.wriper >>> .swiper-pagination-bullet-active
		background:#fff
.wriper
	over-flow:hidden
	width:100%
	height:0
	padding-bottom:26.67% 
	background:#eee
	.swiper-img
		width:100%
</style>