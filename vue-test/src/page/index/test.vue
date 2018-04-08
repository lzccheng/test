<template>
  <div class="box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide a">slider1</div>
        <div class="swiper-slide b">slider2</div>
        <div class="swiper-slide c">slider3</div>
      </div>
    </div>
    <button @click='click'>click{{$store.state.count}}</button>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <p></p>
  </div>
</template>
 
<script>
  import Swiper from 'swiper'
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faCoffee } from '@fortawesome/fontawesome-free-solid'
  export default {
    name: 'carrousel',
    data() {
      return {
      }
    },
    methods:{
      click:function(){
        this.$store.commit('addCount')
        this.$axios({
          url: '/article',
          method: 'get',
        }).then((res)=>{
          console.log(res.data)
        })
      }
    },
    mounted:function(){
      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay: true
      })
    }
  }
</script>
<style scoped lang='scss'>
  @import '../../../swiper/css/swiper.min.css';
  .box{
    width: 100%;
    .swiper-slide{
      height: 300px;

    }
    .a{
      background: pink;
    }
    .b{
      background: teal;
    }
    .c{
      background: yellow;
    }
  }
</style>