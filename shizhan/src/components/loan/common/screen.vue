<template>
    <nav>
        <ul class="c">
            <li>
                <span>金额范围</span>
                <span></span>
            </li>
            <li>
                <span>推荐排序</span>
                <span></span>
            </li>
            <li>
                <span>贷款类型</span>
                <span></span>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name:'loan-navs' ,
        methods:{
            
            handleone:function(){
                var pof = document.getElementsByClassName("pof")[0];
                var one = document.getElementsByClassName("contan")[0];
                pof.style.display="block"
                one.style.display="block"
                console.log(123)
            },
            handletwo:function(){
                var pof = document.getElementsByClassName("pof")[0];
                var one = document.getElementsByClassName("contan")[0];
                pof.style.display="block"
                one.style.display="none"
                console.log(456)
            },
            handlethree:function(){
                var pof = document.getElementsByClassName("pof")[0];
                var one = document.getElementsByClassName("contan")[0];
                pof.style.display="block"
                one.style.display="none"
                console.log(789)
            }
            
        },
        computeds:{

        },
    }
</script>

<style>
    nav{
        position: fixed;
        top: 1.24rem;
        background: #fff;
        width: 100%;
        height: .48rem;
        left: 0;
        z-index: 52;
        padding: .14rem 0;
        ul li{
            height: .48rem;
            float: left;
            width: 32.3%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    nav ul li{
        height: .48rem;
        float: left;
        width: 32.3%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    nav ul li span{
        font-size: .28rem;
    }
    nav ul li span:nth-child(2){
        width: .149rem;
        height: .09rem;
        background: url(../../../assets/image/sand.png);
        background-size: .16rem .1rem;
        margin-left: .08rem;
        overflow: hidden;
    }
    .cur{
        background:red;
    }
</style>