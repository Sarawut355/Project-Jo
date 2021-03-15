<template>
  <div class="hello">
    <b-row>
      <b-container>
        <!-- <b-card bg-variant="success" text-variant="white"> -->
        <div role="group">
          <b-row class="my-1" id="black">
            <b-col sm="2">
              <label for="input-small">{{ this.index }}:</label>
            </b-col>
            <b-col sm="8">
              <b-form-input
                type="text"
                id="input-live"
                v-model="name"
                :state="nameState"
                aria-describedby="input-live-help input-live-feedback"
                onKeyUp="if(!(isNaN(this.value))){ alert('เขียนตัวเลขไม่ได้'); this.value='';}"
                placeholder="Put food"
                pattern="[A-Za-z]{1,50}"
                trim
                required
                
              ></b-form-input>
              <b-form-invalid-feedback id="input-live-feedback">
                Enter your food
              </b-form-invalid-feedback>
            </b-col>
             <input type="checkbox" @click="re" id="exampleCheck1">
          </b-row>
        </div>
        
        <!-- </b-card> -->
      </b-container>
    </b-row>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    index: Number,
  },
  computed: {
    ...mapGetters(["PushBigData"]),
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    re(){
      this.PushBigData(this.name);
    }
  },
};
</script>

