const { ethers } = require("hardhat");
const main = async () => {
  const [owner] = await ethers.getSigners();

  console.log("Deploying with account : ", owner.address);
  const balance = (await owner.getBalance()).toString();
  console.log("Account Balance : ", ethers.utils.formatEther(balance));
  const NodeContractFactory = await hre.ethers.getContractFactory("Node");
  const NodeContract = await NodeContractFactory.deploy();
  await NodeContract.deployed();

  console.log("Contract deploy address : ", NodeContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
