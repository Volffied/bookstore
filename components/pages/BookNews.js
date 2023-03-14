import React from 'react'

export default function BookNews({img, title, author, price}) {
    return (
        <>
            <div className='h-[535px] w-[286px] lg:w-[286px] xl:w-[285px] 2xl:w-[284px]'>
                <div className="h-auto w-[280px]">
                    <img src={`../IMAGES/${img}`} className="h-96 w-full" alt='error book'/>
                </div>
                <div className='mt-4 w-11/12'>
                    <p className='text-3xl leading-8 tracking-normal font-normal capitalize'>{title}</p>
                </div>
                <div className="mt-3 w-1/2">
                    <p className="text-sm uppercase font-normal text-[#252525] opacity-50">{author}</p>
                </div>
            </div>
            <div className="w-72 mt-4">
                <button className="flex w-full py-3 border-2 border-[#252525] justify-center bg-transparent hover:bg-[#252525] hover:text-white transition-all ease-out duration-500">
                    <p className='text-lg font-normal'>Buy for <span className='font-bold'>${price}</span></p>
                </button>
            </div>
        </>
    )
}
