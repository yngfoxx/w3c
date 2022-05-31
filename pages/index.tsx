import type { NextPage } from 'next'
import Header from '@/global-components/Header'
import { Box } from '@chakra-ui/react'
import Hero from '@/page-components/Home/Hero'
import Campaign from '@/page-components/Home/Campaign'
import Roadmap from '@/page-components/Home/Roadmap'

const Home: NextPage = () => {
    return (
        <Box>
            <Header pos={'sticky'} top={0} zIndex={999} />
            <Hero mt={{base: '70px', lg: '120px'}} />
            <Campaign mt={{base: '56px', lg: '161px'}} />
            <Roadmap mt={{base: '56px', lg: '178px'}} />
        </Box>
    )
}

export default Home
