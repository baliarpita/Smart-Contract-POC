require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    baseSepolia: {
      url: "https://sepolia.base.org",   // Base Sepolia RPC
      chainId: 84532,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
