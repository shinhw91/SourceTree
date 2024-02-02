<template>
  <h3>Hello, {{msg}}</h3>
  <div>{{htmlStr}}</div>
  <div v-html="htmlStr"></div>
  <!-- <div v-text="htmlStr"></div> -->
  <!-- input(v-model) : 입력값으로 자동 변경 -->
  <input type="text" v-model="vmodel" />
  <p>{{vmodel}}</p>
  <textarea cols="30" rows="10" v-model="message"></textarea>
</template>

<script>
export default {
  data() {
    return {
      msg: 'World',
      htmlStr: '<p style="color: red;">Hello</p>',
      vmodel: 'Nice',
      message: '여러라인의 값을 \n 읽습니다.'
    }
  }
}
</script>