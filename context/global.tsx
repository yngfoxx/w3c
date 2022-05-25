/* eslint-disable react-hooks/exhaustive-deps */
import { createContext,  useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '@/context/theme/config'

let Context = createContext<any>(null);

const Provider = ({defaults, ...props}:any) => {
    
    // * Global state variables
    const [state, setState] = useState<any>({ ...defaults })
    const [defaultTheme, setDefaultTheme] = useState(theme)

    return (
        <Context.Provider value={{ state, defaultTheme, setDefaultTheme }} {...props}>
            <Head>
                <title>{"Web3 Casino"}</title>
                
                <meta name="description" content="The future of gambling built on the Blockchain incorporating web3 technology and Crypto" />
                <meta name="msapplication-TileColor" content="#1c1431" />
                <meta name="theme-color" content="#1c1431" />
                
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3e2f67" />
                <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

            </Head>
            <ChakraProvider theme={defaultTheme}>
                { props.children }
            </ChakraProvider>
        </Context.Provider>
    )
}

const Consumer = Context.Consumer;
export {Provider, Consumer, Context}