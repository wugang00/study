<template>
    <div class="losign">
        <div class="los_top">
            <p>登录/注册</p>
            <router-link to='/my'>  </router-link>
        </div> 
        <div class="welcome">欢迎来到立时贷</div>
        <div class="signin">
            <ul>
                <li>
                    <input placeholder="请输入手机号" maxlength="11" >
                </li>
                <li class="pro">
                    <input placeholder="请输入验证码" maxlength="6" v-model="code">
                    <!-- 获取验证码 按钮   点击显示弹窗-->
                    <button class="getCode poa dsf" :disabled="isDisablded" @click="getVtCode()">
                        {{btnText}}
                    </button>
                </li>
            </ul>
            <button class="fw7" @click="signIn()">登录/注册</button>
            <div class="agree fs24">
                登录即表示你同意
                <router-link to='/'>
                    <a>《服务协议》</a>
                </router-link>
            </div>
        </div>
        <!-- 图形验证码弹窗 -->
        <div class="pophp_wrap pof dsf" v-show="isShow" @click="offPophp($event)">
            <!-- 点击关闭弹窗 -->
            <div class="pophp">
                <div class="title">
                    <p>请输入图片验证码</p>
                </div>
                <!-- <span class="poa"> × </span> -->
                <p class="two fs20">您的操作过于频繁，请输入图片验证码</p>
                <div class="num pro">
                    <!-- 验证码图片   点击刷新-->
                    <img :src="imgCodeSrc" @click="getImgCode">
                    <input placeholder="请输入验证码" v-model="imgCode" maxlength="6">
                </div>
                <div class="inpt">
                    <!-- 验证图形验证码 -->
                    <button class="fs24" @click="getVtCode">确定</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'card',
    data () {
        return {
            cellphone : "请输入手机号", //手机号
            code : '',      //短信验证码
            imgCode : "",   //图片验证码
            isShow : false, //是否显示图形验证码弹窗
            isDisablded : false,   //是否禁用发送短信验证码按钮
            btnText : '获取验证码',     //获取验证码按钮文案
            imgCodeSrc : ' ',   //图片验证码src链接

        }
    },
    components:{
        
    },
    //实例创建完执行
    created() {
        // this.signIn();
        
    },
    methods : {
        // 验证手机号
        signIn() {
            //console.log(this.cellphone);
            if(this.cellphone < 1){
                //console.log('手机号未输入');
                alert('手机号未输入');
                return;
            };
            if(!/^1[356789]\d{9}$/.test(this.cellphone)){
                //console.log('手机号错误');
                alert('手机号错误');
                return;
            }; 
            if(this.cellphone == 11 ,this.code < 1){
                //console.log('手机号未输入');
                alert('验证码未输入')
            } else if(this.code.length < 6){
                console.log(this.code);
                alert('验证码错误');
            } ;
            this.register();    //调用
        },
        //获取短信验证码
        getVtCode(){
            //console.log('验证码获取中');
            if(this.cellphone < 1  ){
                //console.log('手机号未输入');
                alert('手机号未输入');
            } else if(!/^1[356789]\d{9}$/.test(this.cellphone)){
                //console.log('手机号错误');
                alert('手机号错误');
            } else {
                this.http(this,{
                    url : '/api/message/sms_code',
                    data : {
                        type : 1,
                        cellphone : this.cellphone, //手机号
                        imgCode : this.imgCode   //图片验证码
                    },
                    tsStatus : '-1'
                }).then(res=>{
                    if(res){    //原本为false，两次后为真
                        this.isShow = true; //显示弹窗
                        this.getImgCode();
                    } else {
                        this.isShow = false;
                        let t = 60;
                        let st = setInterval(_=>{
                            if(t > 0){
                                this.btnText = `${t--}s`;
                                this.isDisablded = true;
                            } else {
                                this.btnText = `重新获取`;
                                this.isDisablded = false;
                                clearInterval(st);
                            }
                        },1000)
                    }
                })
            }
            
        },
        //关闭弹窗
        offPophp(e){    //阻止事件冒泡
            let cName = e.target.className; //pophp_wrap
            if(cName.indexOf('pophp_wrap') > -1) {
                this.isShow = false;
            }
        },
        //获取图形验证码
        getImgCode() {
            this.http(this,{
                url : '/api/message/image_code',
                data : {
                    cellphone : this.cellphone,
                }
            }).then(res=>{
                // 图片验证码链接 src
                this.imgCodeSrc = 'data:image/png;base64,'+res;
            });
        },
        //登录/注册
        register(){
            this.http(this,{
                url : '/api/user/register',
                data : {
                    cellphone : this.cellphone,
                    code : this.code    //短信验证码
                }
            }).then(res=>{
                localStorage.setItem('_token',res.token);
                // this.$router.push({
                //     name : 'my'
                // });
                //执行info请求
                this.getInfo();
            });
            this.$router.push({
                name : 'my'
            });
        },
        getInfo(){
            this.http(this,{
                url : '/api/my/info',
                // data : {
                //     // mobilePhone = this.mobilePhone,
                // },
            }).then(res=>{
                this.mobilePhone = res.mobilePhone;     //手机号
            });
        },
    }
}
</script>

