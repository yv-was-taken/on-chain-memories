import { ReactNode } from "react";
export type OnChainActivityCategory = "Tokens" | "NFTs" | "Yield" | "Governance";

export type LookBackInterval = "Year" | "Month" | "Week";

export interface Content {
    title: OnChainActivityCategory;
    section: ReactNode;
}
