import '@fontsource/outfit'
import '@fontsource/outfit/500.css'

import '@fontsource/inter'
import '@fontsource/inter/500.css'

import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import * as components from './component';
import { themeColors as colors } from './colors';
import { mode } from "@chakra-ui/theme-tools";


const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}
const fonts = {
    heading: 'Outfit',
    body: 'Inter'
}

const theme = extendTheme({
    styles: {
        global: (props:any) => ({
            body: {
                bg: mode('w3c.white', 'w3c.purple.900')(props),
            }
        })
    },
    config, colors, components, fonts
})

export default theme