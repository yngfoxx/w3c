import {
    Box,
    Stack,
    VStack,
    Heading
} from "@chakra-ui/react"
import Image from 'next/image';
import CoinsImage from '@/media/image/three_coins.png'
import { WtcButton } from '@/element/Button';

const Campaign = (props:any) => {
    return (
        <Box margin={'auto'} w={{base:'85vw', '2xl': '95vw'}} {...props}>
            <VStack spacing={0}>
                <Box
                    maxW={{base: '186px', lg: 'unset'}}
                    maxH={{base: '186px', lg: 'unset'}}
                    transform={{base: 'none', lg: 'translateY(20px)'}}
                >
                    <Image alt={'3 coins'} src={CoinsImage}></Image>
                </Box>
                <Heading size={{base: 'medium', lg: 'extraLarge'}}>Join the innovation</Heading>
                <Stack
                    direction={{base: 'column', lg: 'row'}}
                    spacing={{base: '10px', lg: '20px'}}
                    mt={{base: '8px !important', lg: '17px !important'}}
                >
                    <WtcButton minW={{base: '270px', lg: 'unset'}} isPrimary>Get a Ticket to the Casino</WtcButton>
                    <WtcButton minW={{base: '270px', lg: 'unset'}}>Read the White Paper</WtcButton>
                </Stack>
            </VStack>
        </Box>
    )
}

export default Campaign