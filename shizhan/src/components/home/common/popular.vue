<template>
    <div class="popular">
        <div class="litop dsf">
            <span> </span>
            <span class="fs3">热门推荐</span>
            <span> </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'popular',
  
}
</script>

<style>
    /* 顶部样式 */
    .popular .litop{
        padding: 0 .36rem;
        height: .86rem;
        justify-content: flex-start;
        
    }
    .popular .litop span:nth-child(1){
        width: .06rem;
        height: .36rem;
        background: #ffd115;
        border-radius: .03rem;
        margin-right: .2rem;
    }
    .popular .litop span:nth-child(3){
        width: .5rem;
        height: .2rem;
        margin-left: auto;
        background:url(../../../assets/image/three.png) no-repeat center right;
        background-size: .38rem .1rem;
    }
   
</style>