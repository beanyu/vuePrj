<template>
  <div id="app">
	  <button v-on:click="mergeSorting">Merge Start</button>
      <transition-group name="list"  tag="p">
        <span v-for="(item,index) in org_items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <br/>
      <transition-group name="list" tag="p">
        <span v-for="(item,index) in des_items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
	</div>
</template>

<script>
import MergeSort from "../sort/merge"
import _ from "underscore"
export default {
  data () {
    return {
      message: 'Hello, Vue.js 2.0',
      org_items: this.generateRandomArray(10),
      des_items: []
    }
  },
  methods:{
    mergeSorting(){
      var step = MergeSort(this.org_items)
      console.log("anim " + step[0][0])
      step.forEach( (item) => {
        this.des_items.splice(item[0], 0, item[1])
      } )
      //this.des_items = step
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
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
    //animation: sorting 5s 
  }
  @keyframes sorting{
    %0 {}
    %10 {}
    %20 {}
    %30 {}
    %40 {}
    %50 {}
    %60 {}
    %70 {}
    %80 {}
    %90 {}
    %100 {}
  }

  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translate(0,30px);
  }
</style>


<div id="list-complete-demo" class="demo">
  <button v-on:click="shuffle">Shuffle</button>
  <transition-group name="list-complete" tag="p">
    <h3
      v-for="(item,key) in items"
      v-bind:key="item"
      class="list-complete-item quote"
      :class={active:key!=1}
    >
      {{ item }}
    </h3>
  </transition-group>
  <p>Some footer</p>
</div>

new Vue({
  el: '#list-complete-demo',
  data: {
    items: [1,2,3],
    nextNum: 10
  },
  methods: {
    shuffle: function () {
        this.items.pop()
        this.items.splice(0, 0, this.nextNum++)
    }
  }
})

.list-complete-item {
  transition: all 1s;
  margin-right: 10px;
}
.list-complete-enter
{
  opacity: 0;
  transform: translateY(-20px);
}
.list-complete-leave-to
{
  opacity: 0;
  transform: translateY(20px);
}
.list-complete-leave-active {
  position: absolute;
}
.quote{
  transition: all 1s ease;
}
.active{
  filter: blur(1px);
  transition: all 1s ease
}