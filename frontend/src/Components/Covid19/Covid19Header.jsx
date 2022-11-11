import React from "react";
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Covid19Banner from "./Covid19Banner";
const Covid19Header = () => {
  return (
    <>
      <Box bgColor={"#FDF0DF"}>
        <HStack p="3rem">
          <VStack w="60%" px="2">
            <Text
              textAlign={"left"}
              fontSize={"35px"}
              color="#3b3b3b"
              fontWeight={"600"}
            >
              Combating Coronavirus in India
            </Text>
            <Text fontSize={"16px"} color="#767676">
              As we are staring at a potential rise of coronavirus in India,
              testing, tracing and treating is the ideal way of curbing this
              spread. Testing on time helps provide early treatment which, in
              turn, prevents the spread to your loved ones and others around
              you.
            </Text>
            <Box p="0.1rem" my="1" bgColor={"#212529"} w="80%"></Box>
            <Box>
              <Text
                fontSize={"16px"}
                fontWeight="500"
                lineHeight={"23px"}
                color="#767676"
              >
                Experiencing COVID-like symptoms? To book a COVID-19 test at
                home, call on
              </Text>
            </Box>
            <Box fontSize={"35px"} color="#3b3b3b" fontWeight={"600"}>
              <a href="tel:18002122353">1800-212-2353 </a>
            </Box>
          </VStack>
          <VStack w="50%">
            <Image
              src="https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Corona_landing_page/img-head.png"
              borderRadius={"2xl"}
            />
          </VStack>
        </HStack>
      </Box>
      <VStack justifyContent={"center"} my="2rem" mx="5rem">
        <Covid19Banner />
      </VStack>
    </>
  );
};

export default Covid19Header;
