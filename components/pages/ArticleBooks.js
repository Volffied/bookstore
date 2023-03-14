import React from 'react'

export default function ArticleBooks({author, title, content, img, price, discount, id}) {
    return (
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
            <div className="h-[400px] w-[280px] lg:h-[380px] lg:w-[350px] lg:self-start self-center">
                <img 
                    src={`../IMAGES/${img}`}
                    alt='book'
                    className="lg:h-[380px] lg:w-[350px] w-[280px] h-[400px]"
                />
            </div>
            <div className="flex flex-col justify-between w-11/12">
                <div>
                    <div className='flex items-start'>
                        <p className="text-sm uppercase font-medium">by {author}</p>
                    </div>
                    <div className="w-full lg:w-10/12 mt-4">
                        <p className='text-3xl leading-8 tracking-normal font-normal text-[#252525]'>{title}</p>
                    </div>
                    <div className="w-full lg:w-4/5 mt-4">
                        <p className='text-lg font-light text-[#252525]'>{content}</p>
                    </div>
                    <div className="mt-8 flex flex-row gap-3">
                        <p className="text-4xl font-medium">${price}</p>
                        {
                            (parseInt(discount) > 0 ) ? <p className="text-2xl font-medium line-through self-end text-gray-300">${discount}</p> : null
                        }
                    </div>
                </div>
                <div className="lg:mt-0 mt-8 flex lg:justify-start justify-end">
                    <button id={id} name={`btn-${id}`} className="w-1/3 lg:w-1/4 py-4 text-xl border-[#252525] border bg-transparent hover:bg-[#252525] hover:text-fourth text-secondary duration-500 transition-all ease-out">Shop now</button>
                </div>
            </div>
        </div>
    )
}
