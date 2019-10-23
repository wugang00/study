<template>
  <div class="cpln">
    <div class="page_title pof">
        <div class="left poa" @click="upward()"> </div>
        <div class="ples tac fs36">投诉反馈</div>
    </div>
    <div class="cplan_con">
        <!-- 投诉对象 -->
        <p class="ptitle fw7">选择投诉的对象</p>
        <div class="con_list">
            <div class="con_li dsf">
                <span class="key">投诉订单</span>
                <span class="val">
                    <span>选择要投诉的订单</span>
                    <img src="../assets/image/aowr.png" class="aowr">
                </span>
            </div>
            <div class="con_li dsf">
                <span class="key">投诉产品</span>
                <span class="val">
                    <span>选择要投诉的产品</span>
                    <img src="../assets/image/aowr.png" class="aowr">
                </span>
            </div>
            
        </div>
        <!-- 投诉内容 -->
        <p class="ptitle fw7">投诉内容</p>
        <div class="con_list">
            <div class="con_li dsf">
                <span class="key">投诉标题</span>
                <span class="val">
                    <input class="ipt_txt fs28" maxlength="10" placeholder="请输入投诉标题">
                </span>
            </div>
        </div>
        <!-- 填写详细内容 -->
        <div class="detled pro">
            <textarea class="fs26" placeholder="填写您要投诉的详细内容" maxlengt="50" cols="30" rows="10">
            </textarea>
            <div class="textnum poa fs24"> 
                <span>0</span>/<span>50</span>
            </div>
        </div>
        <!-- 证据 -->
        <div class="evnImg">
            <div class="imgli">
                <div class="avatar pro"> 
                    <div class="content">
                        <div class="imgli">
                            <img src="../assets/image/evnadd.png">
                            <input class="input-file poa">
                        </div>
                        <span class="num poa">0/4</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 提示文案 -->
        <div class="tishi dsf">
            <img src="../assets/image/ic_tishi.png">
            <p> 一旦核实，我们将尽快处理或与您联系 </p>
        </div>
        <!-- 按钮 -->
        <div class="tijiao">
            <button> 提交 </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'complain',
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
// 头部
    .cpln .page_title{
        width:100%;
        height: .8rem;
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
    // 内容
    .cpln  .cplan_con{
        padding-top:1.7rem;
        background:#fff;
        .ptitle{
            font-size:.28rem;
            padding: 0 .4rem;
        }
        .ptitle:nth-child(3){
            margin-top:.34rem;
        }
        .con_list .con_li{
            padding:.26rem .4rem;
            justify-content:space-between;
            border-bottom:1px solid #e2e4eb;
            .key{
                font-size:.28rem;
                color:#333333;
                font-weight:300;
            }
            .val{
                font-size:.28rem;
                color:#8c8c8c;
                font-weight:300;
                display:flex;
                align-items:center;
                img{
                    width: .15rem;
                    height: .27rem;
                    margin-left:.1rem;
                }
            }
        }
        .con_list .con_li .val .ipt_txt{
            background:none;
            border:none;
            outline: none;
            text-align:right;
        }
        // 详细内容
        .detled{
            padding:.24rem 0;
            text-align:center;
            textarea{
                width:6.17rem;
                height:1.86rem;
                border:1px solid #e2e4eb;
                border-radius:.1rem;
                padding: .2rem .26rem;
                line-height:.37rem;
                outline:none;
            }
            .textnum{
                right:.6rem;
                bottom:.5rem;
                color:#8c8c8c;
            }
        }
        // 证据
        .evnImg{
            border-top:1px solid #e2e4eb;
            border-bottom:1px solid #e2e4eb;
            padding:.22rem .3rem .22rem;
            .imgli .avatar{
                cursor: pointer;
                .content .num{
                    right:0;
                    bottom:-.2rem;
                    color:#8c8c8c;
                }
                .content .imgli{
                    display:flex;
                    flex-wrap:wrap;
                    width:100%;
                }
                img{
                    width:1.6rem;
                    height:1.6rem;
                    display:block;
                    margin: .11rem .05rem .11rem 0;
                }
                .input-file{
                    width:1.6rem;
                    height:1.6rem;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    cursor: pointer;
                }
            }
        }
        // 提示
        .tishi{
            padding:.2rem .4rem;
            justify-content:flex-start;
            img{
                width:.28rem; 
                height:.28rem; 
            }
            p{
                margin-left:.1rem;
            }
        }
        // 提交
        .tijiao{
            text-align:center;
            padding: .5rem 0;
            button{
                width:6.4rem;
                height:.8rem;
                font-size:.36rem;
                background: linear-gradient(135deg,#ffdf5f,#ffd115);
                border:none;
                border-radius:.1rem;
            }
        }
    }
    
</style>
