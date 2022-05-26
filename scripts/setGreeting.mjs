import { ThirdwebSDK } from "@thirdweb-dev/sdk";

async function main() {
    const privateKey = process.env.PK_SECRET;
    const sdk = ThirdwebSDK.fromPrivateKey(privateKey, "mumbai");
    const contract = await sdk.getContract("0xF1109d164BA6e8e80CEBc528A8bF4a4176B5AD54");

    let _greeting = "Hello world!";
    const tx = await contract.functions.setGreeting(_greeting);
    await tx.wait();
    console.log("Greeting successfully changed to " + _greeting);
}

main();