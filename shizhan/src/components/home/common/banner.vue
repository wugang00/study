<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper" >
            <!-- slides -->
            <swiper-slide v-for="(banner, index) in banners" :key="index">
                <img :src="banner.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'banner',
        data() {
            return{
                swiperOption:{
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true,
                    autoplay: {
                　　　  delay: 2000,
                　　    disableOnInteraction: false
                    }
                }
            }
        },
        props : {
            banners : {
                type : Array,
                default : []
            },
        }
    }
</script>

<style>
    .banner .swiper{
        height:3.5rem;
    }
</style>
<style scoped lang="scss">
    .banner{
        height: 3.5rem;
        overflow:hidden;
        img{
            height:3.5rem;
        }
    }
</style>