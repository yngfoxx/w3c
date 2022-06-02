import {
    Box,
    Heading,
    Text,
    VStack,
    Stack,
    useBreakpointValue
} from "@chakra-ui/react"
import { useState } from "react"


const Tokenomics = (props:any) => {

    const Background = (props:any) => (
        <svg width="1193" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="100%" height="100%" rx="20" fill="url(#paint0_linear_109_153)"/>
            <rect x="1.5" y="1.5" width={useBreakpointValue({base: '99%', sm: '99.3%', md: '99.4%', lg:'99.7%'})} height={useBreakpointValue({base: '99.7%', lg:'99.7%'})} rx="18.5" stroke="url(#paint1_linear_109_153)" strokeOpacity="0.55" strokeWidth="3"/>
            <defs>
                <linearGradient id="paint0_linear_109_153" x1="596.5" y1="-308.781" x2="596.5" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9D2323"/>
                    <stop stopOpacity="0"/>
                    <stop offset="0.0001" stopColor="#161130"/>
                    <stop offset="0.329232" stopColor="#2F300B" stopOpacity="0.18"/>
                    <stop offset="0.9999" stopColor="#161130" stopOpacity="0.39"/>
                    <stop offset="1" stopColor="#AF2EEB" stopOpacity="0"/>
                    <stop offset="1" stopColor="#0F0B25" stopOpacity="0.55"/>
                </linearGradient>
                <linearGradient id="paint1_linear_109_153" x1="28.2984" y1="725" x2="1405.27" y2="239.529" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B936F5" stopOpacity="0.2"/>
                    <stop stopColor="#F5CB36" stopOpacity="0.25"/>
                    <stop offset="1" stopColor="#F0A514" stopOpacity="0.15"/>
                </linearGradient>
            </defs>
        </svg>
    )

    const ItemBackground = (props:any) => (
        <svg width="347" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_f_16_273)">
        <rect x="2.25" y="2.25" width="99%" height="298.5" rx="11.75" stroke="url(#paint0_linear_16_273)" strokeWidth="2.5"/>
        </g>
            <defs>
                <filter id="filter0_f_16_273" x="0" y="0" width="100%" height="303" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_16_273"/>
                </filter>
                <linearGradient id="paint0_linear_16_273" x1="173.5" y1="1" x2="173.5" y2="302" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CEB47C"/>
                    <stop offset="1" stopColor="#CEB47C" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>

    )

    const [dynamics, setDynamics] = useState([
        {
            title: 'Development',
            body: 'Our experience developing team Is hard at working fast but safe. In order to do that quickly and efficiently, we put in 4% that will go into casino, metavarse development and NFT’s.'
        },
        {
            title: 'Liquidity',
            body: 'Knowing how important it is to keep the token alive we need to keep the liquidity strong that is why we feed it with 4% that will go back into the liquidity to keep it strong.'
        },
        {
            title: 'Marketing',
            body: '3% Every Transaction gives more fuel to our marketing message. With an experienced Marketing team that has a systematic and measured approach, we know exactly which switch to flip and when to flip. That is why 3% will be used for marketing.'
        }
    ])

    return (
        <Box margin={'auto'} w={{base:'85vw', '2xl': '95vw'}} {...props}>
            <VStack
                margin={'auto'} w={{base:'85vw', '2xl': '95vw'}} maxW={'1440px'}
                pos={'relative'}
                borderRadius={'20px'}
                p={{base: '28px 12px', md: '60px 20px', lg:'69px 50px', xl: '69px 72px'}}
            >
                <Background width={'100%'} style={{ position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1 }} />
                <Heading size={{base: 'medium', lg: 'extraLarge'}} textAlign={'center'}>Tokenomics</Heading>
                <Heading size={{base:'extraExtraSmall', md: 'extraSmall', lg: 'small'}} textAlign={'center'}>
                    The coin dynamics that will fuel casino.
                </Heading>

                <VStack w={'full'} spacing={{base: '15px', lg: '23px'}} mt={{base: '29px !important', lg: '50px !important'}} px={'10px'}>
                    <Heading
                        size={{base: 'small', lg: 'large'}} w={'full'}
                        textAlign={'left'} color={'w3c.gold.700'}
                        fontWeight={'600 !important'}
                    >Supply ———</Heading>

                    <Stack 
                        w={'full'} spacing={{base: '50px',  xl: '15px'}}
                        justifyContent={'space-between'}
                        direction={{base: 'column', xl: 'row'}}
                    >
                        {dynamics.map((dynamic:any, key:number) => (
                            <Box
                                key={key} w={'full'}
                                p={'27px 21px 34px 22px'}
                                pos={'relative'}
                            >
                                <ItemBackground width={'100%'} style={{ position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1 }} />
                                <Heading fontSize={{base: '22px', lg: '35px'}} size={'medium'} textAlign={'left'}>{ dynamic.title }</Heading>
                                <Text mt={{base: '15px', lg: '20px'}} fontSize={{base: '15px', lg: '20px'}} lineHeight={'24.2px'}>{ dynamic.body }</Text>
                            </Box>
                        ))}
                    </Stack>
                </VStack>
                
            </VStack>
        </Box>
    )
}

export default Tokenomics