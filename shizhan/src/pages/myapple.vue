<template>
  <div class="apple">
    <div class="ple_title pof">
        <div class="left poa" @click="upward()"> </div>
        <div class="ples tac fs32">我的申请</div>
    </div>
    <div class="ple_con">
        <dl>
            <dt>
                <div class="grouop"> </div>
            </dt>
            <dd>您还没有申请任何贷款</dd>
            <button class="btnple dsb">申请贷款</button>
        </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myapple',
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

<style lang="scss" scoped>
    .apple .ple_title{
        z-index:100;
        width:100%;
        height: .8rem;
        top:0;
        left:0;
        padding-top: .75rem;
        background:#fff;
        .left{
            background:url(../assets/image/left.png) center no-repeat;
            background-size: .2rem .34rem;
            left: .35rem;
            top: .75rem;
            width:.3rem;
            height:.42rem;
        }
    }
    .apple .ple_con{
        padding-top: 2.3rem;
        dl{
            width:80%;
            margin: 0 auto;
            dt{
                .grouop{
                    background:url(../assets/image/Group.png) no-repeat;
                    background-size:3rem 2.78rem;
                    width:3rem;
                    height:2.78rem;
                    margin: auto;
                }
            }
            dd{
                font-size:.38rem;
                text-align:center;
                margin-top:.4rem;
            }
            .btnple{
                background: linear-gradient(135deg,#ffdf5f,#ffd115);
                font-size:.34rem;
                font-weight:700;
                border-radius:.1rem;
                border:none;
                width:3rem;
                margin: .7rem auto 0 auto;
                line-height:.8rem;
                outline: none;
            }
        }
    }
</style>
