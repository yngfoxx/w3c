import {
    Box,
    Stack,
    Heading,
    VStack,
    Text,
    HStack
} from '@chakra-ui/react';
import Image from 'next/image';
import CoinImage from '@/media/image/coin.png'
import { WtcButton } from '@/element/Button';

const Hero = (props:any) => {
    return (
        <Box w={'full'} {...props}>
            <Stack as={Box}
                direction={{base: 'column-reverse', md: 'row', xl: 'row'}}
                margin={'auto'} w={'95vw'} maxW={'1440px'}
                justifyContent={'space-between'}
                pos={'relative'}
                border={'4px solid transparent'}
                borderRadius={'20px'}
                bg={'w3c.purple.linear_gradient.1'}
                maxH={{base: '480px', lg: 'unset'}}
                style={{
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                }}
                p={{base: '14px 12px', md: '60px 40px', lg: '60px 72px'}}
            >
                <VStack alignItems={'left'} maxW={{base: 'none', md: '615px', lg: '750px'}}>
                    <Heading size={{base: 'medium', lg: 'medium', xl: 'extraLarge'}}>Web3 Casino</Heading>
                    <Box>
                        <Text
                            fontSize={{base: '14px', lg: '18px', xl: '27px'}}
                            lineHeight={{base: '16.94px', lg: '20px', xl: '32.68px'}}
                            fontWeight={500}
                        >The Future of Gambling built on the Blockchain incorporating web3 technology and Crypto.</Text>
                        <Text
                            fontSize={{base: '11px', lg: '19px', xl: '27px'}}
                            lineHeight={{base: '13px', lg: '24px', xl: '32.68px'}}
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
                            fontSize={{base: '14px', lg: '20px', xl: '27px'}}
                            lineHeight={{base: '16.94px', lg: '25px', xl: '32.68px'}}
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
                    minW={{base: 'unset', lg: '438px'}}
                    minH={{base: 'unset', lg: '465px'}}
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