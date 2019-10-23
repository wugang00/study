<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      
    }
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;font-size: .26rem;
  overflow:hidden;
}
/* body{
  background:#f5f5f5;
  height:100%;
} */
a{
  color: #0f0f0f;
  text-decoration: none;
  text-align: center;
}
li {
  list-style: none;
  text-align: content;
}
*{
  margin:0;
  padding:0;
}
.fs24{
  font-size:.24rem;
}
.fs4{
  font-size:.34rem;
}
.fs20{
  font-size:.2rem;
}
.fs26{
  font-size:.26rem;
}
.fc2{
  color:#8c8c8c;
}
.bc_fff{
  background:#fff;
}
.dsf{
  display: flex;
  justify-content: center;
  align-items: center;
}
.fs3{
  font-size: .3rem;
}
.fs32{
  font-size: .32rem;
}
.fs36{
  font-size: .36rem;
}
.fs28{
  font-size: .28rem;
}
.fw7{
  font-weight:700;
}
.pro{
  position: relative;
}
.poa{
  position:absolute;
}
.tac{
  text-align:center;
}
.dsb{
  display:block;
}
.dsib{
  display:inline-block;
}
.pt10{
  padding-top:.1rem;
}

.pof{
  position:fixed;
}
img{
  width:100%;
}
.c{
  zoom:1;
}

.cur{
  display:block;
}
</style>
