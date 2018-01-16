<template>
  <nav class="tabs">
     <!-- <router-link class="tab" v-for="(item,index) in tabsData" :key="index" :to='item.path'><i class="iconfont">{{iconList[index]}}</i>{{item.title}}</router-link> -->
     <router-link class="tab" to='/home'><i class="iconfont">&#xe722;</i>首页</router-link>
     <router-link class="tab" to='/discover'><i class="iconfont">&#xe612;</i>发现</router-link>
     <router-link class="tab" to='/order'><i class="iconfont">&#xe652;</i>订单</router-link>
     <router-link class="tab" to='/mine'><i class="iconfont">&#xe60d;</i>我的</router-link>
  </nav>
</template>

<script>
export default {
   name:'nav-com',
   data(){
       return {
           tabsData:[
               {title:'首页',path:'/home'},
               {title:'发现',path:'/discover'},
               {title:'订单',path:'/order'},
               {title:'我的',path:'/mine'},
           ],
           iconList:['&#xe722;','&#xe612;','&#xe652;','&#xe60d;']
       } 
   }
}
</script>

<style>

</style>
