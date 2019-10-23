<template>
    <div class="nav">
        <ul>
            <router-link to='/'>
                <li>
                    <a :style="{background:'url(' + homea + ')no-repeat top center', backgroundSize: '.7rem .46rem'}">首页</a>
                </li>
            </router-link>
            <router-link to='/loan'>
                <li>
                    <a :style="{background:'url(' + loana + ')no-repeat top center', backgroundSize: '.7rem .46rem'}">贷款</a>
                </li>
            </router-link>
            <router-link to='/card'>
                <li>
                    <a :style="{background:'url(' + carda + ')no-repeat top center', backgroundSize: '.7rem .46rem'}">认证</a>
                </li>
            </router-link>
            <router-link to='/my'>
                <li>
                    <a :style="{background:'url(' + mya + ')no-repeat top center', backgroundSize: '.7rem .46rem'}">我的</a>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
import home from '../../../assets/image/home.png'
import loan from '../../../assets/image/loan.png'
import card from '../../../assets/image/card.png'
import mys from '../../../assets/image/mys.png'

 export default {
  name: 'home-nav',
  data() {
    return {
        homea:home,
        loana:loan,
        carda:card,
        mya:mys
    }
  },
  
}   
</script>

<style secoped>
    .nav{
        display: flex; justify-content: space-between;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        font-size: 0.22rem;
        width: 100%;      /* 100% */
        height: .97rem;
        border-top: 1px solid #e3e3e3;
        z-index: 50;
    }
    .nav ul{
        width: 100%;      /* 100% */
        height: .89rem;
        padding: 0 .2rem;
        display: flex;
        justify-content: space-between;
       
    }
    .nav ul li{
        float: left;
        width: .7rem;
        height: .89rem;
        padding: 0 .5rem;
    }
    .nav ul li a{
        display: block;
        width: .7rem;
        height: .29rem;
        padding-top: .45rem;
        margin-top: .15rem;
        font-size: 0.22rem;
        line-height: .29rem;
        background-size: .7rem .46rem; 
    }
    /* 背景图片 */
    .nav ul li:nth-child(1) a{
        background: url('../../../assets/image/home.png') no-repeat top center;
        background-size: .7rem .46rem; 
    }
    .nav ul li:nth-child(2) a{
        background: url('../../../assets/image/loan.png') no-repeat top center;
        background-size: .7rem .46rem;
    } 
    .nav ul li:nth-child(3) a{
        background: url('../../../assets/image/card.png') no-repeat top center;
        background-size: .7rem .46rem; 
    }
    .nav ul li:nth-child(4) a{
        background: url('../../../assets/image/my.png') no-repeat top center;
        background-size: .7rem .46rem;
    } 
</style>