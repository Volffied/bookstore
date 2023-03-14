import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SwiperCustom({children, showCount, responsiveSettings}) {
    const [slider, setSlider] = useState(null);

    const next = () => {
        slider.slickNext();
    };
    
    const previous = () => {
        slider.slickPrev();
    };

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: showCount,
        slidesToScroll: showCount,
        initialSlide: 0,
        swipeToSlide: true,
        responsive : responsiveSettings
    };
    return (
        <>
            <div className="flex flex-row justify-between">
                <button className="button h-14 w-14" onClick={previous}>
                    <img src="../IMAGES/arrow_left.svg" alt="error"/>
                </button>
                <button className="button h-14 w-14" onClick={next}>
                    <img src="../IMAGES/arrow_right.svg" alt="error"/>
                </button>
            </div>
            <Slider ref={setSlider} {...settings}>
                {children}
            </Slider>   
        </>
    );
  }
