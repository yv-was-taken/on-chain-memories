import { useState } from "react";
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

function InfoBlock({content, currentSection}:InfoBlockProps ) {

    return(
        <div id="info-block-container" className="bg-gray-900 h-3/4 w-2/5 flex flex-col justify-between items-center text-white">
            <h1 className="p-10 text-lg">{content.title}</h1>
            <div className="whitespace-normal p-10">{content.section}  </div>

        </div>


    )


}

type InfoBlocksProps = {
    currentPage: number; 
    data: { title1: string, section1: string, title2: string, section2: string}
}

function InfoBlocks({currentPage, data}: InfoBlocksProps ) {

    return(
        <>
            <InfoBlock currentSection={infoTitles[currentPage]} content={{title: data.title1, section:data.section1}}/>
            <InfoBlock currentSection={infoTitles[currentPage]} content={{title: data.title2, section:data.section2}}/>
        </>

    )
}







export default function Info() {
    const [currentPage,setCurrentPage] = useState(1);



    return(
        <div className={`relative rounded-sm mx-auto block w-full h-full  text-black flex flex-col justify-around items-center`}>
            <div id="info-date-title" className="fixed top-6 left-24 text-gray-100 text-3xl">
                <button className="underline text-gray-900 bg-gray-100 p-1 hover:bg-gray-500 hover:text-gray-100">Today</button>, last year, on-chain...
            </div>

            <div id="info-main-container "className="relative w-3/4 h-5/6 bg-gray-500 border-2 border-gray-100 flex flex-row justify-around items-center">
                <h1 className="p-2 absolute right-5 top-5 text-2xl bg-gray-100 border-2 border-gray-900">{infoTitles[currentPage]}</h1>
                <InfoBlocks currentPage={currentPage} data={{title1: 'Foo1', section1: 'Bar1', title2: 'Foo2', section2: 'Bar2'}}/>


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
