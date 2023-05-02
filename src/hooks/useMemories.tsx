import { OnChainActivityCategory, LookBackInterval, Data, TokenActivity, NFTActivity, YieldActivity, GovernanceActivity, InfoSection} from "../types";
import { INTERVAL_IN_SECONDS } from "../constants";
import { getBlockNumberFromTimestamp } from "../utils"
import { useAccount } from "wagmi";

type Props = {
    category: OnChainActivityCategory;
    lookback: LookBackInterval;
}

const apikey = process.env.API_KEY;

export default function useMemories() {

    const { address } = useAccount(); 

    async function getMemory({category, lookback}: Props) {
        let endTime = Math.round(Date.now()/1000 - INTERVAL_IN_SECONDS["YEAR"]);
        let startTime = endTime - INTERVAL_IN_SECONDS[lookback];

        let action;
        switch(category) {
            case "Tokens":
                action = "txlist";
            break;
        }
        let startBlock = await getBlockNumberFromTimestamp(startTime);
        let endBlock = await getBlockNumberFromTimestamp(endTime);
        let response = await fetch(
            `
            https://api.etherscan.io/api?module=account&action=${action}&address=${address}&startblock=${startBlock}&endblock=${endBlock}&tag=latest&apikey=${process.env.API_KEY}
                `
        ).then(resp => resp.json()).then(json => json.result);

        return(response);

    }
    //
    //
    //    if (category === "Tokens") {
    //        const titleOne: TokenActivity = "Trades"
    //        const titleTwo: TokenActivity = "Transfers";
    //        const sectionOne: InfoSection  = <div>Foo</div>
    //        const sectionTwo: InfoSection = <div>Bar</div>
    //
    //
    //        return({
    //            titleOne: titleOne,
    //            sectionOne: sectionOne,
    //            titleTwo: titleTwo,
    //            sectionTwo: sectionTwo
    //        })
    //
    //
    //    }
    //    if (category === "NFTs") {
    //        const titleOne: TokenActivity = "Trades"
    //        const titleTwo: TokenActivity = "Transfers";
    //        const sectionOne: InfoSection  = <div>Foo</div>
    //        const sectionTwo: InfoSection = <div>Bar</div>
    //
    //
    //        return({
    //            titleOne: titleOne,
    //            sectionOne: sectionOne,
    //            titleTwo: titleTwo,
    //            sectionTwo: sectionTwo
    //        })
    //
    //
    //    }
    //    if (category === "Yield") {
    //        const titleOne: TokenActivity = "Trades"
    //        const titleTwo: TokenActivity = "Transfers";
    //        const sectionOne: InfoSection  = <div>Foo</div>
    //        const sectionTwo: InfoSection = <div>Bar</div>
    //
    //
    //        return({
    //            titleOne: titleOne,
    //            sectionOne: sectionOne,
    //            titleTwo: titleTwo,
    //            sectionTwo: sectionTwo
    //        })
    //
    //
    //    }
    //    if (category === "Governance") {
    //        const titleOne: TokenActivity = "Trades"
    //        const titleTwo: TokenActivity = "Transfers";
    //        const sectionOne: InfoSection  = <div>Foo</div>
    //        const sectionTwo: InfoSection = <div>Bar</div>
    //
    //        return({
    //            titleOne: titleOne,
    //            sectionOne: sectionOne,
    //            titleTwo: titleTwo,
    //            sectionTwo: sectionTwo
    //        })
    //

    return {getMemory}
}











