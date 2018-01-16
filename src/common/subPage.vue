<template>
<div class="sub-page" :id='subPageId'>
  <div class="wrapper">
<slot></slot>
</div>
</div>

</template>

<script>
export default {
  name:'sub-page',
  props: {
    subPageId:String
  }
}
</script>

<style scoped>
.sub-page{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    background: #fff;
    z-index: 1
}
</style>
