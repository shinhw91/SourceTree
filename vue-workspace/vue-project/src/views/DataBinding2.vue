<template>
  <select v-model="city">
    <option value="02">서울</option>
    <option value="03">부산</option>
    <option value="04">제주</option>
  </select>
    <p>{{city}}</p>
  <label>선택 : <input type="checkbox" true-value="yes" false-value="no" v-model="checked"></label>
  <p>선택값 : {{checked}}</p>
  
  <label><input type="checkbox" value="01" v-model="checkItems">서울</label>
  <label><input type="checkbox" value="02" v-model="checkItems">부산</label>
  <label><input type="checkbox" value="01" v-model="checkItems">제주</label>
  <label><input type="checkbox" value="03" v-model="checkItems">대전</label>  
  <p>선택값 : {{orderItems}}</p>
</template>

<script>
export default {
  data() {
    return {
      city: '04',
      checked: 'yes',
      checkItems : ['01']
    }
  },
  computed: {
    orderItems() {
      return this.checkItems.sort((a, b) =>
        {return a - b});
    }
  }
}
</script>