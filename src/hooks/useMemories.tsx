import { OnChainActivityCategory, LookBackInterval, Content } from "../types"

type Props = {
    category: OnChainActivityCategory;
    lookback: LookBackInterval;
}



export default function useMemories({category, lookback}: Props): Content{




    return({title: category, section: <div>meow</div>})


}
