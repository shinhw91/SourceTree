<template>
  <div class="container" v-bind:class="simpleClass">
    Hello
  </div>
  <!-- <div class="container" v-bind:class="{active:false, 'text-red':true}"> -->
  <div class="container" v-bind:class="{active:activeValue, 'text-red':redValue}">
    Hello
  </div>
  <div class="container" v-bind:class="[activeClass, redClass]">
    Hello
  </div>
  <div style="color: red; background: yellow;">
    style1
  </div>
  <div v-bind:style="{color: att1, background: att2}">
    style2
  </div>
  <div v-bind:style="colorStyle">
    style3
  </div>
</template>

<script>
export default {
  data() {
    return {
      simpleClass: 'active text-red',
      activeValue: true,
      redValue: false,
      activeClass: 'active',
      redClass: 'text-red',
      att1: 'red',
      att2: 'yellow',
      // colorStyle: 'color: red; background: yellow;'
      colorStyle: {
        color: 'red', // this.att1 값 미인식
        background: 'yellow'  // this.att2 값 미인식
      }
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {  // 이벤트 실행함수

  }
}
</script>

<style>
  .container {
    width: 100%;
    height: 50px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>