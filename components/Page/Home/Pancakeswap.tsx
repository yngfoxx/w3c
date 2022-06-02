import {
    Box,
    Text,
    Heading,
    VStack
} from "@chakra-ui/react"
import Image from 'next/image';
import { useState } from "react"
import CoinStackImage from '@/media/image/coinstack.png'

const Pancakeswap = (props:any) => {

    const [steps, setSteps] = useState([
        'Add $BNB to your wallet.',
        'Go to the Pancakeswap from the link on the website.',
        'Copy the contract Address and import token.',
        'Get ready to play and earn!'
    ])

    return (
        <Box margin={'auto'} w={{base:'85vw', '2xl': '95vw'}} maxW={'1430px'} {...props}>
            <Box
                display={'grid'}
                gridTemplateAreas={{
                    base: `'right' 'header' 'main'`,
                    xl: `'header header header' 'main right right'`
                }}
                px={{base: '0px', lg: '57px'}}
            >
                <Heading
                    size={{base: 'medium', lg: 'extraLarge'}} gridArea={'header'}
                    color={'#fff !important'} display={'inline-flex'}
                    m={'auto'} mb={{base: '24px', lg: '89px'}} mt={{base: '31px', xl: 'auto'}}
                    fontFamily={'Outfit !important'} minW={'max-content'}
                >
                    How to Buy
                    {' '}<Text
                            ml={{base: '10px', lg: '28px'}} borderRadius={'74px'}
                            boxShadow={'0px 4px 40px 15px rgba(113, 8, 245, 0.32)'}
                            fontSize={{base: '20px', lg: '42px'}}
                            px={{base: '12px', lg: '33px'}} bg={'w3c.purple.400'}
                        >pancakeswap</Text>
                </Heading>
                <VStack gridArea={'main'} spacing={{base: '21px', lg: '34px'}} minW={'300px'} maxW={{base: '60%', md: 'unset'}} m={'auto'}>
                    {steps.map((step:any, key:number) => (
                        <Box
                            key={key} display={'flex'}
                            flexFlow={'row'} alignSelf={'flex-start'}
                            gap={{base: '14px', lg: '18px'}}
                        >
                            <Text
                                fontSize={{base: '21px', lg: '60px'}}
                                lineHeight={{base: '39.06px', lg: '75.6px'}}
                                fontWeight={600} bg={'w3c.purple.400'}
                                p={{base: '3px 17px', lg: '6px 33px'}}
                                h={'max-content'}
                                borderRadius={{base: '10px', lg: '16px'}}
                            >{ key+1 }</Text>
                            <Text
                                fontFamily={'Inter'}
                                fontSize={{base: '21px', lg: '32px'}}
                                lineHeight={{base: '25.41px', lg: '38.73px'}}
                                fontWeight={500} bg={'#42424261'}
                                p={{base: '11px 13px', lg: '24px 30px'}}
                                borderRadius={{base: '10px', lg: '16px'}}
                            >{ step }</Text>
                        </Box>
                    ))}
                </VStack>
                <Box gridArea={'right'} textAlign={'center'} m={'auto !important'} maxW={{base: '247px', lg: 'unset'}}>
                    <Image src={CoinStackImage} alt={'coinstack'}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Pancakeswap