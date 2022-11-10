import { Box, Button,  Image, Link,  Text } from "@chakra-ui/react";
import React from "react";
import BrandsCard from "../Components/cards/BrandCard";
import CheckupCard from "../Components/cards/CheckupCards";
import Popularcategories from "../Components/cards/Popularcategories";
import ProductsCard from "../Components/cards/ProductsCard";
import {
  datalist,
  FeaturedBrands,
  health,

  popularCategories,

  Shopbyhealthconcerns,
  topSellingProducts,
} from "./Productsdata";

const ProductsBox = () => {
  return (
    <Box bg="#f6f6f6">
      {/* Top image */}
      <Box p="1rem">
        <Image
          w="95%"
          m="auto"
          src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
        />
      </Box>    
      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
          Shop by health concerns
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={Shopbyhealthconcerns} />
      </Box>
      <Box mt="2rem" >
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"300"} lineHeight={"26px"} fontSize={"12px"}>
          CheckUp cards
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="100%"
              height={"20px"}
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <Box>
        <CheckupCard something={datalist} />
        </Box>
       
      </Box>





     
      

      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
          Popular categories
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <Popularcategories something={popularCategories} />
      </Box>
      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Featured Brands
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={FeaturedBrands} />
      </Box>
     

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>

      {/* brands */}

      <Box mt="2rem" >
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Featured Brands
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={health} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>

      {/* brands */}

      <Box mt="2rem">
        <Box display="flex" justifyContent="space-between" px="2rem">
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Featured Brands
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <BrandsCard something={health} />
      </Box>

      {/* Products */}

      <Box mt="2rem">
        <Box
          display="flex"
          justifyContent="space-between"
          px="2rem"
          mb="0.5rem"
        >
          <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
            Top Sellers From Ensure
          </Text>
          <Link href="http://localhost:3000/allProducts" target="_blank">
            <Button
              bgColor="#ff6f61"
              _hover={{ bg: "#ff6f61" }}
              width="fit-content"
              color="white"
            >
              SEE ALL
            </Button>
          </Link>
        </Box>
        <ProductsCard something={topSellingProducts} />
      </Box>
    </Box>
  );
};

export default ProductsBox;



// <Box mt="2rem">
// <Box display="flex" justifyContent="space-between" px="2rem">
//   <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
//     cards
//   </Text>
//   <Link href="http://localhost:3000/allProducts" target="_blank">
//     <Button
//       bgColor="#ff6f61"
//       _hover={{ bg: "#ff6f61" }}
//       width="fit-content"
//       color="white"
//     >
//       SEE ALL
//     </Button>
//   </Link>
// </Box>
// {/* columns={[4 ,2,3,3]} */}
// <Container maxW="80rem" centerContent>
// <SimpleGrid >
//   {datalist.map(function (data) {
//     const { id,title,img, price,safelogo,dis1,dis2,} = data;
//     return (
//       <Card
//         key={id}
//         title={title}
//         price={price}
//         safelogo={safelogo}
//         dis1={dis1}
//         dis2={dis2}
//         img={img}
        
        
//       />
//     );
//   })}
// </SimpleGrid>
// </Container>
// </Box>