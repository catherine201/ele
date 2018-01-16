<template>
<div>
  <page pageId='home'>
    <!--  <h1>首页</h1>
    <ul class="businessList">
      <li  v-for="(item,index) in listData" class="businessItem" :key="index">
      <router-link :to="'/home/businessDetail/'+index">{{item}}</router-link>
    </li>
    </ul> -->
    <home-header></home-header>
<home-banner></home-banner>
<div class="packet">
  <img src="https://fuss10.elemecdn.com/3/c8/45b2ec2855ed55d90c45bf9b07abbpng.png?imageMogr/format/webp/thumbnail/!710x178r/gravity/Center/crop/710x178/" alt="">
</div>
<home-list></home-list>
  </page>
  <!-- <transition enter-active-class="slideInRight ani"
    leave-active-class="slideOutRight ani">
<router-view></router-view>
</transition> -->

</div>
</template>

<script>
import Page from '../../common/page.vue'
import Header from '../../components/home/index/Header.vue'
import Banner from '../../components/home/index/Banner.vue'
import List from '../../components/home/index/List.vue'
export default {
  data(){
    return {
      listData:[1,2,3,4,5,6,7,8]
    }
  },
components: {
  [Page.name]:Page,
  [Header.name]:Header,
  [Banner.name]:Banner,
  [List.name]:List
}
}
</script>

<style scoped>
.businessList{
  width:100%;
}
.businessList .businessItem{
  width:100%;
  height:200px;
  light-height:50px;
  text-align:center;
}
.packet{
  width: 100%;
  height: 0.86rem;
  box-sizing: border-box;
  padding: 0 2.666667vw;
  background: #fff
}
.packet img{
  width:94.666667vw;
  height: 0.86rem;
}
</style>