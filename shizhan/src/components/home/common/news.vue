<template>
    <div class="news fs24 dsf">
      <div class="jin">
        <img src="../../../assets/image/jin.png" >
      </div>
      <div class="word">
          <ul>
              <li v-for="(carouseList,index) in carouseList" :key="(carouseList,index)">
                  <span>{{ carouseList.content }}</span>
              </li> 
          </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'news',
  data() {
    return {
      carouseList : [],  //文字banner列表
    }
  },
  //实例创建完执行
  created(){
    this.getData();
  },
  //页面加载完执行
  mounted(){
  },
  methods:{
    getData() {
      this.http(this,{
        url : '/api/platform/index/new'
      }).then(res=>{
        this.carouseList = res.carouseList;
      });
    },
  }
}
</script>

<style>

  .news{
    border-top: 1px solid #e2e4e8;
    height: .73rem;
    padding: 0 .33rem;
    justify-content: safe;
    background: #fff;
  }
  .news .jin{
    width:1.25rem;
    height:.42rem;
  }
  .news .word{
    margin-left: .18rem;
    height: .27rem;
    overflow: hidden;
  }
  .news .word ul li{
    line-height: .27rem;
    height:.27rem;
  }
</style>