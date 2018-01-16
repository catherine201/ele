<template>
<div class="page" :id='pageId' ref='page'>
  <div class="wrapper">
   <slot></slot>
</div>
</div>

</template>

<script>
import IScroll from 'iscroll'
export default {
  name:'page',
  props:{
    pageId:String
  },
  mounted () {
    let pageScroll=new IScroll(this.$refs.page,{
        scrollbars: true,
        mouseWheel: true,   
    })
  }

}
</script>

<style scoped>
.page{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 49px;
    overflow: hidden;
    width: 100%;

}
</style>
