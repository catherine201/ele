<<template>
 <div class="seller-List">
<div class="comment">
    <i></i>
    推荐商家
    <i></i>
</div>
<ul class="">

</ul>
 </div>
</template>

<script>
export default {
name:'home-list',
}
</script>

<style scoped>
.seller-List{
    width: 100%;
    height: 800px;
    margin-top: 0.05rem;
    background: #fff
}
.comment{
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    font-size: 0.145rem;
    position: relative
}
.comment i:nth-child(1){
    display: inline-block;
    width: 0.2rem;
    height: 2px;
    position: absolute;
    background: #999;
    left: 33%;
    top: 45%
}
.comment i:nth-child(2){
    display: inline-block;
    width: 0.2rem;
    height: 2px;
    position: absolute;
    background: #999;
    left: 60%;
    top: 45%
}
</style>