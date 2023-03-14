import React from 'react'
import styleFont from '../../styles/Font.module.css';

export default function Subscribe() {
    return (
        <>
            <div className="border-b-2 border"/>
            <div className="flex flex-col items-center py-14">
                <p className={styleFont.custom_font_bold + "  text-2xl md:text-3xl lg:text-4xl uppercase text-center"}>subscribe to get more</p>
                <div className='w-3/4 text-center mt-8'>
                <p className='text-xl font-normal'>Be virtually guided through interviews and video tutorials with women that have already done it (and done it well). The perks, discounts and events are the icing on the cake.</p>
                </div>
                <div className='mt-12 flex flex-col md:flex-row justify-center gap-4'>
                <button className="text-xl font-normal py-3 px-12 bg-[#252525] border border-transparent text-white rounded-sm transition-all duration-500 ease-out hover:border-[#252525] hover:bg-transparent hover:text-[#252525]">Learn more</button>
                <button className="text-xl font-normal py-3 px-12 bg-[#252525] border border-transparent text-white rounded-sm transition-all duration-500 ease-out hover:border-[#252525] hover:bg-transparent hover:text-[#252525]">Buy now for $10.99 (Monthly)</button>
                </div>
            </div>
            <div className="border-b-2 border"/>
        </>
    )
}
