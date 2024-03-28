const hre = require("hardhat");

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with account:" , deployer.address);
    // console.log("Account balances:" ,(await deployer.getBalance()).toString());

    //this factory lets us deploy
    const NoMoreRuggs = await hre.ethers.getContractFactory("NoMoreRuggs");
    //this will deploy with 42 milly tokens
    const token = await NoMoreRuggs.deploy(42000000000);

    await token.deployed();

    console.log("Token address:", token.address);

    await hre.run("verify:verify", {
        address: token.address,
        constructorArguments: [42000000000]

    });
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});