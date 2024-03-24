require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  goerli: {
    url: process.env.ALCHEMY_GOERLI_ENDPOINT,
    accounts: [process.env.PRIVATE_KEY]
  },
  mainnet: {
    url: process.env.ALCHEMY_MAINNET_ENDPOINT,
    accounts: [process.env.PRIVATE_KEY]
  }

  //add sepolia and avax here
};