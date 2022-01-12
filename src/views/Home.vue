<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="metamask-info">
      <p>Metamask: {{ web3.isInjected }}</p>
      <p>Network: {{ web3.networkId }}</p>
      <p>Account: {{ web3.coinbase }}</p>
      <p>Balance: {{ web3.balance }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  beforeCreate() {
    console.log("registering Web3");
    this.$store.dispatch("registerWeb3");
  },
  computed: {
    web3() {
      return this.$store.state.web3;
    },
  },
};
</script>
