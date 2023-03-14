import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function footer() {
    return (
        <div className="">
            <div className="container flex flex-wrap md:flex-row justify-between py-24">
                <div className="flex flex-col w-full md:w-1/2">
                    <p className={'capitalize font-normal text-xl'}>Send Me News</p>
                    <div class="flex flex-row border-b-2 border-[#2525254a] hover:border-[#252525] focus:border-[#252525] mt-8">
                        <input 
                            type="text"
                            placeholder='Enter your email'
                            class="input-with-icon w-3/4 focus:border-transparent outline-none px-2 leading-8 text-base bg-transparent" 
                            id="form-name"/>
                        <button className='w-2/6 sm:w-1/4 text-center'>
                            <p className='uppercase text-base font-medium leading-8'>get insights</p>
                        </button>
                    </div>  	
                </div>
                <div className="flex flex-col text-left md:text-right mt-10 md:mt-0 w-1/2 md:w-auto">
                    <p className={'capitalize font-normal text-xl'}>content</p>
                    <div className="flex flex-col gap-1 mt-4">
                        <Link href='/'><p className='text-base'>Blog</p></Link>
                        <Link href='/'><p className='text-base'>Podcasts</p></Link>
                        <Link href='/'><p className='text-base'>Books</p></Link>
                        <Link href='/'><p className='text-base'>Subscription</p></Link>
                    </div>
                </div>
                <div className="flex flex-col text-left md:text-right mt-10 md:mt-0 w-1/2 md:w-auto">
                    <p className={'capitalize font-normal text-xl'}>company</p>
                    <div className="flex flex-col gap-1 mt-4">
                        <Link href='/'><p className='text-base'>About</p></Link>
                        <Link href='/'><p className='text-base'>Contact us</p></Link>
                        <Link href='/'><p className='text-base'>Partnership</p></Link>
                        <Link href='/'><p className='text-base'>Careers</p></Link>
                    </div>
                </div>
                <div className="flex flex-col text-left md:text-right mt-10 md:mt-0 w-1/2 md:w-auto">
                    <p className={'capitalize font-normal text-xl'}>social</p>
                    <div className="flex flex-col gap-1 mt-4">
                        <Link href='/'><p className='text-base'>Instagram</p></Link>
                        <Link href='/'><p className='text-base'>Facebook</p></Link>
                        <Link href='/'><p className='text-base'>Linkedin</p></Link>
                        <Link href='/'><p className='text-base'>Youtube</p></Link>
                    </div>
                </div>
            </div>
            <div className='container flex flex-col lg:flex-row justify-between items-start sm:items-center pb-20'>
                <div className='flex'>
                    <Link href="/">
                        <Image src={"../IMAGES/logo.svg"} height={100} width={100}/>
                    </Link>
                </div>
                <div className='flex flex-wrap lg:flex-row gap-10 text-[#252525] mt-6 lg:mt-0'>
                    <p>&#169; 2021 Q Studio by Samuel Wijaya</p>
                    <p>All rights reserved</p>
                    <p>Privacy</p>
                    <p>Contact</p>
                </div>
            </div>
        </div>
    )
}
