import React, { useState } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeaderMenus({children}) {
    const router = useRouter();
    const [slider, setSlider] = useState(null);
    const next = () => {
        slider.slickNext();
    };
    
    const previous = () => {
        slider.slickPrev();
    };
    const settings = {
        dots: false,
        speed: 500,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        swipeToSlide: true,
        responsive : [
            {
                breakpoint: 1536,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='py-3 border-t-2 border-b-2 my-6 items-center w-full relative'>
            <button className="button h-14 w-14 left-0 top-1/2 bottom-1/2 transform absolute -translate-y-1/2 opacity-50 hover:opacity-100 z-50 2xl:hidden" onClick={previous}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="50" 
                    height="50" 
                    viewBox="0 0 24 24">
                    <path fill="currentColor" d="m12.3 15.3l-2.6-2.6q-.15-.15-.225-.325T9.4 12q0-.2.075-.375T9.7 11.3l2.6-2.6q.475-.475 1.088-.212t.612.937v5.15q0 .675-.613.938T12.3 15.3Z"/>
                </svg>
            </button>
            <button className="button h-14 w-14 right-0 top-1/2 bottom-1/2 transform absolute -translate-y-1/2 opacity-50 hover:opacity-100 z-50 2xl:hidden" onClick={next}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="50" 
                    height="50" 
                    viewBox="0 0 24 24">
                    <path fill="currentColor" d="M11.7 15.3q-.475.475-1.087.213T10 14.575v-5.15q0-.675.613-.938T11.7 8.7l2.6 2.6q.15.15.225.325T14.6 12q0 .2-.075.375t-.225.325l-2.6 2.6Z"/>
                </svg>
            </button>
            <Slider ref={setSlider} {...settings}>
                {children}
            </Slider> 
        </div>
    )
}
