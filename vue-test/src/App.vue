<template>
  <div id="app">
    <transition name='bounce'>
      <keep-alive>
        <router-view class='route'></router-view>
      </keep-alive>
    </transition>
    <myFooter/>
  </div>
</template>

<script>
import myFooter from './components/footer/footer'
export default {
  name: 'App',
  components:{
    myFooter
  }
}
</script>

<style>
body{
  font-size: 0.8rem;
}
.route{
  position: absolute;
  left: 0;
  top: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
