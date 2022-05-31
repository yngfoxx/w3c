import { mode } from "@chakra-ui/theme-tools"

export const Button = {
    variants: {
        solid: (props:any) => ({
            _hover: {
                // bg: mode('eb.brown.50', 'gray.700')(props),
                // color: mode('eb.brown.900', 'eb.white')(props),
            }
        })
    }
}

const activeLabelStyles = {
    transform: 'scale(0.85) translateY(-24px)',
}
export const Form = {
    variants: {
        floating: {
            container: {
                _focusWithin: {
                    label: {
                        ...activeLabelStyles,
                    },
                },
                'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label': {
                    ...activeLabelStyles,
                },
                label: {
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    backgroundColor: 'w3c.white',
                    pointerEvents: 'none',
                    mx: 3,
                    px: 1,
                    my: 2,
                    transformOrigin: 'left top'
                },
            }
        }
    }
}

export const Link = {
    variants: {
        w3c: (props:any) => ({
            // color: mode('eb.brown.750', 'eb.brown.250')(props)
        })
    }
}

export const Skeleton = {
    defaultProps: {
        startColor: '#f3eeee',
        endColor: '#dedede',
    }
}

export const Heading = {
    sizes: {
        extraLarge: {
            fontSize: '75px',
            fontWeight: '600',
            lineHeight: '94.5px',
            fontStyle: 'normal',
            color: 'w3c.gold.700'
        },
        large: {
            fontFamily: 'Inter',
            fontSize: '48px',
            fontWeight: '600',
            lineHeight: '58px',
            fontStyle: 'normal'
        },
        medium: {
            fontSize: '32px',
            fontWeight: '600',
            lineHeight: '40px',
            fontStyle: 'normal',
            color: 'w3c.gold.700'
        },
        small: {
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '24px',
        },
        extraSmall: {
            fontSize: '17px',
            fontWeight: '500',
            lineHeight: '22px'
        },
        extraExtraSmall: {
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px'
        }
    }
}