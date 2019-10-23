<template>
  <div class="service">
    <div class="page_title">
      <div class="left poa" @click="upward()"> </div>
      <div class="ples tac fs32">客服中心</div>
    </div>
    <div class="svie_con">
      <div class="icmg">
          <a> 微信公众号 </a>
          <a> 客服热线 </a>
      </div>
      <div class="time">
        <div class="time_title">
          <img src="../assets/image/ic_time.png">
          <p>服务时间</p>
        </div>
        <p class="p1">工作日：9：00-12：00 13：30-18：00</p>
        <p class="p2">休息日可留言，节假日以公告为准</p>
      </div>
      <button class="sbtn"> 意见反馈 </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myservice',
  data() {
    return {
    }
  },
  //实例创建完执行
  created(){ },
  //页面加载完执行
  mounted(){ },
  methods:{
    upward(){
        this.$router.push({
            name : 'my'
        });
    }
  }
}
</script>

<style lang="scss">
body{
  background:#fff;
}
// 头部
    .service .page_title{
        width:100%;
        height: .8rem;
        padding-top: .75rem;
        background:#fff;
        border-bottom:1px solid #d1d1d1;
        .left{
            background:url(../assets/image/left.png) center no-repeat;
            background-size: .15rem .3rem;
            left: .3rem;
            top: .8rem;
            width:.3rem;
            height:.42rem;
        }
    }
    // 内容
    .service  .svie_con{
      padding-top:.7rem;
      .icmg{
        padding:0 .83rem;
        display:flex;
        justify-content:space-between;
        a{
          border:.03rem solid #ffd115;
          padding:.2rem .36rem .2rem .91rem;
          font-size: .26rem;
          font-weight: 300;
        }
        a:nth-child(1){
          background:url(../assets/image/ica1.png) no-repeat center;
          background-size: .4rem .4rem;
          background-position: .4rem;
        }
        a:nth-child(2){
          background:url(../assets/image/ica2.png) no-repeat center;
          background-size: .4rem .4rem;
          background-position: .4rem;
        }
      }
      .time{
        margin: 0 .4rem;
        padding-top:1.1rem;
        .time_title{
          display:flex;
          align-items: center;
          img{
            width:.48rem;
            height:.48rem;
          }
          p{
            font-size:.28rem;
            margin-left:.16rem;
            color:#0f0f0f;
          }
        }
        .p1,.p2{
          margin-top:.21rem;
          margin-left:.64rem;
          color:#0f0f0f;
          font-size:.26rem;
        }
      }
      .sbtn{
        margin:.7rem .55rem 0;
        width:6.4rem;
        height:.8rem;
        background:linear-gradient(135deg,rgba(255,223,95,1) 0%,rgba(255,209,21,1) 100%);
        border:none;
        border-radius:.1rem;
        font-size:.34rem;
        font-weight:700;
      }
    }
    
</style>
