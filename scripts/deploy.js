async function main() {
    // if you need to add constructor arguments for the particular game, add them here:
    for (let i = 1; i <= 5; i++) {
        await deploy(`Game${i}`);
    }
}

async function deploy(contractName) {
    const Game = await hre.ethers.getContractFactory(contractName);
    const game = await Game.deploy();
    console.log(`${contractName} deployed to address: ${game.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
