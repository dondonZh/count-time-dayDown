<template>
  <span>{{time}}</span>
</template>

<script>
  export default {
    name: "countDown",
    data() {
      return {
        time: '',
        flag: false
      }
    },
    mounted() {
      const vm = this;
      if(vm.seconds){
        vm.time = vm.seconds;
      }
      var time = setInterval(() => {
        if (vm .flag == true) {
          clearInterval(time)
        }
        vm .timeDown();
      }, 1000)
    },
    props: {
      endTime: {
        type: String
      },
      seconds:{
        type: Number,
      }
    },
    methods: {
      timeDown() {
        if(this.endTime){
          try {
            const endTime = new Date(this.endTime.replace(/-/g,'/'));
            console.log('endTime',endTime)
            const nowTime = new Date();
            let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
            let d = parseInt(leftTime / (24 * 60 * 60));
            let h = this.formate(parseInt(leftTime / (60 * 60) % 24));

            let m = this.formate(parseInt(leftTime / 60 % 60));
            let s = this.formate(parseInt(leftTime % 60));
            if (leftTime <= 0) {
              this.flag = true;
              this.$emit('time-end')
            }
            this.time = d===0?`${h}:${m}:${s}`:`${d}天${h}:${m}:${s}`;
          }
          catch(err){
            console.log('timeDownError:'+err);
            this.flag = true;
          }
        }
        if(this.seconds){
          this.time = this.time - 1;

          if(this.time === 0){
            this.time = this.seconds;
            this.$emit('time-end');
          }
        }
      },
      formate(time) {
        if (time >= 10) {
          return time
        } else {
          return `0${time}`
        }
      }
    }

  }
</script>

<style scoped>

</style>
