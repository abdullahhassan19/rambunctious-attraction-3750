import React from 'react'


import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Image, Link, Text } from '@chakra-ui/react';
import { topSlidingImage } from '../../Pages/Productsdata';
function Carosel() {
  return (
    <div><Box display={"flex"} border="1px solid lightgrey" p="0.5">
    <Box w={"70%"}>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        disableButtonsControls="true"
        disableDotsControls="true"
      >
        {topSlidingImage.map((e, i) => (
          <Image w="100%" key={i} src={e.img} />
        ))}
      </AliceCarousel>
    </Box>
    <Box w="30%">
      <Link
        target="_blank"
        href="https://www.1mg.com/labs/test/advanced-cardiac-risk-markers-34953"
      >
        <Image
          h="100%"
          src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/cfd81003-d040-444c-abac-53ffadbfc2c1.png"
        />
      </Link>
    </Box>
  </Box>
  <Box textAlign={"center"} p="2rem" border="1px solid lightgrey">
    <Text
      fontWeight={"400"}
      fontSize={"25px"}
      lineHeight={"31px"}
      color={"#666666"}
    >
      Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
    </Text>
  </Box></div>
  )
}

export default Carosel