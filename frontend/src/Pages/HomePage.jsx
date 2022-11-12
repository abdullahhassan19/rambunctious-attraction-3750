import React from "react";
import Description from "../Components/cards/dispcription";
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
       <div>
        <Description/>
       </div>
    </div>
  );
};

export default HomePage;
