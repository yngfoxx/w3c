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
            <VStack as={Box}
                margin={'auto'} w={'95vw'} maxW={'1440px'}
                pos={'relative'}
                border={'4px solid transparent'}
                borderRadius={'20px'}
                bg={'w3c.purple.linear_gradient.2'}
                style={{
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                }}
                p={{base: '28px 12px', md: '60px 20px', lg:'69px 50px', xl: '69px 72px'}}
            >
                <Heading
                    size={{base: 'medium', lg: 'extraLarge'}}
                    textAlign={'center'}
                    maxW={{base: '250px', md: 'unset'}}
                >Roadmap to Revolution</Heading>
                <Stack
                    direction={'row'}
                    spacing={'15px'}
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
                                            borderRadius={'7px'} minW={'305px'}
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