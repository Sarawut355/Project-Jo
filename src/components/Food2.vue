<template>
  <div class="container">
    <b-card id="black" 
      ><h1>อาหารช่วงเที่ยง</h1>
      <div class="row">
        <b-label class="col-3">ชื่ออาหาร : </b-label>
        <b-input class="col-7 " type="text" v-model="FoodName"></b-input>
      </div>
      <div class="row">
        <b-label class="col-3">ราคา : </b-label>
        <b-input class="col-7 " type="number" v-model="Price"></b-input>
      </div>
      <div class="row">
        <b-label class="col-3">ความนิยม : </b-label>
        <b-input
          class="col-7"
          type="number"
          v-model="Popular"
        ></b-input>(คน)
      </div>
       <br />
      <b-button variant="success" @click="addData()">เพิ่มข้อมูล</b-button>
    </b-card>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ชื่ออาหาร</th>
          <th scope="col">ราคา</th>
          <th scope="col">ความนิยม(คน)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mi, index) in Data" :key="index">
           <td>{{ mi.Name }}</td>
          <td>{{ mi.Price }}</td>
          <td>{{ mi.Popular }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Data:[]
        }
    },
};
</script>

<style>
</style>