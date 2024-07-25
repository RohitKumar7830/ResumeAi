import React from 'react'
import ResumeCard from './ResumeCard'
import { useState,useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='md:top-[40%] md:right-[65%] top-[20%] right-[3%]'
      style={{ position: 'absolute', zIndex: 2, cursor: 'pointer',  borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    >
      ▶
    </div>
  );
}

// Simplified Custom Previous Arrow component
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='md:top-[40%] md:left-[4%] top-[20%] left-[3%] '
      style={{ position: 'absolute', zIndex: 2, cursor: 'pointer',  borderRadius: '50%', padding: '10px' }}
      onClick={onClick}
    >
      ◀
    </div>
  );
}

function Page3() {
  const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data.items))
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div>
      <div className='justify-center items-center'>
        <h1 className='text-black font-bold text-xl px-3 mt-4 md:px-96 md:text-4xl'>Why use SmartML Labs Resume AI?</h1>
      </div>
      <div>
        <Slider {...settings}>
          {items.map(item => (
            <ResumeCard key={item.id} item={item} />
          ))}
        </Slider>
        
      </div>
    </div>
  )
}

export default Page3