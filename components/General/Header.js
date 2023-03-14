import React, {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useScrollPosition } from '@/utils/hook';

export default function Header() {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const scrollPosition = useScrollPosition();
    
    return (
        <>
            <div className={(scrollPosition > 0 ? 'sticky top-0 bg-fourth shadow-md' : 'bg-primary shadow-sm')+" z-50"}>
                <div className='container transition-all ease-out duration-500'>
                    <div className='flex justify-between items-center py-2'>
                        <div>
                            <Link href="/">
                                <Image src={"../IMAGES/logo.svg"} height={100} width={100}/>
                            </Link>
                        </div>
                        <div className="lg:flex hidden">
                            <ul className='flex gap-8 justify-between'>
                                <li>
                                    <Link 
                                        href="/" 
                                        className={(router.pathname === "/" ? "underline decoration-wavy text-secondary border-x border-t border-secondary" : "hover:underline hover:decoration-secondary decoration-wavy") + ' py-1 px-2 underline-offset-4 text-base transition-all ease-in-out duration-500'}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/blog"
                                        className={(router.pathname === "/blog" ? "underline decoration-wavy text-secondary border-x border-t border-secondary" : "hover:underline hover:decoration-secondary decoration-wavy") + ' py-1 px-2 underline-offset-4 text-base transition-all ease-in-out duration-500'}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/podcasts"
                                        className={(router.pathname === "/podcasts" ? "underline decoration-wavy text-secondary border-x border-t border-secondary" : "hover:underline hover:decoration-secondary decoration-wavy") + ' py-1 px-2 underline-offset-4 text-base transition-all ease-in-out duration-500'}>
                                        Podcasts
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/books"
                                        className={(router.pathname === "/books" ? "underline decoration-wavy text-secondary border-x border-t border-secondary" : "hover:underline hover:decoration-secondary decoration-wavy") + ' py-1 px-2 underline-offset-4 text-base transition-all ease-in-out duration-500'}>
                                        Books
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link 
                                        href="/about"
                                        className={(router.pathname === "/about" ? "underline decoration-wavy text-secondary border-x border-t border-secondary" : "hover:underline hover:decoration-secondary decoration-wavy") + ' py-1 px-2 underline-offset-4 text-base transition-all ease-in-out duration-500'}>
                                        About
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className='lg:justify-between flex gap-4'>
                            <div className='md:flex justify-between gap-4 hidden'>
                                <button>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        viewBox="0 0 256 256">
                                            <path 
                                                fill="currentColor" 
                                                d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2Zm176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2Zm-42-90a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0Z"/>
                                    </svg>
                                </button>
                                <button>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        viewBox="0 0 256 256">
                                            <path 
                                                fill="currentColor" 
                                                d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14ZM94 120a34 34 0 1 1 34 34a34.1 34.1 0 0 1-34-34Zm-28.2 90a65.9 65.9 0 0 1 124.4 0Zm144.2-2a2 2 0 0 1-2 2h-5.2a78.5 78.5 0 0 0-25.8-38.7a77.5 77.5 0 0 0-23.5-13a46 46 0 1 0-51 0a77.5 77.5 0 0 0-23.5 13A78.5 78.5 0 0 0 53.2 210H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className='lg:hidden flex'>
                                <button
                                    onClick={() => setShowMenu(!showMenu)}
                                    className='outline-none duration-700 ease-in-out transform transition'>
                                    {
                                        (showMenu) ? (
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="30" 
                                                height="30" 
                                                viewBox="0 0 24 24">
                                                    <path 
                                                        fill="currentColor" 
                                                        d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21L3 16.74m9-3.33l4.74 4.75l1.42-1.42L13.41 12l4.75-4.74l-1.42-1.42L12 10.59L7.26 5.84L5.84 7.26L10.59 12l-4.75 4.74l1.42 1.42L12 13.41Z"/>
                                            </svg>
                                        ) : (
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                width="30" 
                                                height="30" 
                                                viewBox="0 0 24 24">
                                                    <path 
                                                        fill="currentColor" 
                                                        d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"/>
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className={(showMenu ? "translate-x-0 " : "-translate-x-72 ")+ 'shadow-md fixed flex flex-col bg-fourth w-72 py-4 px-3 h-auto lg:hidden transition transform ease-out duration-500 z-50'}>
                <div className='flex py-3 items-center'>
                    <Link 
                        href="/"
                        className={(router.pathname === '/' ? "underline decoration-wavy text-secondary" : "")+ " group py-1 px-2 w-full text-4xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                        <p className='group-hover:text-secondary group-hover:font-bold'>Home</p>
                        <div className='hidden group-hover:flex'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="30" 
                                height="30" 
                                viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>
                                        <path d="M10 12h4v4h-4z"/>
                                    </g>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='flex py-3 items-center'>
                    <Link 
                        href="/blog"
                        className={(router.pathname === '/blog' ? "underline decoration-wavy text-secondary" : "")+ " group py-1 px-2 w-full text-4xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                        <p className='group-hover:text-secondary group-hover:font-bold'>Blog</p>
                        <div className='hidden group-hover:block'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="30" 
                                height="30" 
                                viewBox="0 0 24 24">
                                    <path 
                                        fill="currentColor" 
                                        d="M19 5v14H5V5h14m2-2H3v18h18V3m-4 14H7v-1h10v1m0-2H7v-1h10v1m0-3H7V7h10v5Z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='flex py-3 items-center'>
                    <Link 
                        href="/podcasts"
                        className={(router.pathname === '/podcasts' ? "underline decoration-wavy text-secondary" : "")+ " group py-1 px-2 w-full text-4xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                        <p className='group-hover:text-secondary group-hover:font-bold'>Podcasts</p>
                        <div className='hidden group-hover:block'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="30" 
                                height="30" 
                                viewBox="0 0 24 24">
                                    <path 
                                        fill="currentColor" 
                                        d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29c-2.204-.051-4.251.736-5.816 2.256A7.933 7.933 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306a5.977 5.977 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2z"/>
                                        <path fill="currentColor" d="M7 12h2v8H7zm8 0h2v8h-2z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='flex py-3 items-center'>
                    <Link 
                        href="/books"
                        className={(router.pathname === '/books' ? "underline decoration-wavy text-secondary" : "")+ " group py-1 px-2 w-full text-4xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                        <p className='group-hover:text-secondary group-hover:font-bold'>Books</p>
                        <div className='hidden group-hover:block'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="30" 
                                height="30" 
                                viewBox="0 0 26 26">
                                    <path 
                                        fill="currentColor" 
                                        d="M9.875 0a1 1 0 0 0-.406.156S8.204.952 6.844 1.813c-1.36.86-2.873 1.808-3.219 2a1 1 0 0 0-.063.03C2.306 4.618 2.045 5.884 2 6.594c-.003.033 0 .06 0 .095c-.011.266 0 .437 0 .437v13.063C2 22.087 4.213 23 6.313 23c.7 0 1.4-.113 2-.313c.4-.2.687-.6.687-1v-10.5c0-2.3.5-3.38 2-4.28c.4-.2 4.594-3.095 4.594-3.095c.2-.2.406-.606.406-.906v-.094c0-.4-.2-.706-.5-.906c-.3-.2-.7-.2-1 0c-.1.1-6.2 4.207-7.5 4.907c-1.3.8-2.513.993-2.813.593c-.093-.093-.174-.378-.187-.656v-.063c.001-.272.071-.784.625-1.125c.562-.313 1.957-1.204 3.313-2.062c.573-.363.644-.402 1.093-.688A1 1 0 0 0 11 2.5V1a1 1 0 0 0-1.125-1zm8 3.5a1 1 0 0 0-.438.188s-5.034 3.387-5.906 3.968a1 1 0 0 0-.031.032c-.724.543-1.153 1.189-1.344 1.78A3.264 3.264 0 0 0 10 10.5v.313a1 1 0 0 0 0 .093V23c0 1.9 2.188 3 4.188 3c.9 0 1.712-.194 2.312-.594c1.2-.7 7-5.218 7-5.218c.3-.2.5-.482.5-.782v-13c0-.5-.194-.8-.594-1c-.3-.2-.793-.106-1.093.094c-1.6 1.2-5.907 4.588-6.907 5.188c-1.4.8-2.719 1-3.219.5c-.2-.2-.187-.388-.187-.688c.006-.172.025-.32.063-.438c.056-.174.17-.388.593-.718c.02-.016.01-.015.031-.031c.723-.483 2.934-1.99 4.376-2.97A1 1 0 0 0 19 6V4.5a1 1 0 0 0-1.125-1zM22 10.813v2l-5 3.874v-2l5-3.874z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='flex py-3 items-center'>
                    <Link 
                        href="/about"
                        className={(router.pathname === '/about' ? "underline decoration-wavy text-secondary" : "")+ " group py-1 px-2 w-full text-4xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                        <p className='group-hover:text-secondary group-hover:font-bold'>About</p> 
                        <div className='hidden group-hover:block'>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="30" 
                                height="30" 
                                viewBox="0 0 24 24">
                                    <path 
                                        fill="currentColor" 
                                        d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className='border-b-2 border-gray-200 py-6'/>
                <div className="grid grid-cols-2 py-4 gap-1 pt-4">
                    <div>
                        <Link 
                            href="/signin"
                            className={(router.pathname === '/signin' ? "underline decoration-wavy text-secondary" : "")+ " group py-2 px-2 w-full text-2xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                            <p className='group-hover:text-secondary group-hover:font-bold'>Sign in</p>
                            <div className='hidden group-hover:flex'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="30" 
                                    height="30" 
                                    viewBox="0 0 256 256">
                                        <path 
                                            fill="currentColor" 
                                            d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14ZM94 120a34 34 0 1 1 34 34a34.1 34.1 0 0 1-34-34Zm-28.2 90a65.9 65.9 0 0 1 124.4 0Zm144.2-2a2 2 0 0 1-2 2h-5.2a78.5 78.5 0 0 0-25.8-38.7a77.5 77.5 0 0 0-23.5-13a46 46 0 1 0-51 0a77.5 77.5 0 0 0-23.5 13A78.5 78.5 0 0 0 53.2 210H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"/>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link 
                            href="/store"
                            className={(router.pathname === '/store' ? "underline decoration-wavy text-secondary" : "")+ " group py-2 px-2 w-full text-2xl underline-offset-4 transition-all flex justify-between ease-in-out duration-500"}>
                            <p className='group-hover:text-secondary group-hover:font-bold'>Store</p>
                            <div className='hidden group-hover:flex'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="30" 
                                    height="30" 
                                    viewBox="0 0 256 256">
                                        <path 
                                            fill="currentColor" 
                                            d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2Zm176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2Zm-42-90a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0Z"/>
                                </svg>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            {/* mobile menu */}
        </>
    )
}