<style scoped>
html,body{
    background:#fff;;
}
body{
    background:#fff;;
}
</style>

<style lang="scss" scoped>

   .losign{
       margin-top:1.4rem;background:#fff;
       $c0f:#0f0f0f;
       .los_top{
           width:100%;
           height:1.3rem;
           padding-top: .1rem;
           position:fixed;
           top:0;
           left:0;
           z-index:100;
           background:#fff;
           p{
               color:$c0f;
               font-size:.36rem;
               margin-top:.6rem;
               text-align:center;
           }
           a{
               display: block;
                position: absolute;
                left: 0;
                top: .6rem;
                width: 1.6rem;
                height: .8rem;
                background:url(../../assets/image/left.png) .3rem no-repeat;
                background-size:.16rem .3rem;
            }
        }
        .welcome{
            font-size:.46rem;
            color:$c0f;
            padding:.84rem .4rem 0;
        }
        .signin{
            margin:0 .3rem;
            padding-bottom:.6rem;
            ul{
                padding-top:.1rem;
                li{
                    margin-top:.84rem;
                    padding:.1rem 0;
                    border-bottom:1px solid #e6e6e6;
                    input,button{
                        border:none;
                        font-size:.28rem;
                        background:none;
                        outline:none;
                    }
                    input{
                        width:4rem;
                        height:.6rem;
                    }
                    button{
                        width: 1.58rem;
                        line-height: .6rem;
                        border-radius: .3rem;
                        background: #fff;
                        right: 0;
                        top: -0.7rem;
                    }
                    
                }
            }
            .fw7{
                outline:none;
            }
            button{
                width:6.7rem;
                height:.8rem;
                margin-top:.7rem;
                background: #ffdf5f;
                border:none;
                font-size:.34rem;
                border-radius:.1rem;
            }
            .agree{
                margin-top:.24rem;
                width:3.84rem;
                height:.33rem;
                color:#7e7e7e;
            }
        }
    
    }
    // 弹窗
    .pophp_wrap{
        z-index:0;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,.5);
        .pophp{
            width:5.4rem;
            height:3.32rem;
            top:3.6rem;
            left:1.05rem;
            background:#fff;
            border-radius:.2rem;
            .title{
                width:2.08rem;
                height:.37rem;
                font-size:.26rem;
                margin:.28rem 1.66rem 0 1.66rem;
            }
            span{
                width:.2rem;
                height:.2rem;
                top:.3rem;
                right:.3rem;
            }
            .two{
                display:block;
                width:3.8rem;
                height:.28rem;
                margin:0 auto;
                color:#BA0F0F;
                margin-top: .1rem;
            }
            .num{
                margin-top:.3rem;
                img{
                    width:2.1rem;
                    height:.6rem;
                    margin-left:.98rem;
                }
                input{
                    width:1.6rem;
                    height:.3rem;
                    position:absolute;
                    top:.2rem;
                    right:.6rem;
                    border:none;
                    border-bottom:1px red solid;
                    background:none;
                    font-size:.2rem;
                    letter-spacing:.07rem;
                    outline: none;
                }
            }
            .inpt{
                width:100%;
                margin-top:.2rem;
                button{
                    margin:0 auto;
                    width:3.4rem;
                    height:.6rem;
                    border:none;
                    background:#ffdf5f;
                    font-weight:600;
                    margin:0 1rem;
                }
            }
        }
    }
</style>