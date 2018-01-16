<template>
  <div>
      <header class="header">
          <div class="address-wrapper">
              <div class="address">
             <i class="iconfont">&#xe638;</i><span>深圳西部硅谷C座</span><i class="iconfont">&#xe639;</i>
          </div>
          </div>
          <div class="search-wrapper">
        <div class="search">
            <i class="iconfont fdj">&#xe641;</i>搜索商家,商品名称
        </div>
      </div>
      </header>
    
  </div>
</template>

<script>
export default {
name:'home-header'
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 1.06rem;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.header i{
    color: #fff;
    display: inline-block;
    margin: 0 0.06rem
}
.address-wrapper{
  width: 100%;
  height: 0.56rem;
  display: flex;
  box-sizing: border-box;
  padding: 0.29rem 0.14rem 0.16rem 0.14rem;
}
.address{
    justify-content: center
}
.address span{
    font-size: 0.16rem;
    font-weight: bolder;
    color: #fff
}
.search-wrapper{
    width: 100%;
    height: 0.5rem;
    box-sizing: border-box;
    padding: 0.08rem 0.14rem; 
}
.search{
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 0.131rem;
    color: #999999;
    position: relative
}
.search .fdj{
position: absolute;
color: #999;
font-size: 0.16rem;
left: 25%;
top: 34%
}

</style>
