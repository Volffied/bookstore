import React from 'react'
import DetailNews from './DetailNews'

export default function CardNews({button, img, date, time, author, title}) {
    return (
        <>
            <div className='relative pt-3'>
                <img className='bg-contain h-72 w-full bg-no-repeat' src={img}/>
                <button className={(button ? "absolute": "hidden") + " flex items-center rounded-full bg-slate-100 opacity-50 group-hover:opacity-100 px-1 py-1 transition-all ease-out duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"/></svg>
                </button>
            </div>
            <div>
                <div className="flex justify-between mt-2">
                    <DetailNews date={date} time={time} author={author}/>
                </div>
                <div className="mt-2 pb-3">
                    <p className="text-3xl leading-8 tracking-normal font-normal">{title}</p>
                </div>
            </div>
        </>
    )
}
