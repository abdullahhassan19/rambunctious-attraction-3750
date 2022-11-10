import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "./styles.css";

const breakPoints = [
  { width:1 , itemsToShow: 1 , itemsToScroll: 1 },
  { width: 500, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1, itemsToScroll: 1  },
  { width: 1200, itemsToShow: 1  , itemsToScroll: 1 }
];
export class Carosel extends Component {
  state = {
    items: [
      {id: 1, title: "https://user-images.githubusercontent.com/101566430/201035617-258c9fdc-c2ff-4e56-8b78-b43e15c66192.png"},
     
      {id: 2, title: "https://onemg.gumlet.io/a_ignore,w_857,h_200,c_fit,q_auto,f_auto/86b117e9-a698-439d-9c65-559c848ce2c6.png"},
      {id: 3, title: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing_pages_2022/diabetes-awareness-week/Diabetes_Care_range_d.png"},
      {id: 4, title:"https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing_pages_2022/diabetes-awareness-week/Ayurveda_Diabetes_care_d.png"},
      {id: 5, title: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing_pages_2022/diabetes-awareness-week/Easy-Check-Diabetes_d.png"},
      {id: 6, title: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing_pages_2022/diabetes-awareness-week/Diabetes_Care_range_d.png" }
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakPoints}>
        {items.map(item => <div className='item' key={item.id}> <img   alt="" src={item.title} /></div>)}
      </Carousel>
    )
  }
}