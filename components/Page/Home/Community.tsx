import {
    Box,
    Heading,
    HStack,
    Link,
    VStack
} from "@chakra-ui/react"
import Image from 'next/image';
import ChainImage from '@/media/image/chain.png'

const Community = (props:any) => {
    return (
        <Box w={'full'} bg={'w3c.white'} {...props}>
            <HStack
                py={{base: '48px', lg: '132px'}}
                px={{base: '40px', lg: '187px'}}
                spacing={{base: '29px', lg: '80px'}}
                justifyContent={'center'}
            >
                <Box w={{base: '91px', lg: '170px', xl: 'auto'}} minW={'50px'}>
                    <Image src={ChainImage} alt={'link up'}/>
                </Box>
                <VStack spacing={{base: '6px', lg: '15px', xl: '21px'}} alignItems={'flex-start'}>
                    <Heading
                        size={{base: 'extraExtraSmall', sm:'extraSmall', md:'small', lg: 'large', xl: 'extraLarge'}}
                        fontWeight={'600 !important'} color={'#000 !important'}
                        w={'max-content'}
                    >Join Our Amazing<br/>Community</Heading>
                    <Link href={'https://t.me/Web3Casino'}
                        fontSize={{base: '10px', md: '15px', lg: '25px', xl: '39px'}}
                        fontWeight={600} fontFamily={'Inter'}
                        lineHeight={{sm: '11px', md: '21.78px', lg: '28px', xl: '47.2px'}}
                        p={{base: '6px 11px', lg: '10px 25px', xl: '15px 39px'}}
                        bg={'w3c.purple.400'} borderRadius={'6px'}
                    >Visit Telegram</Link>
                </VStack>
            </HStack>
        </Box>
    )
}

export default Community