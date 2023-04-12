async function main() {
    const divider = '-'.repeat(100);
    console.log(`${divider}\nGame1`);
    await play1();
    console.log(`${divider}\nGame2`);
    await play2();
    console.log(`${divider}\nGame3`);
    await play3();
    console.log(`${divider}\nGame4`);
    await play4();
    console.log(`${divider}\nGame5`);
    await play5();
}

async function play1() {
    const game = await hre.ethers.getContractAt(
        'Game1',
        '0x9A676e781A523b5d0C0e43731313A708CB607508'
    );
    const tx = await game.win();
    await logResult(tx);
}
async function play2() {
    const game = await hre.ethers.getContractAt(
        'Game2',
        '0x0B306BF915C4d645ff596e518fAf3F9669b97016'
    );
    await game.setX(20);
    await game.setY(30);
    const tx = await game.win();
    await logResult(tx);
}
async function play3() {
    const game = await hre.ethers.getContractAt(
        'Game3',
        '0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1'
    );
    const tx = await game.win(45);
    await logResult(tx);
}
async function play4() {
    const game = await hre.ethers.getContractAt(
        'Game4',
        '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE'
    );
    const tx = await game.win(56);
    await logResult(tx);
}
async function play5() {
    const game = await hre.ethers.getContractAt(
        'Game5',
        '0x68B1D87F95878fE05B998F19b66F4baba5De1aed'
    );
    await game.giveMeAllowance(20000);
    await game.mint(10000);
    const tx = await game.win();
    await logResult(tx);
}

async function logResult(tx) {
    const { to, from, transactionHash, events } = await tx.wait();
    console.log(`Successful transaction:\n`);
    console.log(`\tFrom: ${from}`);
    console.log(`\tTo: ${to}`);
    console.log(`\tTxHash: ${transactionHash}`);
    console.log(`\tEevents:`);
    if (events.length) {
        for (const event of events) {
            console.log(`\t\t${event.event}: ${event.data}`);
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
