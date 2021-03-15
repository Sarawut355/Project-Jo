<template>
  <div class="about">
    <div>
      <b-row>
        <b-container>
          <b-row>
            <b-container>
              <!-- <b-navbar toggleable="lg" type="dark" variant="info"> -->
              <b-card bg-variant="success" text-variant="white"
                ><h4>กรอกข้อมูล</h4></b-card
              >
            </b-container>
          </b-row>
          {{ ShowAns }}
          <b-card>
            <HelloWorld
              cols="4"
              v-for="(item, index) in test"
              :key="index"
              :index="index + 1"
            />
            <b-button variant="outline-primary" @click="ttt"
              >เพิ่มช่องกรอก</b-button
            >&nbsp;
            <b-button variant="primary" @click="sumit">ยืนยัน</b-button>
          </b-card></b-container
        >
      </b-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  computed: {
    ...mapGetters([
      "ShowBigData",
      "GetAns",
      "ShowAns",
      "ShowUserLogin",
      "Show1",
      "Show2",
      "Show3",
    ]),
  },
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      test: [{}, {}],
      date: new Date().getHours(),
    };
  },
  methods: {
    ttt() {
      this.test.push({});
    },
    sumit() {
      this.chacktime();
      this.$router.replace("/results");
    },
    chacktime() {
      if (this.date >= 6 && this.date <= 9) {
        this.Breakfast();
      } else if (this.date >= 9 && this.date <= 15) {
        this.Lunch();
      } else {
        this.Dinner();
      }
    },
    Breakfast() {
      for (let index = 0; index < this.ShowBigData.length; index++) {
        if (this.ShowBigData[index] == this.ShowUserLogin[1]) {
          this.GetAns(this.ShowBigData[index]);
          break;
        } else if (this.index == this.ShowBigData.length) {
          this.ChackBF();
        }
      }
      this.AllChack();
    },
    Lunch() {
      for (let index = 0; index < this.ShowBigData.length; index++) {
        if (this.ShowBigData[index] == this.ShowUserLogin[2]) {
          this.GetAns(this.ShowBigData[index]);
          break;
        }
        else if (this.index == this.ShowBigData.length) {
          this.ChackLU();
        }
      }
      this.AllChack();
    },
    Dinner() {
      for (let index = 0; index < this.ShowBigData.length; index++) {
        if (this.ShowBigData[index] == this.ShowUserLogin[3]) {
          this.GetAns(this.ShowBigData[index]);
          break;
        }
        else if (this.index == this.ShowBigData.length) {
          this. ChachDN();
        }
      }
      this.AllChack();
    },
    ChackBF() {
      for (let index = 0; index < this.ShowBigData.length; index++) {
        for (let j = 0; j < this.Show3[0].length; j++) {
          if (this.ShowBigData[index] == this.Show3[0][j].dnname) {
            this.GetAns(this.ShowBigData[index]);
            break;
          }
        }
      }
    },
    ChackLU(){
      for (let index = 0; index < this.ShowBigData.length; index++) {
        for (let j = 0; j < this.Show2[0].length; j++) {
          if (this.ShowBigData[index] == this.Show2[0][j].luname) {
            this.GetAns(this.ShowBigData[index]);
            break;
          }
        }
      }
    },
    ChachDN(){
      for (let index = 0; index < this.ShowBigData.length; index++) {
        for (let j = 0; j < this.Show1[0].length; j++) {
          if (this.ShowBigData[index] == this.Show1[0][j].bfname) {
            this.GetAns(this.ShowBigData[index]);
            break;
          }
        }
      }
    },
    AllChack() {
      for (let index = 0; index < this.ShowBigData.length; index++) {
        for (let j = 0; j < this.Show3[0].length; j++) {
          if (this.ShowBigData[index] == this.Show3[0][j].dnname) {
            this.GetAns(this.ShowBigData[index]);
            break;
          }
        }
        for (let j = 0; j < this.Show2[0].length; j++) {
          if (this.ShowBigData[index] == this.Show2[0][j].luname) {
            this.GetAns(this.ShowBigData[index]);
            break;
          }
        }
        for (let j = 0; j < this.Show1[0].length; j++) {
          if (this.ShowBigData[index] == this.Show1[0][j].bfname) {
            this.GetAns(this.ShowBigData[index]);
            break;
          }
        }
      }
    },
  },
};
</script>

