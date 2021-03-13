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
        <div class="row">
          <b-label class="col-3">อาหารที่ชอบ : </b-label>
          <p class="col-2">ช่วงเช้า (6:00-9:00)</p>
          <b-form-select
            class="col-5 ml-md-5"
            v-model="F1"
            :options="data"
          ></b-form-select>
        
        </div>
        <br />
        <div class="row">
          <b-label class="col-3"></b-label>
          <p class="col-2">ช่วงเที่ยง (9:01-15:00)</p>
          <b-form-select
            class="col-5 ml-md-5"
            v-model="F2"
            :options="data"
          ></b-form-select>
        </div>
        <br />
        <div class="row">
          <b-label class="col-3"></b-label>
          <p class="col-2">ช่วงเย็น (15:01-18:00)</p>
         <b-form-select
            class="col-5 ml-md-5"
            v-model="F3"
            :options="data"
          ></b-form-select>
        </div>
        <br />
        <b-button variant="success" @click="Register()">Register</b-button>
      </b-card>
    </b-container>
  </b-row>
</template>

<script>
export default {
  data() {
    return {
      data: ["aaaa", "bbbbb", "ccccc"],
      FN: null,
      LN: null,
      PW1: null,
      PW2: null,
      CPW: null,
      EM: null,
      TL: null,
      F1: null,
      F2: null,
      F3: null,
    };
  },
  methods: {
    Register() {
      this.$router.replace("/login");
    },
  },
};
</script>
