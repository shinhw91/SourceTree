<template>
<!-- DataBindingList.vue -->
  <div class="about">
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>                              
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="product in productList" v-bind:key="product.product_name"> -->
        <!-- v-for, v-if 함께 사용 불가 -->
        <tr v-for="(product, idx) in productList" v-bind:key="idx">
          <td>{{idx + 1}}</td>
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <!-- 천단위 콤마 -->
          <td>{{Number(product.delivery_price).toLocaleString()}}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 v-if="score >= 90">A</h3>
  <h3 v-else-if="score >= 80">B</h3>
  <h3 v-else>C</h3>

<!-- 생성되나 속성(display)으로 노출 여부 결정 -->
  <h3 v-show="score >= 90">90보다 큽니다.</h3>ㅣㅣ
</template>

<script>
export default {
 data() {
   return {
      score: 80,
      productList: [
        {"product_name":"기계식키보드","price":25000,"category":"노트북/태블릿","delivery_price":5000},
        {"product_name":"무선마우스","price":12000,"category":"노트북/태블릿","delivery_price":5000},
        {"product_name":"아이패드","price":725000,"category":"노트북/태블릿","delivery_price":5000},
        {"product_name":"태블릿거치대","price":32000,"category":"노트북/태블릿","delivery_price":5000},
        {"product_name":"무선충전기","price":42000,"category":"노트북/태블릿","delivery_price":5000}
      ]
   };
 },
 filters: {
  formatPrice(price) {
    if(price > 999) {
      var priceAry = price.split("").reverse();
      var idx = 1;
      while(priceAry.length > idx + 3) {
        priceAry.splice(idx + 3, 0, ',');
        idx += 4;
      }
      return priceAry.reverse.join('') + '원'
    } else {
      return price + '원'
    }
  }
 }
}
</script>

<style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
