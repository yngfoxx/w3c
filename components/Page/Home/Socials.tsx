import { Box, forwardRef, HStack, Link, useBreakpointValue } from "@chakra-ui/react"
import { FacebookIcon, InstagramIcon, TelegramIcon, TwitterIcon } from "@/element/SocialIcon"
import { useState } from "react"

const Socials = (props:any) => {

    const SocialButton = forwardRef(({children, href='#', ...props}:any, ref:any) => (
        <Link
            bg={'rgba(45, 48, 61, 0.2)'}
            backdropFilter={'blur(30px)'}
            borderRadius={'50%'}
            display={'flex'} flexFlow={'row'}
            justifyContent={'center'}
            href={href} ref={ref} {...props}>
            { children }
        </Link>
    ))

    const [hoverState, setHoverState] = useState({
        telegram: false,
        facebook: false,
        twitter: false,
        instagram: false
    })

    return (
        <Box {...props}>
            <HStack spacing={{base: '21px', lg: '59px'}} justifyContent={'center'}>

                {/* Telegram */}
                <Box
                    role={'group'} pos={'relative'}
                    w={{base: '50px', md: '80px', lg: '138px'}}
                    h={{base: '50px', md: '80px', lg: '138px'}}
                    onMouseEnter={() => setHoverState({...hoverState, telegram: true})}
                    onMouseLeave={() => setHoverState({...hoverState, telegram: false})}
                >
                    <TelegramIcon
                        isHovered={ hoverState.telegram } width={'100%'}
                        height={useBreakpointValue({base: '31px', lg: '61px'})}
                        style={{
                            opacity: `${hoverState.telegram ? 1 : 0}`,
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'opacity .3s linear'
                        }}
                    />
                    <SocialButton href={'https://t.me/Web3Casino'}
                        w={'full'} h={'full'} pr={{base: '3px', lg: '10px'}} pt={{base: '3px', md: '0px'}}
                        _groupHover={{boxShadow: 'inset 0px -5px 12px rgba(0, 186, 198, 0.35), inset 0px 2px 4px rgba(255, 255, 255, 0.1)'}}
                    >
                        <TelegramIcon
                            isHovered={ hoverState.telegram } color={'gray'} width={'100%'}
                            height={useBreakpointValue({base:'23px', lg:'45px'})}
                            style={{margin:'auto', transition:'color-change .3s linear'}}
                        />
                    </SocialButton>
                </Box>

                
                {/* Twitter */}
                <Box
                    role={'group'} pos={'relative'}
                    w={{base: '50px', md: '80px', lg: '138px'}}
                    h={{base: '50px', md: '80px', lg: '138px'}}
                    onMouseEnter={() => setHoverState({...hoverState, twitter: true})}
                    onMouseLeave={() => setHoverState({...hoverState, twitter: false})}
                >
                    <TwitterIcon
                        isHovered={ hoverState.twitter } width={'100%'}
                        height={useBreakpointValue({base: '20px', md: '38px', lg: '68px'})}
                        style={{
                            opacity: `${hoverState.twitter ? 1 : 0}`,
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            transition: 'opacity .3s linear'
                        }}
                    />
                    <SocialButton href={'https://twitter.com/theweb3casino?s=21&t=Rlvp_hmuplrGzb5UtXq2_A'}
                        w={'full'} h={'full'}
                        _groupHover={{boxShadow: 'inset 0px -5px 12px rgba(29, 161, 242, 0.35), inset 0px 2px 4px rgba(255, 255, 255, 0.1)'}}
                    >
                        <TwitterIcon
                            isHovered={ hoverState.twitter } color={'gray'} width={'100%'}
                            height={useBreakpointValue({base:'22px', lg:'44px'})}
                            style={{margin:'auto', transition:'color-change .3s linear'}}
                        />
                    </SocialButton>
                </Box>


                {/* Instagram */}
                <Box 
                    role={'group'} pos={'relative'}
                    w={{base: '50px', md: '80px', lg: '138px'}}
                    h={{base: '50px', md: '80px', lg: '138px'}}
                    onMouseEnter={() => setHoverState({...hoverState, instagram: true})}
                    onMouseLeave={() => setHoverState({...hoverState, instagram: false})}
                >
                    <InstagramIcon
                        isHovered={ hoverState.instagram } width={'100%'}
                        height={useBreakpointValue({base: '40px', lg: '79px'})}
                        style={{
                            position: 'absolute',
                            top: '50%', left: '50%', opacity: `${hoverState.instagram ? 1 : 0}`,
                            transform: 'translate(-50%, -50%)',
                            transition: 'opacity .3s linear'
                        }}
                    />
                    <SocialButton href={'https://instagram.com/web3casino.gg?igshid=YmMyMTA2M2Y='}
                        w={'full'} h={'full'}
                        _groupHover={{boxShadow: 'inset 0px -5px 12px rgba(144, 14, 176, 0.35), inset 0px 2px 4px rgba(255, 255, 255, 0.1)'}}
                    >
                        <InstagramIcon
                            isHovered={ hoverState.instagram } color={'gray'} width={'100%'}
                            height={useBreakpointValue({base:'30px', lg:'53px'})}
                            style={{margin:'auto', transition:'color-change .3s linear'}}
                        />
                    </SocialButton>
                </Box>

            </HStack>
        </Box>
    )
}

export default Socials