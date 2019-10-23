<template>
    <div class="my">
        <Nav></Nav>
        <!-- 页面内容 -->
        <div class="content">
            <!-- 登录注册 -->
            <div class="head pro">
                <dl>
                    <dt><img src="../../assets/image/headpor.png"></dt>
                    <dd>
                        <!-- 未登录 -->
                        <p v-if="frontafter == null" @click="toLogin()" class="login"><span>登录/注册</span></p>
                        <!-- 已登录 -->
                        <p v-else @click="alert()" class="login"><span>{{frontafter}}</span></p>
                    </dd>
                </dl>
                <div class="setup poa">
                    <img src="../../assets/image/hd1.png" alt="">
                    <div class="msg">
                        <img src="../../assets/image/hd2.png" alt="">
                    </div>
                </div>
            </div>
            <!-- 我的订单 -->
            <div class="order">
                <div class="upper">
                    <span class="sp1" >我的订单</span>
                    <span class="sp2" >查看全部</span>
                </div>
                <div class="lower">
                    <dl>
                        <dt><img src="../../assets/image/base1.png" alt=""></dt>
                        <dd>待绑卡</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../assets/image/base2.png" alt=""></dt>
                        <dd>待确认</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../assets/image/base3.png" alt=""></dt>
                        <dd>待体现</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../assets/image/base4.png" alt=""></dt>
                        <dd>待还款</dd>
                    </dl>
                </div>
            </div>
            <!-- 常用功能 -->
            <div class="tool">
                <div class="upper">
                    <span>常用功能</span>
                </div>
                <div class="lowers">
                    <div class="item" @click="myser('myapple')">
                        <img src="../../assets/image/beses1.png" alt="">
                        <p class="txt">我的申请</p>
                    </div>
                    <div class="item" @click="myser('mybrowse')">
                        <img src="../../assets/image/beses2.png" alt="">
                        <p class="txt">浏览足迹</p>
                    </div>
                    <div class="item" @click="myser('myservice')">
                        <img src="../../assets/image/beses3.png" alt="">
                        <p class="txt">客服中心</p>
                    </div>
                    <div class="item" @click="myser('complain')">
                        <img src="../../assets/image/beses4.png" alt="">
                        <p class="txt">投诉反馈</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './common/nav.vue'
    export default {
        name: 'my',
        components:{
            Nav,
        },
        data() {
            return {
                frontafter : "登录/注册",   //登录之前显示的字，登录后显示手机号
                // 是否登录
                isLogin : false,    
            };
        },
        created() {
            var thisLogin = this.isLogin;
            this.getInfo();
        },
        
        methods : {
            // 登录后的请求
            getInfo(){
                this.http(this,{
                    url : '/api/my/info',
                    data : {
                        // mobilePhone = this.mobilePhone,
                    },
                }).then(res=>{
                    this.mobilePhone = res.mobilePhone;     //手机号
                    // this.thisLogin = true;
                    // console.log(thisLogin);
                    this.getsMobilePhone();
                });
            },
            getsMobilePhone (){
                // if(this.mobilePhone == String)
                    this.frontafter = this.mobilePhone;
                
            },
            // myapple(){
            //     this.$router.push({
            //         name : 'myapple'
            //     });
            // },
            // mybrowse(){
            //     this.$router.push({
            //         name : 'mybrowse'
            //     });
            // },
            // myservice(){
            //     this.$router.push({
            //         name : 'myservice'
            //     });
            // },
            // complain(){ 
            //     this.$router.push({
            //         name : 'complain',
            //     });
            // },
            toLogin(){
                this.$router.push({
                    name: 'sign'
                });
            },
            myser(mypage) {
                this.$router.push({
                    name : mypage
                });
            },
            alert(){
                alert("已登录")
            }

        }
    }
</script>

<style scoped>
html,body{
    background:#f5f5f5;
}
</style>

<style lang="scss" scoped>
    .my{
        padding-bottom:1.2rem;
    }
    .content{
        // 登录注册
        .head{
            background: url(../../assets/image/myheader.png) no-repeat;
            background-size: 100% 100%;
            height:5.13rem;
            $wh4:.4rem;
            dl{
                padding: 1.18rem .3rem 2.55rem .3rem;
                display:flex;
                dt{
                    width:1.4rem;
                    height:1.4rem;
                }
                dd{
                    float:left;
                    padding-left:.2rem;
                    font-size:.28rem;
                    font-weight:700;
                    color:#0f0f0f;
                    .login{
                        line-height:1.4rem;
                        span{
                            line-height:1.4rem;
                        }
                    }
                }
            }
            .setup{
                top: .85rem;
                right: .28rem;
                display: flex;
                justify-content:space-between;
                width:1.2rem;
                height:$wh4;
                img{
                    width:$wh4;
                    height:$wh4;
                }
            }
        }
        // 我的订单
        .order{
            width: 92.53%;
            background: #fff;
            border-radius: .1rem;
            margin: -2.2rem auto 0;
            position: relative;
            z-index: 2;
            .upper{
                line-height: .88rem;
                margin: 0 .3rem;
                border-bottom: .01rem solid #e6e6e6;
                zoom: 1;
                display: block;
                height: .88rem;
                .sp1{
                    font-size: .32rem;
                    float: left;
                }
                .sp2{
                    float: right;
                    padding-right: .3rem;
                    background: url(../../assets/image/aowr.png) right no-repeat;
                    background-size: .12rem .22rem;
                    color: #8c8c8c;
                }
            }
            .lower{
                display: flex;
                justify-content: center;
                height: 1.91rem;
                padding: 0 .1rem;
                align-items: center;
                dl{
                    width: 25%;
                    text-align: center;
                    display: block;
                    dt{
                        position: relative;
                        margin: auto;
                        padding-bottom: .22rem;
                        img{
                            width:.56rem;
                            height:.46rem;
                        }
                    }
                }
            }
        }
    }
    
    
    .upper{
        line-height: .88rem;
        margin: 0 .3rem;
        border-bottom: .01rem solid #e6e6e6;
        zoom: 1;
        display: block;
        height: .88rem;
    }
    // 常用功能
    .content .tool{
        margin:.22rem .28rem 0 .28rem;
        background: #fff;
        border-radius: .1rem;
        .upper span{
            font-size:.3rem;
        }
        .lowers{
            display: flex;
            justify-content: center;
            height: 1.75rem;
            padding: 0 0 .38rem;
            width: 100%;
            .item{
                width: 25%;
                margin-top: .38rem;
                align-items: center;
                display: flex;
                flex-direction: column;
                img{
                    width:.6rem;
                    height:.6rem;
                }
                p{
                    color: #333333;
                    margin-top: .2rem;
                    font-size: .24rem;
                }
            }
        }
    }
</style>