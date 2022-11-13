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
  const [data, setData] = useState([])
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch('http://localhost:8080/medicine')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data)
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

  return (
    <div className={style.leftCart}>
      <h4>Items NOT Requiring Prescription {data.length}</h4>

      <div className={style.cartItemMainF}>
        {
          data.map((val) => {
            return <div className={style.cartItemMainF1}>
              <div className={style.cartItemMainFF}>
                <div className={style.cartItemMainFFLeft}>{val.description}</div>
                <div className={style.cartItemMainFFRight}>
                  <div>{val.price * qty}</div>
                  <div className={style.cartItemMainFFRightPrice}>{val.priceOff * qty}</div>
                </div>
              </div>

              <div className={style.cartItemMainFS}>
                <div className={style.cartItemMainFS1}>
                  <div><AiOutlineDelete /></div>
                  <div>Remove</div>
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
            data.map((val) => {
              return <div className={style.cartItemMainSM}>
                <div className={style.cartItemMainSM1}><img src={val.image} alt="" /></div>
                <div className={style.cartItemMainSM2}><p>{val.description}</p></div>
                <div className={style.cartItemMainS3}>{val.rating}</div>
                <div className={style.cartItemMainSM4}>{val.priceOff * qty}</div>
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
