require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "mabwCi3lWC-2oYYsABko6r5qEsHHkRVH";

const GOERLI_PRIVATE_KEY = "593a6480b7508c64bb6ad0be4240534b962ee94a9a0f31914fcc256cfabe7098";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
}