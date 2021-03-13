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
          <b-card>
            <HelloWorld
              cols="4"
              v-for="(item, index) in test"
              :key="index"
              :index="index + 1"
            />
            <b-button variant="outline-primary" @click="ttt">เพิ่ม</b-button
            >&nbsp;
            <b-button variant="primary" @click="sumit">ยืนยัน</b-button>
          </b-card></b-container
        >
      </b-row>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      test: [{}, {}],
    };
  },
  methods: {
    ttt() {
      this.test.push({});
    },
    sumit() {
      this.$router.replace("/results");
    },
  },
};
</script>

