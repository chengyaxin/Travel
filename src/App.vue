<template>
   <div id="app">
   <!-- exclude="Detail" 表示详情页不被缓存，为了解决进入详情页面只进行一次获取数据的问题（实际上应该每进入一次应重新获取数据）-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
