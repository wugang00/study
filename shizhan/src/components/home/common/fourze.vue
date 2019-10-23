<template>
    <div class="fourze dsf">
        <dl>
            <dt>
                <img src="../../../assets//image/ban1.png" alt="">
            </dt>
            <dd>高通过率</dd>
        </dl>
        <dl>
            <dt>
                <img src="../../../assets//image/ban2.png" alt="">
            </dt>
            <dd>高通过率</dd>
        </dl>
        <dl>
            <dt>
                <img src="../../../assets//image/ban3.png" alt="">
            </dt>
            <dd>高通过率</dd>
        </dl>
        <dl>
            <dt>
                <img src="../../../assets//image/ban4.png" alt="">
            </dt>
            <dd>高通过率</dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'fourze',
        
    }
</script>

<style scoped>
    .fourze{
        padding: .15rem .15rem .16rem .15rem;
        background: #fff;
    }
    dl{
        width: 25%;
        display: block;
        text-align: center;
    }
    dl dt{
        width: .8rem;
        height: .8rem;
        margin: 0 auto;
    }
    dl dt img{
        width: 100%;
    }
    dl dd{
        font-size: .24rem;
        padding-top: .15rem;
    }
</style>