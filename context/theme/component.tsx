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