<template>
    <div class="liarea">
        <!-- 列表 -->
        <div class="lists pro" v-for="list in data">
            <div class="title  dsf">
                <span class="logo">
                    <img :src="list.iconURL">
                </span>
                <span class="name fs24">{{list.platformName}}</span>
                <span class="label">{{list.tag}}</span>
            </div>
            <div class="detail  dsf">
                <div class="number">
                    <span class="first">
                        {{list.minimumAmount}} ~ {{list.maximumAmount}}
                    </span>
                    <div class="fc2 fs24">额度(元)</div>
                </div>
                <div class="term">
                    <!-- 期限 -->
                    <span class="first fs24">
                        期限 {{list.minimumPeriod}} ~ {{list.maximumPeriod}}
                    </span>
                    <!-- 放贷时间 -->
                    <div class="fc2 fs24"> {{list.lendingTime}}</div>
                </div>
                <div class="btn">
                    <div class="tac dsf" style="height: 0.54rem; border-radius: 0.27rem;
                    color: rgb(15,15,15); font-size: 0.24rem; width: 1.4rem;">
                        立即申请
                    </div>
                </div>
            </div>
            <div class="tips">
                <!-- 说明  -->
                <div>{{list.desc}}</div>
            </div>
            <div class="progress poa">
                <div class="bar">
                    <span class="dsb" :style="{
                        width:list.rate+'%'
                    }"></span>
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

<style>
    /* 顶部样式 */
    .liarea .litop{
        padding: 0 .36rem;
        height: .86rem;
        justify-content: flex-start;
        
    }
    .liarea .litop span:nth-child(1){
        width: .06rem;
        height: .36rem;
        background: #ffd115;
        border-radius: .03rem;
        margin-right: .2rem;
    }
    .liarea .litop span:nth-child(3){
        width: .5rem;
        height: .2rem;
        margin-left: auto;
        background:url(../../../assets/image/three.png) no-repeat center right;
        background-size: .38rem .1rem;
    }
    /* 列表样式 */
    .liarea{
        justify-content: flex-start;
        background: white;
    }
    .liarea .lists{
        margin-bottom: .16rem;
        width: 7.5rem;
        height: 2.66rem;
    }
    .liarea .title{
        margin-left: .18rem;
        width: 7.5rem;
        height: 1rem;
        justify-content: flex-start;
    }
    .liarea .logo{
        width: .6rem;
        height: .6rem;
        margin-right: .16rem;
    }
    .liarea .logo img{
        width: 100%;
        border-radius: .5rem;
    }
    .liarea .name{
        margin-right: .2rem;
    }
    .liarea .label{
        color: #ffd115;
        border: 1px solid #ffd115;
        border-radius: .5rem;
        margin-right: .12rem;
        padding: 0 .14rem;
    }
    .liarea .detail{
        padding-left: .18rem;
        width: 7.5rem;
        height: .86rem;
        justify-content:flex-start;
    }
    .liarea .detail .number,
    .liarea .detail .term{
        width: 2.5rem;
        height: .76rem;
    }
    .liarea .detail .number .first{
        color: #ffd115;
        font-weight: 700;
        font-size: .34rem;
    }
    .liarea .detail .term .fc2{
        color: #ffd115;
    }
    .liarea .detail .btn{
        width: 1.5rem;
        height: .54rem;
        background: #ffd115;
        border-radius: .5rem;
    }
    .liarea .lists .tips{
        width: 7.1rem;
        height: .6rem;
        margin-top: .15rem;
        padding: .15rem .4rem .15rem .18rem;
        border-top: 1px solid red;

    }
    .liarea .lists .progress{
        width: 1.8rem;
        top: -2.3rem;
        left: 5.4rem;
        font-size: .23rem;
    }
    .liarea .lists .progress .bar{
        background: #f2f2f2;
        border-radius: .05rem;
        width: 1.2rem;
        height: .1rem;
    }
    .liarea .lists .progress .bar span{
        height: .1rem;
        border-radius: .05rem;
        background: linear-gradient(135deg, #ffdf5f 0%, #ffd115 100%);
        transition: all 1s;
        width: 0;
        /* display: block; */
    }
</style>