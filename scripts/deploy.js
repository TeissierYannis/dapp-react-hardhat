const hre = require("hardhat");

async function main() {

  console.log("[Greeter] Deploying contract...");
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();
  console.log("Greeter deployed to: " + greeter.address);

  console.log("[Token] Deploying contract...");
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();
  console.log("Token deployed to: " + token.address);

  console.log("[TestToken] Deploying contract...");
  const TestToken = await hre.ethers.getContractFactory("TestToken");
  const testToken = await TestToken.deploy();
  await testToken.deployed();
  console.log("TestToken deployed to: " + testToken.address);

  console.log("[Character] Deploying contract...");
  const Character = await hre.ethers.getContractFactory("Character");
  const character = await Character.deploy();
  await character.deployed();
  console.log("Character deployed to: " + character.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
