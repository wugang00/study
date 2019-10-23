<template>
    <div class="heade" >
        <div class="hd">
            <div class="hee dsf">
                <span >{{data.grade}} </span>
            </div>
            <div class="hes">
                <p class="p1 fs24">我的预估额度：
                    <span>{{data.amount}}</span> 
                </p>
                <p class="p2 fs24"> <a href="#">请先注册/登录</a> </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'loan-heade',
    data() {
        return {

        }
    },
    props : {
        data : {
            type :Object,
            default : {}
        },
    },
    //实例创建完执行
    created(){
        
    },
    //页面加载完执行
    mounted(){
    },
    methods:{
    
    }
}
    
</script>

<style lang="scss">
    .heade{
        background: url(../../../assets/image/cheader.png) no-repeat;
        background-size: 100% 100%;
        padding: 1.01rem .71rem 3.27rem;
        display: flex;
        align-items: center;
        .hd{
            display: flex;
            align-items: center;
            width:100%;
        }
    }
    .heade .hd{
        .hee{
            width:1.39rem;
            height:1.58rem;
            display:flex;
            flex-direction: column;
            background: url(../../../assets/image/card_level.png) no-repeat;
            background-size:100% 100%;
            span{
                font-size: .54rem;
                font-weight: bold;
                color: #feeb50;
                line-height: 1;
            }
        }
        .hes{
            margin-left: .41rem;
            .p1{
                color:#0f0f0f;
                line-height:.36rem;
                span{
                    font-size:.36rem;
                    font-weight:700;
                }
            }
            .p2{
                background: white;
                text-align: center;
                font-size: .24rem;
                font-weight: 700;
                margin-top: .24rem;
                display: inline-block;
                border-radius: .07rem;
                padding: .08rem .15rem;
            }
        }
    }
</style>