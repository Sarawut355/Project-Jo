<template>
  <div class="container">
    <b-card id="black"
      ><h1>อาหารช่วงเช้า</h1>
      <div class="row">
        <b-label class="col-3">ชื่ออาหาร : </b-label>
        <b-input class="col-7" type="text" v-model="FoodName"></b-input>
      </div>
      <div class="row">
        <b-label class="col-3">ราคา : </b-label>
        <b-input class="col-7" type="number" v-model="Price"></b-input>
      </div>
      <div class="row">
        <b-label class="col-3">ความนิยม : </b-label>
        <b-input class="col-7" type="number" v-model="Popular"></b-input>(คน)
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
        <tr v-for="(mi, index) in DataBreakfast" :key="index" id="text-color">
          <td>{{ mi.bfname }}</td>
          <td>{{ mi.bfprice }}</td>
          <td>{{ mi.bfpop }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataBreakfast: [],
      FoodName: "",
      Price: Number,
      Popular: Number,
    };
  },
  created() {
    this.list_Breakfast();
  },
  methods: {
    addData() {
      alert("CompleteFood1");
      var dataInsert = {
        bfname: this.FoodName,
        bfprice: this.Price,
        bfpop: this.Popular,
      };
      console.log(dataInsert);
      this.$_api
        .post("/Insert-breakfast", dataInsert)
        .then((response) => {
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    list_Breakfast() {
      this.$_api
        .get("/list-breakfast")
        .then((res) => {
          console.log(res.data.data);
          this.DataBreakfast = res.data.data;
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