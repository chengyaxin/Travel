<template>
 <div class="wriper">
 <!-- 加v-if="list.length",表示list中有数据的时候才创建这个swiper,为了解决页面初始化时最先出现第四章轮播图 -->
 	<swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
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
        }
      }
    },
    props:{
      list:Array
    },
    computed: {
      showSwiper()
      {
        return this.list.length
      }
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