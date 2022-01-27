const main = async () => {
    // Creates necessary files to work with the contract
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    // Creates a local Ethereum network
    const nftContract = await nftContractFactory.deploy();
    // Waits until the contract is mined and deployed to the network
    await nftContract.deployed();
    console.log("Contract deployed to: ", nftContract.address);

    // Call the function
    let txn = await nftContract.makeAnEpicNFT();
    // Wait for it to be mined
    await txn.wait();

    // Mint a second for testing purposes
    txn = await nftContract.makeAnEpicNFT();
    // wait for it to be minted
    await txn.wait();
}

// Runs main asynchronously inside a try & catch
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.log("Error: ", err);
        process.exit(1);
    }
}

runMain();