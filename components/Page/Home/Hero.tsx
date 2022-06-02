import {
    Box,
    Stack,
    Heading,
    VStack,
    Text,
    HStack,
    useBreakpointValue
} from '@chakra-ui/react';
import Image from 'next/image';
import CoinImage from '@/media/image/coin.png'
import { WtcButton } from '@/element/Button';

const Hero = (props:any) => {

    const Background = (props:any) => (
        <svg width="1218" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="100%" height="100%" rx="22" fill="url(#paint0_linear_128_2)"/>
            <rect x="2.5" y="2.5" rx="22.5" stroke="url(#paint1_linear_128_2)" strokeOpacity="0.7" strokeWidth="5"
                width={useBreakpointValue({base: '99%', sm: '99.3%', md: '99.4%', lg:'99.5%'})}
                height={useBreakpointValue({base: '99%', lg:'99.3%'})}
            />
            <defs>
                <linearGradient id="paint0_linear_128_2" x1="609" y1="-271.852" x2="609" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#AA14F0"/>
                    <stop stopOpacity="0"/>
                    <stop offset="0.0001" stopColor="#161130"/>
                    <stop offset="0.329232" stopColor="#161130" stopOpacity="0.4"/>
                    <stop offset="0.9999" stopColor="#973C44" stopOpacity="0.055"/>
                    <stop offset="1" stopColor="#433976" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_128_2" x1="33.6542" y1="655" x2="1386.72" y2="116.225" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#CEB47C" stopOpacity="0.25"/>
                    <stop offset="0.17863" stopColor="#B936F5" stopOpacity="0.2"/>
                    <stop offset="1" stopColor="#CEB47C" stopOpacity="0.15"/>
                </linearGradient>
            </defs>
        </svg>
    )

    return (
        <Box w={'full'} {...props}>
            <Stack
                direction={{base: 'column-reverse', md: 'row', xl: 'row'}}
                margin={'auto'} w={{base:'90vw', lg: '95vw', xl: '90vw'}} maxW={'1440px'}
                justifyContent={'space-between'}
                pos={'relative'}
                borderRadius={'20px'}
                maxH={{base: '480px', lg: 'unset'}}
                p={{base: '14px 12px', md: '60px 40px', lg: '60px 72px'}}
            >
                <Background width={'100%'} style={{ position:'absolute', top:0, left:0, right:0, bottom:0, zIndex:-1 }} />
                <VStack alignItems={'left'} maxW={{base: 'none', md: '615px', xl: '750px'}}>
                    <Heading size={{base: 'medium', lg: 'extraLarge', xl: 'extraLarge'}}>Web3 Casino</Heading>
                    <Box>
                        <Text
                            fontSize={{base: '14px', md: '18px', xl: '27px'}}
                            lineHeight={{base: '16.94px', md: '20px', xl: '32.68px'}}
                            fontWeight={500}
                        >The Future of Gambling built on the Blockchain incorporating web3 technology and Crypto.</Text>
                        <Text
                            fontSize={{base: '11px', md: '19px', xl: '27px'}}
                            lineHeight={{base: '13px', md: '24px', xl: '32.68px'}}
                            color={'w3c.gray.700'} fontWeight={400}
                            mt={{base: '7px', lg: '11px'}}
                        >
                            Finally, an online casino that is focused on
                            {" "}decentralization, Metaverse, Blockchain
                            {" "}technology and NFT’S. Without the worry of
                            {" "}registration just connected your decentralized
                            {" "}wallet and you are good to go.
                        </Text>
                        <Text
                            fontSize={{base: '14px', md: '20px', xl: '27px'}}
                            lineHeight={{base: '16.94px', md: '25px', xl: '32.68px'}}
                            fontWeight={600} color={'w3c.gold.700'}
                            mt={{base: '7px', lg: '21px'}}
                        >ETA-LUNCHTIME TO BE ANNOUNCED</Text>

                        <HStack spacing={{base: '7px', md: '20px'}} mt={{base: '10px', lg: '41px'}}>
                            <WtcButton isPrimary>Buy Now</WtcButton>
                            <WtcButton>Telegram</WtcButton>
                        </HStack>
                    </Box>
                </VStack>

                <Box
                    minW={{base: 'unset', md: '277px', lg: '438px'}}
                    minH={{base: 'unset', md: '277px', lg: '465px'}}
                    maxW={{base: '177px', md: 'unset'}}
                    maxH={{base: '177px', md: 'unset'}}
                    transform={{base: 'translateY(-40px)', md: 'translateY(-10px)', lg: 'none'}}
                    m={'auto !important'}
                >
                    <Image alt={'coin'} src={CoinImage} />
                </Box>
            </Stack>
        </Box>
    )
}

export default Hero