<template>
    <div class="zone dsf">
        <div class="zimg">
            <img src="../../../assets/image/index1.png" alt="">
        </div>
        <div class="zimg">
            <img src="../../../assets/image/index2.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'zone',
  
}
</script>

<style>
    .zone{
        margin-top: .16rem;
        padding: .32rem .24rem;
        background: #fff;
    }
    .zone .zimg{
        width: 3.4rem;
        height: 1.6rem;
    }
    .zone .zimg img{
        width: 100%;
    }
    .zone .zimg:nth-child(2){
        margin-left: .22rem;
    }
    
</style>