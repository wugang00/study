<template>
    <div class="card">
        <Nav></Nav>
        <div class="wh">  
            <Heade :data="userGrade"></Heade>
            <div class="conte">
                <!-- 常用资料 -->
                <div class="data" >
                    <div class="upp">
                        <span class="a1">常用资料</span>
                        <span class="a2">风险审批常用资料，完成认证后可提高审批速度</span>
                    </div>
                    <div class="low">
                        <ul>
                            <li class="low_li" v-for="conts in commonTools" :key="conts">
                                <div class="li_box">
                                    <div class="liimg" :style="{background:'url(' + conts.invalidLogoImg + ')no-repeat',backgroundSize: '.6rem .6rem'}"></div>
                                    <p class="p1"> {{conts.name}} </p>
                                    <p class="p2"> {{conts.text}} </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 补充资料 -->
                <div class="data">
                    <div class="upp">
                        <span class="a1">补充资料</span>
                        <span class="a2">添加更多的个人资料，产品推荐更加准确</span>
                    </div>
                    <div class="low">
                        <ul>
                            <li class="low_li" v-for="addifs in addinfo" :key="addifs">
                                <div class="li_box">
                                    <div class="liimg" :style="{background:'url(' + addifs.invalidLogoImg + ')no-repeat', backgroundSize: '.6rem .6rem'}"></div>
                                    <p class="p1"> {{addifs.name}} </p>
                                    <p class="p2"> {{addifs.text}} </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './common/nav'
import Heade from './common/heade'

export default {
    name: 'card',
    data () {
        return {
            addinfo : [],
            commonTools : [],
            userGrade : {}
        }
    },
    components:{
        Nav,
        Heade,
    },
    //实例创建完执行
    created() {
        this.getapp();
    },
    methods : {
        getapp() {
            this.http(this,{
                url : '/api/user/verify/app',
            }).then(res=>{
                this.addinfo = res.addinfo;
                this.commonTools = res.commonTools;
                this.userGrade = res.userGrade;
            });
        },
    }
}
</script>

<style lang="scss">
    .card{
        background:#f5f5f5;
        padding-bottom:1.1rem;
        // width:100%;
        // height:100%;
        .wh{
            width:100%;
            height:100%;
        }
    }
    // 资料样式
    .conte{
        margin-top:-3.28rem;
    }
    .conte .data{
        background:#fff;
        margin:.2rem auto 0;
        width: 92.53%;
        border-radius: .1rem;
    }
    .conte .data .upp{
        padding: .28rem .3rem;
        border-bottom: 0.01rem solid #e2e4eb;
        .a1{
            font-size: .3rem;
            font-weight: 500;
            color: #0f0f0f;
            line-height: 1;
        }
        .a2{
            font-size: .22rem;
            color: #333333;
            line-height: 1;
            margin-left: .20rem;
        }
    }
    .conte .data .low ul{
        padding-bottom: .4rem;
        display: flex;
        flex-wrap: wrap;
        .low_li{
            width: 33.066666%;
            height: auto;
            float: left;
            padding-top: .4rem;
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-box-align: center;
            .li_box{
                display: flex;
                align-items: center;
                flex-direction: column;
                
            }
            .liimg{
                width: .6rem;
                height: 0.6rem;
                background-size: .6rem .6rem;
            }
            .p1{
                font-size: .24rem;
                color: #333333;
                line-height: 1;
                margin-top: .15rem;
            }
            .p2{
                font-size: .2rem;
                color: #8c8c8c;
                line-height: 1;
                margin-top: .14rem;
            }
        }
    }
</style>