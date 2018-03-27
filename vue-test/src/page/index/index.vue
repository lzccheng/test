<template>  
  <div>
  		<swiper :options='options'>
  			<swiper-slide v-for='(i,index) in arrItem' :key='index'>
  				<div class="iSlide">
  					<img class="img" :src="i.imgUrl">
  					<span>{{i.name}}</span>
  				</div>
  			</swiper-slide>
  		</swiper>
  </div>
</template>  
<script>  
import { swiper, swiperSlide } from 'vue-awesome-swiper';  
  export default{  
  		components:{
  			swiper,
  			swiperSlide
  		},
      data(){
      	return {
      		options:{
      			debugger:true,
      			autoPlay:3000,
      			slidesPerView:'auto',
      			centerSlides:true
      		},
      		arrItem:[
      			{
      				name:'swiperSlide5',
      				imgUrl:'http://pic.58pic.com/58pic/15/24/50/43Q58PICkj4_1024.jpg'
      			},
      			{
      				name:'swiperSlide1',
      				imgUrl:'http://f0.topitme.com/0/7a/63/113144393585b637a0o.jpg'
      			},
      			{
      				name:'swiperSlide51',
      				imgUrl:'http://a0.att.hudong.com/31/35/300533991095135084358827466.jpg'
      			},
      			{
      				name:'swiperSlide1111115',
      				imgUrl:'http://img1.3lian.com/2015/a1/105/d/40.jpg'
      			}
      		]
      	}
      }
  }  
</script>  

<style>
	@import '../../../swiper/css/swiper.min';
	.iSlide{
		width: 100%;
	}
	.img{
		width: 100%;
		height: 13rem;
	}
</style>