<template >
  <div id="app" class="dark" style="height: 100rem">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto" id="nav">
          <router-link to="/login">Login</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br />
    <router-view class="col-12" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["Push1", "Push2","Push3"]),
  },
   created() {
    this.list_NameFood();
  },
  methods: {
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
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
  background-color: rgb(41, 41, 41);
}
/* 忍 */
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#shadow {
  text-shadow: 2px 2px #ff0000;
}
#dark {
  background-color: rgb(66, 66, 66);
}
#black {
  color: black;
}
#text-color {
  color: gold;
}
</style>

