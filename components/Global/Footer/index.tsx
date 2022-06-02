import {
    Box,
    forwardRef,
    VStack,
    HStack,
    Link,
    useBreakpointValue
} from "@chakra-ui/react";
import Logo from "@/element/Logo";

const Footer = forwardRef((props:any, ref:any) => {
    return (
        <Box w={'full'} {...props} ref={ref}>
            <VStack w={'full'} spacing={'71px'}>
                <HStack
                    spacing={{base:'10%', xl:'159px'}}
                    bg={'#42424261'} w={'full'}
                    justifyContent={'center'} py={'21px'}
                    fontSize={{base:'10px', lg: '12px', xl: '25px'}}
                    lineHeight={{base:'14.42px', lg:'30.26px'}}
                    fontWeight={500} px={{base:'19px', lg:'186px'}}
                >
                    <Link href={'#'} minW={'max-content'} textAlign={'center'}>QuickSwap</Link>
                    <Link href={'#'} minW={'max-content'} textAlign={'center'}>BScscan</Link>
                    <Link href={'#'} minW={'max-content'} textAlign={'center'}>Dextools BSC</Link>
                    <Link href={'#'} minW={'max-content'} textAlign={'center'}>Etherscan<br/>Coinmarketcap</Link>
                </HStack>
                <Box>
                    <Logo
                        height={useBreakpointValue({base: '45px', md: '55px'})}
                        width={'100%'}
                    />
                </Box>
            </VStack>
        </Box>
    )
})

export default Footer