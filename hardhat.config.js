require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    },
  goerli: {
    url: process.env.ALCHEMY_GOERLI_ENDPOINT,
    accounts: [process.env.PRIVATE_KEY]
  },
  mainnet: {
    url: process.env.ALCHEMY_MAINNET_ENDPOINT,
    accounts: [process.env.PRIVATE_KEY]
  }
},




  // avax here
  etherscan: {
    //Api key from https://etherscan.io/apikey
    apiKey:{
      mainnet: [process.env.ETHERSCAN_API_KEY],
      //this will be for the glorius avax keys

    }
  }
};
