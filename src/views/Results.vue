<template>
  <div>
    <b-row>
      <b-container>
        <b-card-group deck>
          <b-card
            bg-variant=""
            header="ผลลัพธ์"
            header-tag="header"
            footer-tag="footer"
            id="black"
          >
            <b-card-text
              ><b id="shadow" style="font-size: 80px"
                >{{ ShowAns }}</b
              ></b-card-text
            >
            <b-container>
              <b-button @click="Again" variant="outline-primary"
                >ลองอีกครั้ง</b-button
              >
              &nbsp;
              <b-button href="/" variant="outline-primary">ออก</b-button>
            </b-container></b-card
          >
        </b-card-group>
      </b-container>
    </b-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    HelloWorld: String,
    Sum: String,
  },
  computed: {
    ...mapGetters(["UserLogout", "ShowUserLogin","ShowAns"]),
  },
  // beforeCreate() {
  //   if (this.$route.params.id != undefined) {
  //     //
  //   } else {
  //     this.$router.replace("/login");
  //   }
  // },
  methods: {
    Again() {
      this.$router.replace("/select");
    },
    Logout() {
      this.$router.replace("/login");
    },
  },
};
</script>
