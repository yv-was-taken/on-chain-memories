import { ReactNode } from "react";
export type OnChainActivityCategory = "Tokens" | "NFTs" | "Yield" | "Governance";

export type LookBackInterval = "YEAR" | "MONTH" | "WEEK" | "DAY";


export type TokenActivity = "Trades" | "Transfers";
export type NFTActivity = "Mints" | "Listings/Sales";
export type YieldActivity = "Deposits" | "Withdrawls";
export type GovernanceActivity = "Airdrops" | "Votes";

export type InfoTitle = TokenActivity | NFTActivity | YieldActivity | GovernanceActivity;
export type InfoSection = ReactNode;

export type Data = {
    titleOne: InfoTitle;
    sectionOne: InfoSection;
    titleTwo: InfoTitle;
    sectionTwo: InfoSection;
} | null;


