// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const NFT = await hre.ethers.getContractFactory("BLEUFINFT");

  console.log("gasPrice", (await NFT.signer.getBalance()).toString());
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

  // await hre.run("verify:verify", {
  //   address: nft.address,
  //   contract: "contracts/BLEUFINFT.sol:BLEUFINFT",
  // });


  const Marketplace = await hre.ethers.getContractFactory("BLEUFINFTMarketplace");
  // const accounts = await hre.ethers.getSigners();

  // console.log(nft.address);

  const marketplace = await Marketplace.deploy(
    nft.address,
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // Wrapped BNB address
    "0xD894612b859E90b1d164dbB8c0EA5b6a1bC2ceC6", // Admin address
    "0xFa429Eeb87A4756c0a5A2B2515794caA9e8d036d", // Payable address
    // "0x97ea5efdcb5961a99ba5c96123042507c0210ec1" // Flokin address
  );

  await marketplace.deployed();
  console.log("Marketplace deployed to:", marketplace.address);

  // await hre.run("verify:verify", {
  //   address: marketplace.address,
  //   constructorArguments: [
  //     nft.address,
  //     "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  //     "0xD894612b859E90b1d164dbB8c0EA5b6a1bC2ceC6",
  //     "0xFa429Eeb87A4756c0a5A2B2515794caA9e8d036d",
  //     // "0x97ea5efdcb5961a99ba5c96123042507c0210ec1",
  //   ],
  //   contract: "contracts/Marketplace.sol:BLEUFINFTMarketplace",
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
