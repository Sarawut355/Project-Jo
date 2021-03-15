import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BigData: [],
    Ans: null,
    UserLogin: [],
    NameBreakfast: [],
    NameLunch: [],
    NameDinner: [],
  },
  getters: {
    ShowBigData: state => {
      return state.BigData;
    },
    PushBigData: state => Name => {
      state.BigData.push(Name);
    },
    Push1: state => Name => {
        state.NameBreakfast.push(Name);
    },
    Push2: state => Name => {
        state.NameLunch.push(Name);
    },
    Push3: state => Name => {
        state.NameDinner.push(Name);
    },
    Show1: state =>{
        return state.NameBreakfast;
    },
    Show2: state => {
        return state.NameLunch;
    },
    Show3: state => {
        return state.NameDinner;
    },
    ShowAns: state => {
      return state.Ans;
    },
    GetAns: state => sum => {
      state.Ans = sum;
    },
    PushUserLogin: state => (Name, bfmid, lumid, dnmid) => {
      state.UserLogin.push(Name, bfmid, lumid, dnmid);
    },
    ShowUserLogin: state => {
      return state.UserLogin;
    },
    UserLogout: state => {
      state.UserLogin.pop;
    },
    Chack: state => {
      return state.UserLogin.length;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
