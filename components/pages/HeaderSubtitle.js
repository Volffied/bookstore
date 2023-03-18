import React from 'react'
import styleFont from '../../styles/Font.module.css';
import Link from 'next/link';

export default function HeaderSubtitle({subtitle}) {
    return (
        <>
            <div className='py-3 border-t-2 border-b-2 flex justify-between my-6 items-center border-2 2xl:border-red-500 xl:border-blue-500 lg:border-lime-500 md:border-neutral-500 sm:border-yellow-500 border-orange-500'>
                <div>
                    <p className={styleFont.custom_font_bold + " text-2xl md:text-3xl uppercase text-[#252525]"}>{subtitle}</p>
                </div>
                <div className='group'>
                    <Link href={"/"} className="relative">
                        <p className="text-base hover:underline decoration-wavy underline-offset-4 italic lg:block hidden px-2 py-1 text-secondary transition-all duration-500 ease-out">View all</p>
                    </Link>
                    <Link href={"/"} className="lg:hidden block group-hover:text-fourth text-secondary transition-all duration-500 ease-out">
                        <p className='group-hover:bg-secondary px-2 py-1'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="22" 
                                height="22" 
                                viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M3 11V3h8v8H3Zm0 10v-8h8v8H3Zm10-10V3h8v8h-8Zm0 10v-8h8v8h-8Z"/>
                            </svg>
                        </p>
                    </Link>
                </div>
            </div>
        </>
    )
}
