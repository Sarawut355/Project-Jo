<template>
  <b-row>
    <b-container>
      <b-card id="dark">
        <h1 id="shadow">Login</h1>
        <div class="row">
          <b-label class="ml-md-4">User : </b-label>
          <b-input class="col-9 ml-md-5" type="text"></b-input>
        </div>
        <br />
        <div class="row">
          <b-label class="ml-md-4">Pass : </b-label>
          <b-input class="col-9 ml-md-5" type="password"></b-input>
        </div>
        <b-link @click="Create">สร้างบรรชีใหม่</b-link>
        <br />
        <b-button variant="primary" @click="Login">Login</b-button>
      </b-card>
    </b-container>
  </b-row>
</template>

<script>
//忍
export default {
  methods: {
    Create() {
      this.$router.replace("/register");
    },
    Login() {
      this.$router.replace("/select");
    },
  },
};
</script>
