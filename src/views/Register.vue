<template>
  <b-row>
    <b-container>
      <b-card id="dark">
        <!-- //忍 -->
        <h1>Register</h1>
        <div class="row">
          <b-label class="col-3">First Name : </b-label>
          <b-input class="col-7 ml-md-5" type="text" v-model="FN"></b-input>
        </div>
        <br />
        <div class="row">
          <b-label class="col-3">Last Name : </b-label>
          <b-input class="col-7 ml-md-5" type="text" v-model="LN"></b-input>
        </div>
        <br />
        <div class="row">
          <b-label class="col-3">Password : </b-label>
          <b-input
            class="col-7 ml-md-5"
            type="password"
            v-model="PW1"
          ></b-input>
        </div>
        <br />
        <div class="row">
          <b-label class="col-3">Confirm Password : </b-label>
          <b-input
            class="col-7 ml-md-5"
            type="password"
            v-model="PW2"
          ></b-input>
        </div>
        <br />
        <div class="row">
          <b-label class="col-3">E-mail : </b-label>
          <b-input class="col-7 ml-md-5" type="email" v-model="EM"></b-input>
        </div>
        <br />
        <div class="row">
          <b-label class="col-3">Tel : </b-label>
          <b-input class="col-7 ml-md-5" type="tel" v-model="TL"></b-input>
        </div>
        <br />
        <b-button v-if="!chak" @click="ShowFood()">เพิ่มอาหารที่ชอบ</b-button>
        <div class="row" v-if="chak">
          <b-label class="col-3">อาหารที่ชอบ : </b-label>
          <p class="col-2">ช่วงเช้า (6:00-9:00)</p>
          <b-form-select
            class="col-5 ml-md-5"
            v-model="F1"
            :options="BF"
          ></b-form-select>
        </div>
        <br />
        <div class="row" v-if="chak">
          <b-label class="col-3"></b-label>
          <p class="col-2">ช่วงเที่ยง (9:01-15:00)</p>
          <b-form-select
            class="col-5 ml-md-5"
            v-model="F2"
            :options="LU"
          ></b-form-select>
        </div>
        <br />
        <div class="row" v-if="chak">
          <b-label class="col-3"></b-label>
          <p class="col-2">ช่วงเย็น (15:01-18:00)</p>
          <b-form-select
            class="col-5 ml-md-5"
            v-model="F3"
            :options="DN"
          ></b-form-select>
        </div>
        <br />
        <b-button variant="success" @click="Register()" v-if="chak"
          >Register</b-button
        >
        <!-- {{Show1[0][1].bfname}} -->
        <!-- {{ NameBreakfast }}
        {{ NameLunch }}
        {{ NameDinner }} -->
      </b-card>
    </b-container>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["Push1", "Push2","Push3","Show1"]),
  },
  data() {
    return {
      NameBreakfast: [],
      NameLunch: [],
      NameDinner: [],
      BF: [],
      LU: [],
      DN: [],
      num1:0,
      num2:0,
      num3:3,
      FN: null,
      LN: null,
      PW1: null,
      PW2: null,
      CPW: null,
      EM: null,
      TL: null,
      F1: 1,
      F2: 1,
      F3: 1,
      chak: false,
    };
  },
  created() {
    this.list_NameFood();
  },
  methods: {
    //เทียบข้อมูลที่กรอกมากับdataแล้วเพิ่มค่านิยม{
    pop() {
      for (let index = 0; index < this.NameBreakfast.length; index++) {
        if (this.NameBreakfast[index].bfname == this.F1) {
          this.id=this.index;
          this.NameBreakfast[index].bfpop++;
          var dataUpdatebf = {
            bfname: this.NameBreakfast[index].bfname,
            bfpop: this.NameBreakfast[index].bfpop,
          };
          //ส่งตำแหน่งของอาเรย์ออกมาใช้{
          this.num1=index;
          //}
          //เรียกใช้code Update'MySQL {
          this.$_api
            .post("/Update-bf-popular", dataUpdatebf)
            .then((response) => {
              console.log(response.data.data);
            });
          //}
        }
      }
      for (let index = 0; index < this.NameLunch.length; index++) {
        if (this.NameLunch[index].luname == this.F2) {
          this.NameLunch[index].lupop++;
          var dataUpdatelu = {
            luname: this.NameLunch[index].luname,
            lupop: this.NameLunch[index].lupop,
          };
          this.num2=index;
          this.$_api
            .post("/Update-lu-popular", dataUpdatelu)
            .then((response) => {
              console.log(response.data.data);
            });
        }
      }
      for (let index = 0; index < this.NameDinner.length; index++) {
        if (this.NameDinner[index].dnname == this.F3) {
          this.NameDinner[index].dnpop++;
          var dataUpdatedn = {
            dnname: this.NameDinner[index].dnname,
            dnpop: this.NameDinner[index].dnpop,
          };
          this.num=index;
          this.$_api
            .post("/Update-dn-popular", dataUpdatedn)
            .then((response) => {
              console.log(response.data.data);
            });
        }
      }
      //แสดง  err {
      console.log(this.NameBreakfast, this.NameLunch, this.NameDinner);
      //}
    },
    //}
    // เก็บข้อมูลจากDataMySQLลงมาพักในอาเรย์ของเว็ป{ 
    ShowFood() {
      for (let index = 0; index < this.NameBreakfast.length; index++) {
        this.BF.push(this.NameBreakfast[index].bfname);
      }
      for (let index = 0; index < this.NameLunch.length; index++) {
        this.LU.push(this.NameLunch[index].luname);
      }
      for (let index = 0; index < this.NameDinner.length; index++) {
        this.DN.push(this.NameDinner[index].dnname);
      }
      //เปลี่ยนค่าสถานนะปุ่ม{
      this.chak = true;
      //}
    },
    //}
    //fnการเพิ่มข้อมูลผู้ใช้ลงDataMySQL
    Register() {
      this.pop();
      alert("CompleteRegister");
      var dataInsert = {
        firstname: this.FN,
        lastname: this.LN,
        password: this.PW2,
        email: this.EM,
        tel: this.TL,
        bfmid:this.num1,
        lumid:this.num2,
        dnmid:this.num3
      };
      console.log(dataInsert);
      this.$_api.post("/Insert-register", dataInsert).then((response) => {
        console.log(response.data.data);
      });
      this.$router.replace("/login");
    },
    list_NameFood() {
      this.$_api.get("/list-breakfast").then((res) => {
        console.log(res.data.data);
        this.NameBreakfast = res.data.data;
        this.Push1(this.NameBreakfast);
      });
      this.$_api.get("/list-lunch").then((res) => {
        console.log(res.data.data);
        this.NameLunch = res.data.data;
        this.Push2(this.NameLunch);
      });
      this.$_api.get("/list-dinner").then((res) => {
        console.log(res.data.data);
        this.NameDinner = res.data.data;
        this.Push3(this.NameDinner);
      });
    },
  },
};
</script>
