const hre = require("hardhat");

async function main() {
	console.log(arguments[1]);

	const symbol = "UDAY";
	const name = "Uday Token";
	const totalSupply = 1000;

	const UdayTokenContractFactory = await hre.ethers.getContractFactory(
		"UdayToken"
	);
	const UdayTokenContract = await UdayTokenContractFactory.deploy(
		symbol,
		name,
		totalSupply
	);
	await UdayTokenContract.deployed();

	console.log(`\nUdayToken contract has been deplyed.`);
	console.log(`\nDeployed to: ${UdayTokenContract.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
