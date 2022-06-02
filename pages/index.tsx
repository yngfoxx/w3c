import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'

import Header from '@/global-components/Header'
import Footer from '@/global-components/Footer'

import Hero from '@/page-components/Home/Hero'
import Campaign from '@/page-components/Home/Campaign'
import Roadmap from '@/page-components/Home/Roadmap'
import Tokenomics from '@/page-components/Home/Tokenomics'
import Pancakeswap from '@/page-components/Home/Pancakeswap'
import Community from '@/page-components/Home/Community'
import Socials from '@/page-components/Home/Socials'

const Home: NextPage = () => {
    return (
        <Box>
            <Header pos={'sticky'} top={0} zIndex={999} />
            
            <Hero mt={{base: '65px', lg: '120px'}} />
            <Campaign mt={{base: '71px', lg: '161px'}} />
            <Roadmap mt={{base: '71px', lg: '178px'}} />
            <Tokenomics mt={{base: '71px', lg: '178px'}} />
            <Pancakeswap mt={{base: '71px', lg: '178px'}} />
            <Community mt={{base: '71px', lg: '249px'}} />
            <Socials mt={{base: '41px', lg: '75px'}} />

            <Footer
                mt={{base: '41px', lg: '75px'}}
                mb={{base: '72px', lg: '97px'}}
            />
        </Box>
    )
}

export default Home
