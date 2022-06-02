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
                1: `linear-gradient(180deg, #0b071c, #0e081a, #120713, #160917, #090617),
                    linear-gradient(77.91deg, rgba(206, 180, 124, 0.175) 1.95%, rgba(185, 54, 245, 0.14) 21.04%, rgba(206, 180, 124, 0.105) 108.82%)`,
            },
            900: '#02000C',
            t900: 'rgba(26, 20, 54, 0.7)',
            700: '#1A1436',
            400: '#7108F5',
        },
        gold: {
            linear_gradient: {
                1: 'linear-gradient(99.05deg, #CEB47C 0.07%, #CFA13D 106.32%)',
            },
            t700: '#CEB47C66',
            700: '#CEB47C'
        }
    }
}