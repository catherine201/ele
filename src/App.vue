<template>
  <div id="app">
    <router-view></router-view>
   <nav-com class="one-px-top"></nav-com>
  </div>
</template>

<script>
import Nav from './common/nav.vue'
export default {
 components: {
   [Nav.name]:Nav
 }
}
</script>

<style>
.tabs{
  position: absolute;
  left: 0;
  bottom: 0;
  height: 49px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff
}
.tabs .tab{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 49px;
  justify-content: center;
  align-items: center;
  font-size: 0.09rem
}
.tabs .tab.router-link-active{
 color:#0094ff;
}
.tabs .tab.router-link-active i{
  color:#0094ff;
}
.tabs .tab i{
  font-size: 0.16rem;
  color: #818181
}
</style>
