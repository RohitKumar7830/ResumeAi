import React, { useEffect, useState } from 'react';
import Card from './Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Page2() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/list.json')
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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
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
        
        <div className="md:p-4 md:mt-1 mt-32">
            <div className='flex justify-between px-4'>
                <h1 className="md:text-4xl text-2xl font-bold mb-4">
                     Discover Our Array of Services
                </h1>
                <button className= ' hidden md:block bg-blue-600 text-white px-4 py-0 h-14 md:px-8 md:py-1 border-white border-2'>Services</button>
            </div>
            <div className=" md:p-20   gap-4">
                <Slider {...settings}>
                    {items.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </Slider>
            </div>
            <button className='mt-10 mx-32 block md:hidden bg-blue-600 text-white px-4 py-0 h-14 md:px-8 md:py-1 border-white border-2'>Services</button>
        </div>
    );
}

export default Page2;
