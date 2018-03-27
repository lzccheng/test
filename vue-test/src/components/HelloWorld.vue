<template>
  <div>
    <button @click='get'>click</button>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{ 
    get:function(){
      console.log(this.$http)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass' scoped>
  .footer 
    width: 100%
    position: fixed
    left: 0
    bottom: 0
</style>
