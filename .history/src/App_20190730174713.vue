<template>
  <div id="app">
   <TimeDown class="countDown" @time-end="message = '倒计时结束'" :endTime='endTime'></TimeDown>
  </div>
</template>

<script>
import 
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components:{

  }
}
</script>

<style>

</style>
