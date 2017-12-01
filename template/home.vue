<template>
  <div id="app">
	  <button v-on:click="mergeSorting">Merge Start</button>
      <transition-group name="list" tag="p">
        <span v-for="(item,index) in items" v-bind:key="index" class="list-item">
          {{ item }}
        </span>
      </transition-group>
	</div>
</template>

<script>
import MergeSort from "../sort/merge"
export default {
  data () {
    return {
      message: 'Hello, Vue.js 2.0',
      items: this.generateRandomArray(10),
    }
  },
  methods:{
    mergeSorting(){
      MergeSort(this.items)
      console.log("anim")
      //this.items = [0,0,0]
    },
    generateRandomArray(num){
      var array = []
      for(var i=0; i<num; i++){
        array.push( Math.floor( Math.random() * num ) )
      }
      console.log(array)
      return array
    }
  }
}
</script>

<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 20px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 2s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>