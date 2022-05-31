import { Box, Button, forwardRef } from "@chakra-ui/react";

export const WtcButton = forwardRef(({children, isPrimary, ...props}:any, ref:any) => (
    <Box
        as={Button} ref={ref}
        fontSize={{base: '15px', lg: '27px'}}
        px={{base: '20px', lg: '38.5px'}}
        py={{base: '10px', lg: '22px'}}
        fontWeight={'500'}
        lineHeight={'18px'}
        boxShadow={isPrimary ? 'none' : 'inset 0 0 0 2px #fff'}
        borderRadius={'9px'}
        bg={isPrimary ? 'w3c.gold.linear_gradient.1' : 'transparent'} {...props}
    >{children}</Box>
))