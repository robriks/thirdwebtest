import { ThirdwebSDK } from "@thirdweb-dev/sdk";

const sdk = new ThirdwebSDK("mumbai");

async function main() {
    const contract = await sdk.getContract("0x7E5ee60085b0f6dec4a9551eA36F2DE282b34961");

    const readGreeting = await contract.functions.greet();
    console.log(readGreeting);
}

main();