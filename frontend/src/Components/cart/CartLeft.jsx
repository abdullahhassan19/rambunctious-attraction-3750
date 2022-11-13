import React, { useEffect, useState } from 'react';
import style from "../cart/CartLeft.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", border: "soild red" }}
      onClick={onClick}
    />
  );
}

const CartLeft = () => {
  const [data, setData] = useState([
    {
      "prodHighlights": "• Provides relief from vitamin B deficiencies\n• Helps in formation of red blood cells\n• Maintains healthy nervous system\n• Helps maintains energy levels",
      "longDesc": "• Tata 1mg Vitamin B Complex Capsules:\nTata 1mg Vitamin B complex is a health supplement which helps to provide relief from common vitamin B deficiencies such as fatigue, tiredness, low energy, numbness, burning sensation, etc. It contains vitamin B1, B2, B3, B5, B6, biotin (B7), folic acid, and B12, along with vitamin C and E as well. It helps in the formation of red blood cells and also promotes healthy cells, prevents cell damage, and maintains a healthy nervous system. This formula is categorised for energy, immune support, and relief from fatigue.\n\n• Key Ingredients:\nVitamin B1\nVitamin B2\nVitamin B3\nVitamin B5\nVitamin B6\nVitamin B12\nVitamin C\nVitamin E Biotin\nFolic Acid\n\n• Key Benefits:\nIt helps in energy production and thus helps maintains energy level\nIt prevents cells damage and maintains healthy cell levels\nIt also helps in the formation of red blood cells\nIt maintains a healthy nervous system and brain health\nIt helps reduce fatigue and tiredness\nIt helps to convert food into cellular energy\nIt is also essential for healthy hair and skin\n\n• Directions For Use:\nOne capsule daily or as suggested by the healthcare professional.\n\n• Safety Information:\nStore in a cool and dry place, away from sunlight and moisture\nKeep out of reach of children\nKeep the container tightly closed\nProduct shelf life is 18 months",
      "imageUrl": "https://onemg.gumlet.io/images/c_fit,h_150,w_150,q_auto,f_auto/ytfiioz7ny1alfg4eqey/musclexp-men-daily-vital-sports-tablet.jpg",
      "productName": "MuscleXP Men Daily Vital Sports Tablet",
      "shortDesc": "bottle of 60 tablets",
      "ratings": 3.3,
      "numberOfRatings": "10 ratings",
      "strikedPrice": 999,
      "price": 699,
      "discount": 3,
      "brand": "MuscleXP"
    }
  ])
  const [qty, setQty] = useState(1);

 
  // console.log(data)
  // console.log(data[0].name)

  const handleIncrement = () => {
    setQty(qty + 1)
  }


  const handleDecrement = () => {
    setQty(qty - 1)
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    const handleRemove = (id) => {
      let newdata=data.filter((el)=>{
        return  el._id != id
      }
      )
      localStorage.setItem("cartItems",JSON.stringify(newdata))
     
      setData(newdata)
    };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setData(items)
    console.log(items)
    console.log(items.length)
  }, []);

  return (
    <div className={style.leftCart}>
      <h4>Items NOT Requiring Prescription {data.length}</h4>

      <div className={style.cartItemMainF}>
        {
          data?.map((val,index) => {
            return <div className={style.cartItemMainF1}>

              <div className={style.cartItemMainFF}>

                <div className={style.cartItemMainFFLeft}>{val.productName}</div>
                <div className={style.cartItemMainFFRight}>
                  <div>{val.price * qty}</div>
                  <div className={style.cartItemMainFFRightPrice}>{val.strikedPrice * qty}</div>
                </div>
              </div>

              <div className={style.cartItemMainFS}>
                <div className={style.cartItemMainFS1}>
                  <div><AiOutlineDelete /></div>
                  <div><button onClick={()=>handleRemove(val._id)}>Remove</button></div>
                </div>
                <div className={style.cartItemMainFS2}>
                  <div><button onClick={handleIncrement}>+</button></div>
                  <div>{qty}</div>
                  <div><button onClick={handleDecrement}>-</button></div>
                </div>
              </div>
            </div>
          })
        }
      </div>

      <div className={style.cartItemMainS}>
        <Slider {...settings}>
          {
            data?.map((val) => {
              return <div className={style.cartItemMainSM}>
                <div className={style.cartItemMainSM1}><img src={val.imageUrl} alt="" /></div>
                <div className={style.cartItemMainSM2}><p>{val.productName}</p></div>
                <div className={style.cartItemMainS3}>{val.ratings}</div>
                <div className={style.cartItemMainSM4}>{val.strikedPrice * qty}</div>
                <div className={style.cartItemMainSM5}>
                  <div>{val.price * qty}</div>
                  <div className={style.cartItemMainSM5Button}>Add</div>
                </div>
              </div>
            })
          }
        </Slider>
      </div>

    </div>
  )
}

export default CartLeft
