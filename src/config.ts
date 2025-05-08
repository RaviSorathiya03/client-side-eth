import {http, createConfig} from "wagmi";
import { mainnet } from "wagmi/chains";
import { metaMask, injected } from "wagmi/connectors";

export const config = createConfig({
    chains: [mainnet], 
    transports: {
        [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/YCJHKqVcqpGEOyA-b6AwfBdglJ8K9Zl9")
    },
    connectors: [
        injected(),
        metaMask()
    ]
});