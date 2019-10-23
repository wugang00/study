<template>
    <div class="com">
        <skelenton v-if="!ShowSkeleTon"></skelenton>
    
        <div class="home" v-if="ShowSkeleTon">
            <!-- 底部导航 -->
            <Nav></Nav> 
            <Banner :banners="bannerList"></Banner> 
            <Fourze></Fourze> 
            <!-- 今日快讯  -->
            <div class="news fs24 dsf">
                <div class="jin">
                    <img src="../../assets/image/jin.png" >
                </div>
                <div class="word">
                    <ul>
                        <li v-for="(item,index) in carouseList" :key="(item,index)">
                            <span>{{ item.content }}</span>
                        </li> 
                    </ul>
                </div>
            </div>
            <Zone></Zone> 
            <Popular></Popular> 
            <Liarea :data="list"></Liarea> 
        </div>  
    </div>
</template>

<script>
    import Nav from './common/nav.vue'
    import Banner from './common/banner.vue'
    import Fourze from './common/fourze.vue'
    import News from './common/news.vue'
    import Zone from './common/zone.vue'
    import Popular from './common/popular.vue'
    import Liarea from './common/liarea.vue'
    import Skelenton from '../skeleton.vue'

    export default {
        data() {
            return {
                list : [],
                bannerList : [],    //banner图片
                name : 'zhangsan',
                carouseList : [],  //文字banner列表
                ShowSkeleTon : false
            };
        },
        name: 'home',
        components:{
            Nav,
            Banner,
            Fourze,
            Zone,
            Popular,
            Liarea,
            Skelenton
        },
        created() {
            this.getData();
        },
        methods : {
            getData() {
                let _this = this;
                this.http(this,{
                    url : '/api/platform/index/new',
                    // headersType : 1     //token
                }).then(res=>{
                    this.ShowSkeleTon = true;
                    this.bannerList = res.bannerList;
                    this.list = res.list;
                    this.creditCardList = res.creditCardList;
                    this.carouseList = res.carouseList;
                },err=>{
                    console.log(err);
                });
            },
        },
    }
</script>

<style scoped lang="scss">
    .news{
        border-top: 1px solid #e2e4e8;
        height: .73rem;
        padding: 0 .33rem;
        justify-content: safe;
        background: #fff;
        .jin{
            width:1.25rem;
            height:.42rem;
        }
        .word{
            margin-left: .18rem;
            height: .27rem;
            overflow: hidden;
        }
        ul li{
            line-height: .27rem;
            height:.27rem;
        }
    }
</style>