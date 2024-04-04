const hre = require("hardhat");
const { Contract } = require('hardhat/internal/hardhat-network/stack-traces/model');

async function main() {
    constructorArguments = [
        "0xd955437119a0675F8A706C553E3e850386a91376",
    ]
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:" , deployer.address);
    
    
    //this factory lets us deploy
    const NoMoreRuggs = await ethers.getContractFactory("NoMoreRuggs");
    //this will deploy with 42 billy tokens
    const token = await NoMoreRuggs.deploy(4200000000000);
    const contract = await NoMoreRuggs.deploy(...constructorArguments);

    // await contract.deployTransaction.wait(5);
    // await token.waitForDeployment(); depreciated??

    console.log(`Token address:" ${contract.address}`);
    // console.log("Account balances:" ,(await token.getAddress()).toString());

    run("verify:verify", {
        address: token.address,
        constructorArguments: [4200000000000]
    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});