import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

//const PKey = process.env.PK_SECRET;
//const sdk = ThirdwebSDK.fromPrivateKey(PKey, "mumbai");

async function main() {
    const provider = ethers.getDefaultProvider(process.env.API_URL);
    const sdk = new ThirdwebSDK(provider);
    const contract = await sdk.getContract("0x7E5ee60085b0f6dec4a9551eA36F2DE282b34961");
    //const walletAddress = "0x5d5d4d04B70BFe49ad7Aac8C4454536070dAf180";

    let _greeting = "Hola mundo!";
    const tx = await contract.functions.setGreeting(_greeting);
    await tx.wait();
    console.log("Greeting successfully changed to $_greeting");
}

main();