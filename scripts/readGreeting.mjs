import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK("mumbai");

async function main() {
    const contract = await sdk.getContract("0xF1109d164BA6e8e80CEBc528A8bF4a4176B5AD54");

    const readGreeting = await contract.functions.greet();
    console.log(readGreeting);
}

main();