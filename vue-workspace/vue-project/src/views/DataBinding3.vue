<template>
  <label>선택 : <input type="checkbox" true-value="yes" false-value="no" v-model="checked"></label>
  <p>선택값 : {{checked}}</p>

  <!-- v-model : value 바인딩(양방향) -->
  <label>text 속성 : <input tyep="text" v-bind:value="ival"></label>
  <p>값 : {{ival}}</p>

  <!-- v-vind : attribute 값 바인딩(단방향) -->
  <img v-bind:src="imgSrc" :width="imgWidth">
  <input type="text" v-model="textStr">
  <button v-bind:disabled="textStr == ''">Click</button>
</template>

<script>
export default {
  data() {
    return {
      checked: 'yes',
      ival: 'sample',
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      imgWidth: '100px',
      isTrue: true,
      textStr: ''
    }
  }
}
</script>