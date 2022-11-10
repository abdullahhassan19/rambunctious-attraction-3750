import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Carosel } from '../Components/Carosel/Carosel'

import ProductsBox from './ProductsBox'




const HomePage = () => {
  return (
    <div>
      {/* <Carousel/> */}
      <Carosel/>
      <Box textAlign={"center"} p="2rem" border="1px solid lightgrey">
        <Text
          fontWeight={"400"}
          fontSize={"25px"}
          lineHeight={"31px"}
          color={"#666666"}
        >
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Text>
      </Box>
      
    <div>
      <ProductsBox/>
    </div>
    </div>

    
  )
}

export default HomePage
