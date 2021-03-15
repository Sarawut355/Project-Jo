<template>
  <b-row>
    <b-container>
      <b-card id="dark">
        <h1 id="shadow">Login</h1>
        <div class="col-12"></div>
        <div class="row">
          <b-label class="ml-md-4">User : </b-label>
          <b-input
            class="col-9 ml-md-5"
            type="text"
            v-model="userlogin"
          ></b-input>
        </div>
        <div class="col-12"></div>
        <br />
        <div class="row">
          <b-label class="ml-md-4">Pass : </b-label>
          <b-input
            class="col-9 ml-md-5"
            type="password"
            v-model="password"
          ></b-input>
        </div>
        <div class="col-12"></div>
        <b-link @click="Create">สร้างบรรชีใหม่</b-link>
        <br />
        <b-button variant="primary" @click="Login">Login</b-button>
      </b-card>
    </b-container>
  </b-row>
</template>

<script>
//忍
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["PushUserLogin","Show1","Show2","Show3"]),
  },
  data: () => ({
    DataUser: "",
    userlogin: null,
    User: null,
    password: "",
    NameBreakfast:this.Show1
  }),
  created() {
    this.showUser();
  },
  methods: {
    Create() {
      this.$router.replace("/register");
    },
    Login() {
      for (var index = 0; index <= this.DataUser.length; index++) {
        if (
          this.userlogin == this.DataUser[index].firstname &&
          this.password == this.DataUser[index].password
        ) {
          this.PushUserLogin(
            this.DataUser[index].firstname,
            this.Show1[0][this.DataUser[index].bfmid].bfname,
            this.Show2[0][this.DataUser[index].lumid].luname,
            this.Show3[0][this.DataUser[index].dnmid].dnname
          );
          this.$router.replace("/select");
          alert("Loginสำเร็จ");
          break;
        }
      }
    },
    showUser() {
      this.$_api.get("/list-user").then((response) => {
        console.log(response.data.data);
        this.DataUser = response.data.data;
      });
    },
  },
};
</script>
