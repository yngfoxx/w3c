import { type Colors } from '@chakra-ui/react'

export const themeColors: Colors = {
    w3c: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
            900: '#43485C',
            800: '#646877',
            700: '#9F9F9F',
            500: '#F5F5F5'
        },
        purple: {
            linear_gradient: {
                1: 'linear-gradient(180deg, #0b071c, #0e081a, #120713, #160917, #090617),linear-gradient(77.91deg, rgba(206, 180, 124, 0.175) 1.95%, rgba(185, 54, 245, 0.14) 21.04%, rgba(206, 180, 124, 0.105) 108.82%)',
                2: 'linear-gradient(180deg, #170F41 -42.59%, rgba(0, 0, 0, 0) -42.59%, #161130 -42.57%, rgba(17, 11, 48, 0.18) 9.52%, #161130 115.68%, #0F0B25 115.69%, rgba(175, 46, 235, 0) 115.69%), linear-gradient(77.91deg, rgba(185, 54, 245, 0.1375) 1.95%, rgba(185, 54, 245, 0.11) 1.95%, rgba(170, 20, 240, 0.0825) 108.82%)',
            },
            900: '#02000C',
            t900: 'rgba(26, 20, 54, 0.7)',
            700: '#1A1436'
        },
        gold: {
            linear_gradient: {
                1: 'linear-gradient(99.05deg, #CEB47C 0.07%, #CFA13D 106.32%)',
                2: 'linear-gradient(270deg, #CEB47C 0%, rgba(0, 0, 0, 0) 100%)'
            },
            t700: '#CEB47C66',
            700: '#CEB47C'
        }
    }
}