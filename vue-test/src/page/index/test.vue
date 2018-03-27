<template>
  <swiper :options='options'>
    <swiper-slide v-for='(i,index) in a' :key='index'><span>{{i}}</span></swiper-slide>
  </swiper>

</template>
<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  export default{
    components:{
      swiper,
      swiperSlide
    },
    data(){
      return{

        a:[
          'Slide1',
          'Slide32',
          'Slide3',
          'Slide54',
          'Slide6',
          'Slide7',
          'Slide8'
        ]
      }
    },
    
</script>