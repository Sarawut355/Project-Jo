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
        <tr v-for="(mi, index) in DataLunch" :key="index" id="text-color">
           <td>{{ mi.luname }}</td>
          <td>{{ mi.luprice }}</td>
          <td>{{ mi.lupop }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataLunch: [],
      FoodName: "",
      Price: Number,
      Popular: Number,
    };
  },
  created() {
    this.list_Lunch();
  },
  methods: {
    addData() {
      alert("CompleteFood2");
      var dataInsert = {
        luname: this.FoodName,
        luprice: this.Price,
        lupop: this.Popular,
      };
      console.log(dataInsert);
      this.$_api
        .post("/Insert-lunch", dataInsert)
        .then((response) => {
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    list_Lunch() {
      this.$_api
        .get("/list-lunch")
        .then((res) => {
          console.log(res.data.data);
          this.DataLunch = res.data.data;
        })
        .cath((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>