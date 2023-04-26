import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
    midnightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [
        publicProvider()
    ]
);
const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


export default function App({ Component, pageProps }: AppProps) {




    return( 
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} modalSize="compact" theme={midnightTheme()}>
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
          )
}
