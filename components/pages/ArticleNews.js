import React from 'react'

export default function ArticleNews({img, author, title, content, date, video, time}) {
    return (
        <div className="flex flex-col lg:flex-row gap-10 mb-12 z-40 border-2 2xl:border-red-500 xl:border-blue-500 lg:border-lime-500 md:border-neutral-500 sm:border-yellow-500 border-orange-500">
            <div className="h-auto relative group w--full sm:min-w-[400px]">
                <button className={(video ? "absolute": "hidden") + " flex items-center rounded-full bg-slate-100 opacity-50 group-hover:opacity-100 px-1 py-1 transition-all ease-out duration-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"/></svg>
                </button>
                <img 
                    src={img}
                    className='h-60 w-full shadow-md'
                />
            </div>
            <div className="flex flex-col">
                <div className="flex lg:justify-start justify-between gap-2 items-center">
                    <div className='gap-3 text-gray-300 flex lg:hidden'>
                        <p className='text-base font-light'>{date}</p>
                        <p className='text-base font-extrabold'>&#183;</p>
                        <p className='text-base font-light'>{time}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p>&#x23AF;&#x23AF;</p>
                        <p className="text-sm uppercase font-medium">by {author}</p>
                    </div>
                </div>
                <div className="w-10/12 mt-4">
                    <p className='text-3xl leading-8 tracking-normal font-normal text-[#252525]'>{title}</p>
                </div>
                <div className="mt-4">
                    <p className='text-lg font-light text-[#252525]'>{content}</p>
                </div>
                <div className='mt-6 gap-3 text-gray-300 hidden lg:flex'>
                    <p className='text-base font-light'>{date}</p>
                    <p className='text-base font-extrabold'>&#183;</p>
                    <p className='text-base font-light'>{time}</p>
                </div>
            </div>
        </div>
    )
}
