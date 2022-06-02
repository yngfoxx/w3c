import {
    Box,
    HStack,
    forwardRef,
    Stack,
    VStack,
    Link,
    useBreakpointValue 
} from "@chakra-ui/react";
import Logo from "@/element/Logo";
import Image from "next/image";
import { useState } from "react";

const MenuItem = forwardRef(({ name, navigationHash, children, isActive=false, isButton=false, ...props}:any, ref:any) => (
    <Link
        ref={ref}
        fontSize={'18px'}
        px={{base: '20px', lg: '11.1px'}}
        py={{base: '20px', lg: '9.5px'}}
        fontWeight={'500'}
        lineHeight={'18px'}
        borderRadius={{base: '0', lg: '3.34px'}}
        bg={isButton ? 'w3c.gold.linear_gradient.1' : 'transparent'}
        color={isActive ? 'w3c.gold.700' : 'w3c.white'}
    >
        { children }
    </Link>
))

const Header = forwardRef((props:any, ref:any) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const MobileMenuButton = forwardRef((props:any, ref:any) => (
        <VStack w={'31px'} h={'9px'} spacing={'3px'} {...props} ref={ref}>
            <Box w={'full'} h={'full'} bg={'w3c.white'}></Box>
            <Box w={'full'} h={'full'} bg={'w3c.white'}></Box>
        </VStack>
    ))

    return (
        <Box
            w={'full'}
            p={{base: '25px 24px', lg: '26px 49px'}}
            bg={'w3c.purple.t900'}
            backdropFilter={'blur(18px)'}
            {...props} ref={ref}
        >
            <HStack w={'full'} maxW={'1440px'} justifyContent={'space-between'} m={'auto'} px={{base: '0', lg: '60px'}}>
                <Logo
                    width={useBreakpointValue({ base: '151px', lg: '200px' })}
                    height={useBreakpointValue({base: '29px', lg: '38px'})}
                />
                <MobileMenuButton
                    hidden={useBreakpointValue({ base: false, lg: true})}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
                <Stack
                    spacing={{base: '10px', lg: '23px'}}
                    direction={{base: 'column', lg: 'row'}}
                    pos={{base: 'absolute', lg: 'static'}}
                    top={'78px'} left={0} right={0}
                    bg={{base: 'w3c.purple.700', lg: 'transparent'}}
                    margin={{base: 'auto !important', lg: 'auto 0 auto auto !important'}}
                    overflow={'hidden'}
                    minH={'0px !important'}
                    maxH={{base: mobileMenuOpen ? '1000px' : '0px', lg: 'none'}}
                    transition={'max-height .3s ease'}
                >
                    <MenuItem isActive>Home</MenuItem>
                    <MenuItem>Casino</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem isButton>Buy Now</MenuItem>
                </Stack>
            </HStack>
            
        </Box>
    )
})

export default Header