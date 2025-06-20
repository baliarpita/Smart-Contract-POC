const hre = require("hardhat");

async function main() {
  const HelloJournal = await hre.ethers.getContractFactory("HelloJournal");
  const journal = await HelloJournal.deploy();

  await journal.waitForDeployment();

  console.log("HelloJournal deployed to:", await journal.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
