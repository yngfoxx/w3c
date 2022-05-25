import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from '@/context/global'
import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {
    
    const [globalState, setGlobalState] = useState({
        locale: 'en',
        authorized: true,
        authenticated: false,
    })

    return (
        <Provider defaults={{ ...globalState }}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App
