<template>
  <b-row>
    <b-container>
      <b-btn @click="f1">อาหารช่วงเช้า</b-btn>
      <b-btn @click="f2">อาหารช่วงเที่ยง</b-btn>
      <b-btn @click="f3">อาหารช่วงเย็น</b-btn>
      <food-1 v-if="ans == 1" />
      <food-2 v-if="ans == 2" />
      <food-3 v-if="ans == 3" />
    </b-container>
  </b-row>
</template>

<script>
import Food1 from "../components/Food1.vue";
import Food2 from "../components/Food2.vue";
import Food3 from "../components/Food3.vue";
export default {
  components: { Food1, Food2, Food3 },
  data() {
    return {
      ans: Number,
      User: this.$route.params.User,
    };
  },
  methods: {
    f1() {
      this.ans = 1;
    },
    f2() {
      this.ans = 2;
    },
    f3() {
      this.ans = 3;
    },
  },
  mounted() {
    if (this.User =="Shinobu") {
      // User is signed in.
    } else {
      // No user is signed in.
      this.$router.replace("/login");
    }
  },
};
</script>

<style>
</style>