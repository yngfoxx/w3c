import RoadPoint from "@/element/RoadPoint"
import {
    Box,
    Heading,
    Stack,
    VStack,
    Text,
    HStack,
    useBreakpointValue
} from "@chakra-ui/react"
import { useState } from "react"

const Roadmap = (props:any) => {

    const Background = (props:any) => (
        <svg width="1209" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="100%" height="100%" rx="20" fill="url(#paint0_linear_128_21)"/>
            <rect x="1.5" y="1.5" rx="18.5" stroke="url(#paint1_linear_128_21)" strokeOpacity="0.55" strokeWidth="3"
                width={useBreakpointValue({base: '99%', sm: '99.3%', md: '99.4%', lg:'99.7%'})}
                height={useBreakpointValue({base: '99.7%', lg:'99.7%'})}
            />
            <defs>
                <linearGradient id="paint0_linear_128_21" x1="604.5" y1="-365" x2="604.5" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#170F41"/>
                    <stop stopOpacity="0"/>
                    <stop offset="0.0001" stopColor="#161130"/>
                    <stop offset="0.329232" stopColor="#110B30" stopOpacity="0.18"/>
                    <stop offset="0.9999" stopColor="#161130"/>
                    <stop offset="1" stopColor="#0F0B25"/>
                    <stop offset="1" stopColor="#AF2EEB" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_128_21" x1="28.6779" y1="857" x2="1466.24" y2="422.483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B936F5" stopOpacity="0.25"/>
                    <stop stopColor="#B936F5" stopOpacity="0.2"/>
                    <stop offset="1" stopColor="#AA14F0" stopOpacity="0.15"/>
                </linearGradient>
            </defs>
        </svg>
    )

    const isMobile = useBreakpointValue({base: true, xl: false})
    const [roadmap, setRoadmap] = useState([
        {
            title: 'Starting',
            items: [
                'Website Development',
                'Telegram Growth',
                'Private Sale',
                'Marketing Push on',
                '5000TG Members',
                'Various Voices AMA'
            ]
        },
        {
            title: 'Growing',
            items: [
                'Presale KYC and Audit',
                'Influencer Marketing',
                'Public Presale',
                'Launching',
                'Dextool Trending',
                'Coingecko listing'
            ]
        },
        {
            title: 'Mooning',
            items: [
                'Coin Market Cap listing',
                'Marketing push two',
                'NFT Launch',
                'Community Growth',
                'Casino Beta Testing',
                'Rewarding HOLDers'
            ]
        },
        {
            title: 'Wealthy',
            items: [
                'Marketing Push three',
                'Official Merch',
                'Wallet Integration',
                'Casino Deployment',
                'Metaverse Development',
                'NTF Market Place '
            ]
        }
    ])
    
    return (
        <Box w={'full'} {...props}>
            <VStack
                margin={'auto'} w={{base:'85vw', '2xl': '95vw'}} maxW={'1440px'}
                pos={'relative'}
                borderRadius={'20px'}
                p={{base: '28px 12px', md: '60px 20px', lg:'69px 50px', xl: '69px 72px'}}
            >
                <Background width={'100%'} style={{ position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1 }} />
                <Heading
                    size={{base: 'medium', lg: 'extraLarge'}}
                    textAlign={'center'}
                    maxW={{base: '250px', md: 'unset'}}
                >Roadmap to Revolution</Heading>
                <Stack
                    direction={'row'}
                    spacing={{base: '0px', md: '15px'}}
                    mt={{base: '0 !important', md: '40px !important'}}
                    flexWrap={{base: 'wrap', xl: 'nowrap'}}
                    justifyContent={'center'}
                >
                    {roadmap.map((checkpoint:any, index:number) => {
                        return (
                            <VStack key={index} mt={{base: '48px !important', md: '0'}}>
                                <Box pos={'relative'} w={'full'} h={'40px'} hidden={isMobile}
                                    _after={((index+1)==Object.keys(roadmap).length) ? {} : {
                                        content: '""',
                                        pos: 'absolute',
                                        w: 'calc(100% - 45px)', h: '5px',
                                        left: 'calc(50% + 30px)', top: '50%',
                                        bg: 'w3c.gold.700', zIndex: -1,
                                        transform: 'translateY(-50%)',
                                        borderRadius: '10px'
                                    }}
                                >
                                   <RoadPoint 
                                        width={'40px'} height={'40px'}
                                        style={{
                                            margin: 'auto',
                                            filter: 'brightness(1.2)'
                                        }}
                                    />
                                </Box>

                                <HStack spacing={'15px'} mb={{base: '5px !important', md: '28px !important'}} mt={{base: '-10px !important', md: '19px !important'}}>
                                    <Text
                                        fontFamily={'Inter'} fontWeight={600}
                                        fontSize={'70px'} lineHeight={'85px'}
                                        color={'w3c.gold.t700'}
                                    >{ index+1 }</Text>
                                    <Text
                                        fontFamily={'Inter'} fontWeight={600}
                                        fontSize={'35px'} lineHeight={'42px'}
                                    >{ checkpoint.title }</Text>
                                </HStack>

                                {checkpoint.items.map((point:any, key:number) => {
                                    return (
                                        <Box key={key}
                                            pos={'relative'}
                                            border={'2px solid transparent'}
                                            borderRadius={'7px'} minW={{base: '260px', xl: '255px', '2xl': '305px'}}
                                            textAlign={'center'} py={'12px'}
                                            fontFamily={'Inter'} fontWeight={400}
                                            lineHeight={'25px'} fontSize={'21px'}
                                            bg={'w3c.purple.linear_gradient.1'}
                                            style={{
                                                backgroundOrigin: 'border-box',
                                                backgroundClip: 'padding-box, border-box'
                                            }}
                                        >{ point }</Box>
                                    )
                                })}
                            </VStack>
                        )
                    })}
                </Stack>
            </VStack>
        </Box>
    )
}

export default Roadmap