import React from 'react'
import Layout from '@/components/Layout';
import {Subscribe, HeaderSubtitle, BookNews} from '../../components/generalPage';
import SwiperCustom from '@/components/General/Swiper';

export default function SearchBook() {
    const responsiveSwiperBook = [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
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
    return (
        <Layout title={"Book"}>
            <div className="flex flex-col xl:flex-row gap-5 xl:gap-12 pb-14 border-b border-[#252525]">
                <div className="h-[600px] w-[450px] lg:self-start self-center flex mt-10">
                    <img 
                        src='../IMAGES/book-1.jpg'
                        alt='book'
                        className="h-full w-full"
                    />
                </div>
                <div className="flex flex-col justify-between mt-5 xl:mt-10 w-full xl:w-[850px]">
                    <div>
                        <div><p className="text-5xl md:text-6xl font-normal">A Bright Ray of Darkness</p></div>
                        <div className="flex flex-row items-center gap-3 mt-8">
                            <span>&#x23AF;&#x23AF;&#x23AF;</span>
                            <p className="uppercase font-normal text-xl md:text-2xl">by ethan hawke</p>
                        </div>
                        <div className="flex flex-row items-end gap-4 mt-16">
                            <p className="text-3xl md:text-4xl font-semibold">$19.50</p>
                            <p className="text-xl md:text-2xl font-semibold text-gray-300 line-through">$21.40</p>
                        </div>
                        <div className="mt-6 w-full flex xl:justify-start justify-end">
                            <button className="text-base md:text-lg font-medium w-1/3 py-3 border border-[#252525] bg-transparent text-[#252525] hover:text-fourth hover:bg-[#252525] transition-all duration-500 ease-out">Shop now</button>
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className="text-3xl md:text-4xl font-normal xl:mt-0 mt-5">Description</p>
                        <p className="font-normal text-lg mt-5">
                            The blistering story of a young man making his Broadway debut in Henry IV just as his marriage implodes&#x23AF;an utterly transfixing book about art and love, fame and heartbreak from the acclaimed actor/writer/director. <br/>
                            Hawke's first novel in nearly twenty years is a bracing meditation on fame and celebrity, and the redemptive, healing power of art, a portrait of the ravages of disappointment and divorce, a poignant consideration of the rites of fatherhood and manhood; a novel soaked in rage and sex, longing and despair.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 py-14">
                <div className="w-full xl:w-[450px]">
                    <p className="text-3xl md:text-4xl font-normal">Product Details</p>
                    <div className="flex flex-col mt-6 gap-5">
                        <div className="flex flex-row gap-3">
                            <p className="font-normal text-base md:text-lg">Price:</p>
                            <div className="flex flex-row gap-4 items-end">
                                <p className="font-medium text-base md:text-lg">$19.50</p>
                                <p className="font-medium text-base md:text-base text-gray-300 line-through">$21.40</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="font-normal text-base md:text-lg">Publisher:</p>
                            <p className="font-medium text-base md:text-lg">Knopf Publishing Group</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="font-normal text-base md:text-lg">Publish Date:</p>
                            <p className="font-medium text-base md:text-lg">February 02, 2021</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="font-normal text-base md:text-lg">Pages:</p>
                            <p className="font-medium text-base md:text-lg">256</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="font-normal text-base md:text-lg">Languages:</p>
                            <p className="font-medium text-base md:text-lg">English</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <p className="font-normal text-base md:text-lg">Type:</p>
                            <p className="font-medium text-base md:text-lg">Hardcover</p>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[850px]'>
                    <p className="text-3xl md:text-4xl font-normal">About the Author</p>
                    <div className='w-full'>
                        <p className="font-normal text-base md:text-lg mt-5">
                            A four-time Academy Award nominee, twice for writing and twice for acting, ETHAN HAWKE has starred in the films Dead Poets Society, Reality Bites, Gattaca, and 
                            Training Day, as well as Richard Linklater's Before Sunrise trilogy and Boyhood. He is the author of Rules for a Knight, The Hottest State, and Ash Wednesday. He
                            lives in Brooklyn with his four children and his wife.
                        </p>
                    </div>
                </div>
            </div>
            <HeaderSubtitle subtitle={"more related books"}/>
            <div className='mt-24 mb-16'>
                <SwiperCustom showCount={4} responsiveSettings={responsiveSwiperBook}>
                    <div className='bg-primary flex flex-col justify-between rounded-md group group-hover:shadow-md sm:gap-2 mx-2 h-[620px]'>
                        <BookNews
                            img={"book-1.jpg"}
                            title={"Sapiens Grafis: Kelahiran Umat Manusia"}
                            author={"by halsey street"}
                            price={"14.99"}
                        />
                    </div>
                    <div className='bg-primary flex flex-col justify-between rounded-md group group-hover:shadow-md sm:gap-2 mx-2 h-[620px]'>
                        <BookNews
                            img={"book-2.jpg"}
                            title={"Antologi matahari"}
                            author={"by viet thanh nguyen"}
                            price={"10.39"}
                        />
                    </div>
                    <div className='bg-primary flex flex-col justify-between rounded-md group group-hover:shadow-md sm:gap-2 mx-2 h-[620px]'>
                        <BookNews
                            img={"book-3.jpg"}
                            title={"Tempat Paling Liar di Muka Bumi"}
                            author={"by julia cooke"}
                            price={"23.49"}
                        />
                    </div>
                    <div className='bg-primary flex flex-col justify-between rounded-md group group-hover:shadow-md sm:gap-2 mx-2 h-[620px]'>
                        <BookNews
                            img={"book-4.jpg"}
                            title={"This's Marketing SethGodin"}
                            author={"by kazuo ishiguro"}
                            price={"12.99"}
                        />
                    </div>
                    <div className='bg-primary flex flex-col justify-between rounded-md group group-hover:shadow-md sm:gap-2 mx-2 h-[620px]'>
                        <BookNews
                            img={"book-5.jpg"}
                            title={"Teach Like Finland"}
                            author={"by halsey street"}
                            price={"38.99"}
                        />
                    </div>
                </SwiperCustom>
            </div>
            <Subscribe/>
        </Layout>
    )
}
