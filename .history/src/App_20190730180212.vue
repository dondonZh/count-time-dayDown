<template>
  <div id="app">
   <TimeDown  @time-end="timeOver" :endTime='endTime'></TimeDown>
  </div>
</template>

<script>
import TimeDown from './countDown.vue';
export default {
  name: 'app',
  data () {
    return {
      endTime : '2019/02/22',
    }
  },
  methods:{
      timeOver(){
          console.log('倒计时结束')
      }
  },
  components:{
    TimeDown,
  }
}
</script>

<style>

</style>
