import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {Info} from "../components"



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <main
      className={` w-screen flex h-screen flex-col items-end justify-between p-10 ${inter.className}`}
    >
        <ConnectButton accountStatus="address" chainStatus="icon" showBalance={false}/>
        <Info/>
    </main>
  )
}
