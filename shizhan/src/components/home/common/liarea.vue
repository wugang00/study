<template>
    <div class="liarea">
        <!-- 列表 -->
        <div class="lists pro dsf dsb" v-for="(list,index) in data" :key="index">
            <!-- 1平台名字 -->
            <div class="planame dsf">
                <span class="logo">
                    <img :src="list.iconURL">
                </span>
                <span class="name ">{{list.platformName}}</span>
                <span class="label fs20">
                    {{list.tag}}
                </span>
            </div>
            <!-- 2平台放贷文案  -->
            <div class="detail  dsf">
                <!-- 额度 -->
                <div class="number">
                    <span class="first fs34">
                        {{list.minimumAmount}} ~ {{list.maximumAmount}}
                    </span>
                    <div class="fc2">额度(元)</div>
                </div>
                <div class="term">
                    <!-- 期限 -->
                    <span class="first fs24">
                        期限 {{list.minimumPeriod}} ~ {{list.maximumPeriod}}
                    </span>
                    <!-- 放贷时间 -->
                    <div class="fc2 fs24"> {{list.lendingTime}}</div>
                </div>
                <!-- 申请按钮 -->
                <div class="btn  dsf">
                    <div class="tac dsf" style="height: 0.54rem; border-radius: 0.27rem;
                    color: rgb(15,15,15); font-size: 0.24rem; width: 1.4rem;">
                        立即申请
                    </div>
                </div>
            </div>
            <!-- 3说明文案  -->
            <div class="tips dsf">
                <div>{{list.desc}}</div>
            </div>
            <!-- 4进度条 -->
            <div class="progress poa fs20">
                <div class="bar">
                    <span class="dsb" :style="'width:'+list.rate+'%'">
                    </span>
                </div>
                <p class="tacs pt10">已申请{{list.rate}}% </p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'liarea',
    data() {
        return {

        }
    },
    props : {
        data : {
            type :Array,
            default : []
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

<style  lang="scss">
    /* 列表样式 */
     .liarea{
        justify-content: flex-start;
        background: red;
        margin-bottom:1.5rem;
    }
    .liarea .lists{
        margin-bottom: .16rem; 
        height: 2.66rem;
        background: white;
        
    }
    /* 1平台名字 */
    .liarea .lists .planame{
        padding: .2rem .36rem;
        justify-content:flex-start;
        align-items:center;
        display:flex;
        .logo{
            width:.6rem;
            height:.6rem;
            margin-right:.16rem;
            img{
                border-radius:.5rem;
                width:100%;
            }
        }
        .name{
            color:#ffd115;
            font-weight:600;
            margin-right:.2rem;
        }
        .label{
            border:1px solid #ffd115;
            border-radius:.3rem;
            padding:0 .14rem;
            font-size:.2rem;
            color:#ffd115;
            margin-right:.12rem;
            font-weight:500;
        }
    }
    /* 2平台放贷文案 */
    .liarea .lists .detail{
        padding:.05rem .36rem;
        justify-content:flex-start;
        // justify-content:space-between;
        .number,{
            width:2.5rem;
            font-weight:600;
            .first{
                color:#ffd115;
            }
        }
        .term{
            width:2.5rem;
        }
        .btn{
            width:1.4rem;
            line-height:.54rem;
            background:#ffd115;
            border:1px solid #ffd115;
            border-radius:.5rem;
            // justify-content:flex-end;
        }
    }
    /* 3说明文案 */
    .liarea .lists .tips{
        margin-top:.15rem;
        margin-left:.37rem;
        border-top:1px solid #e2e4e8;
        padding: .15rem .4rem .15rem 0;
        justify-content:flex-start;
    }
    /* 3进度条 */
    .liarea .lists .progress{
        width:1.3rem;
        height:.5rem;
        top:.4rem;
        right:.4rem;
        .bar{
            background: #f2f2f2;
            border-radius: .05rem;
            width: 1.2rem;
            height: .1rem;
            span{
                height: .1rem;
                border-radius: .05rem;
                background: linear-gradient(135deg, #ffdf5f 0%, #ffd115 100%);
                transition: all 1s;
                width: 0;
            }
        }
        p{
            font-weight:580;
            color:#8c8c8c;
        }
    }
</style>