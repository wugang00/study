<template>
  <div class="apple">
    <div class="page_title">
        <div class="left poa" @click="upward()"> </div>
        <div class="ples tac fs32">浏览足迹</div>
    </div>
    <div class="list">
        <ul>  </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mybrowse',
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
    .apple .page_title{
        width:100%;
        height: .8rem;
        padding-top: .75rem;
        background:#fff;
        border-bottom:1px solid #d1d1d1;
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
    .apple  .list{
        
    }
    
</style>
