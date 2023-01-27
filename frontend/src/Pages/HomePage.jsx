import React from "react";
import Description from "../Components/cards/dispcription";
import Carosel from "../Components/Carosel/Carosel";
import Footer from "../Components/Fotter/Fotter";
import ALLProductsBrands from "../Pages/ProductsBox"

const HomePage = () => {
  return (
    <div>
      <Carosel />
      <div>
        <ALLProductsBrands />
      </div>
       <div>
        <Description/>
       </div>
       <div>
        <Footer/>
       </div>
    </div>
  );
};

export default HomePage;
