import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Carousel from '../Components/Carousel'
import ProductBox from './Productscarosel'




const HomePage = () => {
  return (
    <div>
      <Carousel/>
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
      <ProductBox/>
    </div>
    </div>

    
  )
}

export default HomePage
