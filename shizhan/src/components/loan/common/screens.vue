<template>
    <div class="screens pof" v-show="stas">
        <div  class="dklx contan fs26" v-show="stas">
            <a herf="javascript:;" v-for="SYS_LOAN_AMOUNT in data" >
                {{SYS_LOAN_AMOUNT.value}} 
            </a> 
        </div>
        <div  class="dklx contan fs26" v-show="stas">
            <a herf="javascript:;" v-for="SYS_SORT_TYPE in data" >
                {{SYS_SORT_TYPE.value}}
            </a> 
        </div>
        <div  class="dklx contan fs26" v-show="stas">
            <a herf="javascript:;" v-for="SYS_LOAN_TYPE in data" >
                {{SYS_LOAN_TYPE.value}}
            </a> 
        </div>
    </div>
</template>

<script>
    export default {
    name: 'loan-screens',
    data() {
        return {
            stas:false
        }
    },
    props : {
        data : {
            type : Array,
            default : []
        },
        allData:{
            type:Object,
            default : {}

        }
    },
    //实例创建完执行
    created(){
        
    },
    //页面加载完执行
    mounted(){
    },
    methods:{
        shtats:function(){
            var pof = document.getElementsByClassName("pof")[0];
            pof.style.display="none"
        }
    }
}
    
</script>

<style>
    .screens{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 51;
        top: 0;
        bottom: 0;
        /* display: none; */
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