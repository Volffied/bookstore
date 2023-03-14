import React from 'react'
import Layout from '../../components/Layout'
import styleFont from '../../styles/Font.module.css'; 
import {HeaderSubtitle, BookNews, HeaderMenus, Subscribe, ArticleBooks} from '../../components/generalPage';
import SwiperCustom from '../../components/General/Swiper';
import {LimitText, ParseHtml} from '../../utils/hook';
import {useRouter} from 'next/router';
import Link from 'next/link';

export default function Books() {
    const router = useRouter();
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
        <Layout title={"Books"}>
            <div className='flex flex-wrap mt-6 mb-24'>
                <p className={styleFont.custom_font_bold + ' text-7xl'}>Books</p>
            </div>
            <HeaderSubtitle subtitle={"bestsellers of the month"}/>
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
            <HeaderMenus>
                <Link href={"/books"} className={(router.pathname == "/books" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>View All</p>
                </Link>
                <Link href={"/selfeducation"} className={(router.pathname == "/selfeducation" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Education</p>
                </Link>
                <Link href={"/psyhology"} className={(router.pathname == "/psyhology" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Psyhology</p>
                </Link>
                <Link href={"/business"} className={(router.pathname == "/business" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Business</p>
                </Link>
                <Link href={"/novel"} className={(router.pathname == "/novel" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Novel</p>
                </Link>
                <Link href={"/art"} className={(router.pathname == "/art" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Art</p>
                </Link>
            </HeaderMenus>
            <div className="flex flex-col mt-14 w-full h-full">
                <ArticleBooks
                    author={"elen jhosh"}
                    title={"Be Where Your Feet Are: Seven Principles to Keep You Present, Grounded, and Thriving"}
                    content={<LimitText 
                        text={"When we're at 115 MPH, we rarely see the wall coming. But it comes for all of us. The sudden loss of a much beloved friend, the excruciatingly long departure of a parent with Alzheimer's. We grasp for lessons, for meaning, for learnings"}
                        limit={10}
                    />}
                    price={"25.00"}
                    discount={"33.30"}
                    img={"book-5.jpg"}
                />
                <ArticleBooks
                    author={"kayleen schaefer"}
                    title={"But You're Still So Young: How Thirtysomethings Are Redefining Adulthood"}
                    content={<LimitText 
                        text={`"What you haven't done by 30 you're not likely to do," John Updike had the nerve to write in his 1971 novel, Rabbit Redux, making a mookery of the idea of moving one's 20s and into the decade when everything is supposed to magically fall into place`}
                        limit={10}
                    />}
                    price={"19.50"}
                    discount={"0"}
                    img={"book-4.jpg"}
                />
                <ArticleBooks
                    author={"alexander nemerov"}
                    title={"Fierce Poise: Helen Frankenthaler and 1950s New York"}
                    content={<LimitText 
                        text={`Neither conventional biography nor arm's length critical appraisal, Alexander Nemerov's Fierce Poice shines a light on Helen Frankenthaler's early artistic breakthrough by blending both forms. Eleven specific and crucial days--from May 19`}
                        limit={10}
                    />}
                    price={"22.35"}
                    discount={"26.30"}
                    img={"book-3.jpg"}
                />
                <ArticleBooks
                    author={"dawne walton"}
                    title={"The Final Revival of Opal and Nev"}
                    content={<LimitText 
                        text={`If there were a genre for popular postmodern literature. The Final Revival of Opal and Nev would fall squarely within it. Easy to read, and yet layered in both its organization and its impact, Dawnie Walton's novel tells the story of '70s musicians Opal and Nev and is alternatingly structured as an oral history and recurring ediotrs'notes`}
                        limit={40}
                    />}
                    price={"10.70"}
                    discount={"19.30"}
                    img={"book-2.jpg"}
                />
            </div>
            <div className="flex flex-wrap w-full my-14">
                <button className='border-2 border-[#252525] py-3 flex w-full bg-transparent hover:bg-[#252525] transition-all duration-500 ease-out text-[#252525] hover:text-white'>
                    <p className="text-center w-full text-xl font-normal">Show more</p>
                </button>
            </div>
            <Subscribe/>
        </Layout>
    )
}
