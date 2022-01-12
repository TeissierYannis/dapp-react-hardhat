import Web3 from "web3";

/*
 * 1. Check for injected web3 (mist/metamask)
 * 2. If metamask/mist create a new web3 instance and pass on result
 * 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
 * 4. Get user account from metamask
 * 5. Get user balance
 */
let getWeb3 = new Promise(function (resolve, reject) {
  let web3;
  if (window.ethereum) {
    try {
      window.ethereum.enable();
      web3 = new Web3(window.ethereum);
    } catch (error) {
      reject(new Error("Metamask is locked"));
    }
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    reject(new Error("Unable to connect to Metamask"));
  }

  console.log("Connected: " + web3.currentProvider.isConnected());

  console.log(web3);

  resolve({
    isInjected: web3.currentProvider.isConnected(),
    web3() {
      return web3;
    },
  });
})
  .then((result) => {
    return new Promise(function (resolve, reject) {
      // Retrieve network ID
      result
        .web3()
        .eth.getChainId()
        .then((networkId, err) => {
          if (err) {
            // If we can't find a networkId keep result the same and reject the promise
            reject(new Error("Unable to retrieve network ID"));
          } else {
            console.log("NetworkID: " + networkId);
            // Assign the networkId property to our result and resolve promise
            result = Object.assign({}, result, { networkId });
            resolve(result);
          }
        });
    });
  })
  .then((result) => {
    return new Promise(function (resolve, reject) {
      // Retrieve coinbase
      result
        .web3()
        .eth.requestAccounts()
        .then((accounts, err) => {
          if (err) {
            reject(new Error("Unable to retrieve coinbase"));
          } else {
            console.log("Coinbase: " + accounts[0]);
            // Assign the coinbase property to our result and resolve promise
            result = Object.assign({}, result, { coinbase: accounts[0] });
            resolve(result);
          }
        });
    });
  })
  .then((result) => {
    return new Promise(function (resolve, reject) {
      // Retrieve balance for coinbase
      result
        .web3()
        .eth.getBalance(result.coinbase, (err, balance) => {
          if (err) {
            reject(
              new Error(
                "Unable to retrieve balance for address: " + result.coinbase
              )
            );
          } else {
            result = Object.assign({}, result, { balance });
            resolve(result);
          }
        })
        .then((r) => console.log("Balance : " + r));
    });
  });

export default getWeb3;
