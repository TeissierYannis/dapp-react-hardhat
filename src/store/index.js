import { createStore } from "vuex";
import getWeb3 from "../assets/libs/getWeb3";
import state from "./state";

export default createStore({
  state,
  mutations: {
    registerWeb3Instance(state, payload) {
      console.log("registerWeb3Instance called", payload);
      let result = payload;
      let web3Copy = result.web3;
      web3Copy.coinbase = result.coinbase;
      web3Copy.networkId = result.networkId;
      web3Copy.balance = parseInt(result.balance, 10);
      web3Copy.isInjected = result.isInjected;
      web3Copy.web3Instance = result.web3Instance;
      state.web3 = web3Copy;
    },
  },
  actions: {
    registerWeb3({ commit }) {
      console.log("registerWeb3 called");
      getWeb3
        .then((result) => {
          console.log("committing result to registerWeb3");
          commit("registerWeb3Instance", result);
        })
        .catch((e) => {
          console.log("error in registerWeb3", e);
        });
    },
  },
  modules: {},
});
