import { useState, useEffect, ReactNode } from "react";
import { useMemories } from "../hooks";
import { OnChainActivityCategory } from "../types"

type TokenData = {

}
type NFTData = {

}
type YieldData = {

}
type GovernanceData = {

}

type InfoBlockProps = {
    currentSection:  OnChainActivityCategory;
    content: { title: string, section: string}
}
interface InfoTitles {
    [key: number]: OnChainActivityCategory; 
}

const infoTitles: InfoTitles = {
    1: "Tokens",
    2: "NFTs",
    3: "Yield",
    4: "Governance"
}

function InfoBlock({children} : {children: ReactNode}) {


    

    return(
        <div id="info-block-container" className="bg-gray-900 h-5/6 w-11/12 flex flex-col justify-start items-center text-white relative bottom-7">
            {children}        </div>


    )


}











export default function Info() {
    const [currentPage,setCurrentPage] = useState(1);
    const [memories, setMemories] = useState<any>(['loading...']); //@TODO typing
    const {getMemory} = useMemories()




    useEffect(()=> {
        async function fetchMemory() {
            let memory = await getMemory({category: infoTitles[currentPage], lookback: "DAY"})
            console.log(memory);
            setMemories(memory);
        }
        fetchMemory().catch(console.error);


    }, [])

    
    const Transactions = memories.map((memory: any, index: number) => {
        return(
            <div className="whitespace-normal p-5" key={index}>
                {memory.hash}
            </div>

        )

    }) //@TODO typing




    return(
        <div className={`relative rounded-sm mx-auto block w-full h-full  text-black flex flex-col justify-around items-center`}>
            <div id="info-date-title" className="fixed z-10 bottom-32 left-28 text-gray-900 text-3xl">
                <button className="underline text-gray-900 p-2 border-2 border-gray-900 hover:border-gray-100 hover:bg-gray-300">Today</button>, last year, on-chain...
            </div>

            <div id="info-main-container "className="relative w-11/12 h-5/6 bg-gray-500 border-2 border-gray-100 flex flex-row justify-around items-center">
                <InfoBlock>
                    {Transactions}
                </InfoBlock>


            </div>


            <div id="info-nav-button-container" className="absolute bottom-5 flex flex-row justify-around w-28">

                <button onClick={()=> setCurrentPage(currentPage > 1 ? currentPage-1 : currentPage)} id="nav-button-arrow-left" className="mx-1 border-l-2 border-b-2 border-gray-500 h-3 w-3 transform rotate-45 hover:border-gray-100 hover:cursor-pointer"/>
                <div className={`hover:cursor-pointer rounded-sm h-3 w-3 ${currentPage === 1 ? 'bg-gray-100' : 'bg-gray-500'} inline-block`}/>

                <div className={`hover:cursor-pointer rounded-sm h-3 w-3 ${currentPage === 2 ? 'bg-gray-100' : 'bg-gray-500'} inline-block`}/>

                <div className={`hover:cursor-pointer rounded-sm h-3 w-3 ${currentPage === 3 ? 'bg-gray-100' : 'bg-gray-500'} inline-block`}/>
                <div className={`hover:cursor-pointer rounded-sm h-3 w-3 ${currentPage === 4 ? 'bg-gray-100' : 'bg-gray-500'} inline-block`}/>

                <button id="nav-button-arrow-right" onClick={()=> setCurrentPage(currentPage < 4 ? currentPage+1 : currentPage)} className="mx-1 border-r-2 border-t-2 border-gray-500 h-3 w-3 transform rotate-45 hover:border-gray-100 hover:cursor-pointer"/>
            </div>
        </div>


    )


}
