<template>
  <div id="app">
   <TimeDown class="countDown" @time-end="message = '倒计时结束'" :endTime='endTime'></TimeDown>
  </div>
</template>

<script>
import TimeDown from './countDown.vue';
export default {
  name: 'app',
  data () {
    return {
     message : '',
    }
  },
  components:{
    TimeDown,
  }
}
</script>

<style>

</style>
