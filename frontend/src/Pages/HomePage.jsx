import React from "react";
import Carosel from "../Components/Carosel/Carosel";

import ALLProductsBrands from "./ProductsBox";

const HomePage = () => {
  return (
    <div>
      {/* <Carousel/> */}
      <Carosel />

      <div>
        <ALLProductsBrands />
      </div>
    </div>
  );
};

export default HomePage;
