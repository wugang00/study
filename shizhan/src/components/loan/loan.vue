<template>
    <div class="loan">
        <!-- 底栏导航 -->
        <Nav></Nav> 
        <!-- 顶部 -->
        <div class="head ">
            <div class="title">线上贷款</div>
        </div>
        <div class="notice">
            <div class="tice">
                <span></span>
                <span class="not">据统计，申请五款以上产品，贷款成功率超过99%</span>
            </div>
        </div>
        <!-- 筛选nav -->
        <nav>
            <ul class="c">
                <li @click="showBg('SYS_LOAN_AMOUNT')">
                    <span>{{ loanAmountTitle }}</span>
                    <span></span>
                </li>
                <li @click="showBg('SYS_SORT_TYPE')">
                    <span>{{ sortTypeTitle }}</span>
                    <span></span>
                </li>
                <li @click="showBg('SYS_LOAN_TYPE')">
                    <span>{{ loanTypeTitle }}</span>
                    <span></span>
                </li>
            </ul>
        </nav>
        <!-- 筛选条件 -->
        <div @click="isShowBg=false" v-show="isShowBg" class="screens pof">
            <div v-show="isShowType=='SYS_LOAN_AMOUNT'" class="dklx contan fs26">
                <a v-for="item in SYS_LOAN_AMOUNT" href="javascript:;" @click="selectPlatform(item)" :key="item.value">
                    {{ item.value }}
                </a> 
            </div>
            <div v-show="isShowType=='SYS_SORT_TYPE'" class="dklx contan fs26">
                <a v-for="item in SYS_SORT_TYPE"  @click="selectPlatform(item)" :key="item.value">
                    {{ item.value }}
                </a> 
            </div>
            <div v-show="isShowType=='SYS_LOAN_TYPE'" class="dklx contan fs26">
                <a v-for="item in SYS_LOAN_TYPE"  @click="selectPlatform(item)" :key="item.value">
                    {{ item.value }}
                </a> 
            </div>
        </div>
        <!-- 平台列表 -->
        <div v-if="list.length > 0">
            <com-liarea :data="list"></com-liarea>
        </div>
        <div v-else>暂无平台</div>

        <a v-if="pageNum > 1" href="javascript:;" @click="getMore()">查看更多</a>
    </div>
</template>

<script>
    import Nav from './common/nav.vue'
    import comLiarea from '../home/common/liarea.vue';
    export default {
        name: 'loan',
        data() {
            return {
                list : [],
                pageNum : 1,  //当前页数
                totalPage : 0,  //总页数
                allData:{},
                SYS_LOAN_AMOUNT : [],
                SYS_LOAN_TYPE : [],
                SYS_SORT_TYPE : [],
                loanAmountTitle : '金额范围',
                loanTypeTitle : '贷款类型',
                sortTypeTitle : '推荐排序',
                isShowBg:false,
                isShowType: null,
                amountType : '',
                loanType : '',
                sortType : 1,
                chose : true
            };
        },
        components:{
            comLiarea,
            Nav,
        },
        //实例创建完执行
        created() {
            this.getList();
            this.getPkey();
        },
        mounted() {
            
        },
        methods : {
            getList() {
                this.http(this,{
                    url : '/api/platform/list',
                    data : {
                        pageNum : this.pageNum,
                        loanType : this.loanType,
                        sortType : this.sortType,
                        amountType : this.amountType
                    },
                    tsStatus : '-1'
                }).then(res=>{
                    if(res == null) {
                        this.list = [];
                    } else {
                        this.list = res.list;
                        this.totalPage = res.pageEntity.totalPage;
                        // setTimeout(() => {
                        //     document.documentElement.scrollTop = 600;
                        // }, 1);
                    }
                    
                    
                });
            },
            // 筛选要求数据
            getPkey(){
                this.http(this,{
                    url : '/api/dict/pkey',
                    data : {
                        pkeys : 'SYS_LOAN_TYPE,SYS_SORT_TYPE,SYS_LOAN_AMOUNT'
                    }
                }).then(res=>{
                    this.SYS_LOAN_AMOUNT = res.SYS_LOAN_AMOUNT;     //金额范围
                    this.SYS_LOAN_TYPE = res.SYS_LOAN_TYPE;         //贷款类型
                    this.SYS_SORT_TYPE = res.SYS_SORT_TYPE;         //推荐排序
                    this.SYS_LOAN_TYPE.push({
                        value : '不限',vkey : ''
                    });
                    this.allData = res;     //
                })
            },
            getMore() {
                this.pageNum += 1;
                this.getList();
            },
            showBg(type){
                this.chose = false;
                this.isShowBg=true;
                this.isShowType = type
            },
            selectPlatform(item) {
                if(this.isShowType == 'SYS_LOAN_AMOUNT') {
                    this.loanAmountTitle = item.value;
                    this.amountType = item.vkey;
                }
                if(this.isShowType == 'SYS_LOAN_TYPE') {
                    this.loanTypeTitle = item.value;
                    this.loanType = item.vkey;
                }
                if(this.isShowType == 'SYS_SORT_TYPE') {
                    this.sortTypeTitle = item.value;
                    this.sortType = item.vkey;
                }
                this.getList();
            }
        }
    }
</script>

<style lang="scss">
    .loan{
            padding-bottom:.2rem;
            padding-top:2.6rem;
        }
    .head{
        position: fixed;
        width: 100%;
        padding-top: .75rem;
        left: 0;
        top: 0;
        background: #fff;
        justify-content: flex-start;
        z-index: 52;
        .title{
            font-size: .32rem;
            text-align: center;
            vertical-align:  middle;
            height:0.5rem;
        }
    }

    .notice{
        width:100%;
        background:#fff2dc;
        height:.6rem;
        position:fixed;
        top:2rem;
        z-index:40;
    }
    .notice .tice{
        padding:0 .32rem;
        display:flex;
        height:.6rem;
        align-items:center;
        span:nth-child(1){
            width: .26rem;
            height: .24rem;
            background: url(../../assets/image/horn.png);
            background-size: .26rem .24rem;
        }
        .not{
            color: #FFA02A;
            margin-left: .2rem;
            font-size:.22rem;
        }
    }
    
    nav{
        position: fixed;
        top: 1.24rem;
        background: #fff;
        width: 100%;
        height: .48rem;
        left: 0;
        z-index: 52;
        padding: .14rem 0;
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
        background: url(../../assets/image/sand.png);
        background-size: .16rem .1rem;
        margin-left: .08rem;
        overflow: hidden;
    }
    nav ul li.cur span:nth-child(2){
        background: url(../../assets/image/sands.png);
        background-size: .16rem .1rem;
    }
    .curs{
        border: 1px solid #FFA02A;
        color: #FFA02A;
    }


    .screens{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 51;
        top: 0;
        bottom: 0;
    }
   .dklx{
       position: fixed;
       top:2rem;
       padding-bottom: .3rem;
       border-top:.01rem solid red;
    }
    .dklx a{
        float: left;
        margin-top: .24rem;
        margin-left: .5rem;
        width: 1.8rem;
        line-height: .5rem;
        border: 1px solid #8c8c8c;
        border-radius: .3rem;
    }
   .contan{
       width: 100%;
       background: #fff;
       top: 1.99rem;
       position: absolute;
   }
</style>