import React from 'react'
import Layout from '../../components/Layout';
import styleFont from '../../styles/Font.module.css'; 
import {LimitText, ParseHtml} from '../../utils/hook';
import {HeaderSubtitle, CardNews, HeaderMenus, Subscribe, ArticleNews} from '../../components/generalPage';
import SwiperCustom from '../../components/General/Swiper';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Podcasts() {
    const router = useRouter();
    const responsiveSwiper = [
        {
          breakpoint: 1536,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
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
        <Layout title={"Podcasts"}>
            <div className='flex flex-wrap mt-6 mb-24'>
                <p className={styleFont.custom_font_bold + ' text-7xl'}>Podcasts</p>
            </div>
            <HeaderSubtitle subtitle={"THE LATEST PODCASTS"}/>
            <div className='mb-12 mt-4'>
                <SwiperCustom showCount={3} responsiveSettings={responsiveSwiper}>
                    <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
                        <CardNews
                            button={true}
                            img={"https://images.unsplash.com/photo-1473679408190-0693dd22fe6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                            date={"Feb 11"}
                            time={"12 min"}
                            author={"by elen jhosh"}
                            title={"A Brit in America Makes Sense of the Meghan Markle Oprah Interview"}
                        />
                    </div>
                    <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
                        <CardNews
                            button={true}
                            img={"https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80"}
                            date={"Feb 11"}
                            time={"5 min"}
                            author={"by elen jhosh"}
                            title={"In Deborah Roberts's Art, an Interrogation of What Society Imposes on Black Children"}
                        />
                    </div>
                    <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
                        <CardNews
                            button={true}
                            img={"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"}
                            date={"Feb 11"}
                            time={"5 min"}
                            author={"by elen jhosh"}
                            title={"Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long"}
                        />
                    </div>
                    <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
                        <CardNews
                            button={true}
                            img={"https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}
                            date={"Feb 11"}
                            time={"5 min"}
                            author={"by elen jhosh"}
                            title={"Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long"}
                        />
                    </div>
                    <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
                        <CardNews
                            button={true}
                            img={"https://images.unsplash.com/photo-1535268244390-8b989b92d2bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                            date={"Feb 11"}
                            time={"5 min"}
                            author={"by elen jhosh"}
                            title={"Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long"}
                        />
                    </div>
                </SwiperCustom>
            </div>
            <HeaderMenus>
                <Link href={"/podcast"} className={(router.pathname == "/podcast" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>View All</p>
                </Link>
                <Link href={"/news"} className={(router.pathname == "/news" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>News</p>
                </Link>
                <Link href={"/radio"} className={(router.pathname == "/radio" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Radio</p>
                </Link>
                <Link href={"/audioseries"} className={(router.pathname == "/audioseries" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Audioseries</p>
                </Link>
                <Link href={"/audiobook"} className={(router.pathname == "/audiobook" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Audiobook</p>
                </Link>
                <Link href={"/live"} className={(router.pathname == "/live" ? "underline decoration-wavy text-secondary border-secondary":"hover:underline hover:decoration-secondary decoration-wavy") + " py-1 underline-offset-4 text-base transition-all ease-in-out duration-500 text-center"}>
                    <p className={styleFont.custom_font_light + " text-xl"}>Live</p>
                </Link>
            </HeaderMenus>
            <div className='mt-24 mb-12'>
                <ArticleNews
                    img={"https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHdlZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
                    author={"elen jhosh"}
                    title={ParseHtml("The Definitive Helmut Newton Photobook Is Reissued&#x23AF;&#x23AF;in Miniature&#x23AF;&#x23AF;for His 100th Birthday")}
                    content={ParseHtml("The photographer, whose provocative work rose to prominence in the 1970s against a backdrop of the second&#x23AF;wave feminist movement, was one of the most impactful visual creators of his time.")}
                    date={"Feb 11"}
                    video={true}
                    time={"5 min read"}
                />
                <ArticleNews
                    img={"https://images.unsplash.com/photo-1630419320857-7087d18ade31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FuZGhpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    author={"elen jhosh"}
                    title={ParseHtml("Made You Look: A True Story About Fake Art&#x23AF;&#x23AF;When Wanting to Believe Is Just Not Enough")}
                    content={ParseHtml("The story of the most significant art fraud in history where ruined reputations and wounded egos mattered more than money.")}
                    date={"Feb 11"}
                    video={true}
                    time={"5 min read"}
                />
                <ArticleNews
                    img={"https://images.unsplash.com/photo-1578926372062-6ddf6fc55e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
                    author={"elen jhosh"}
                    title={ParseHtml("5 Things White People Keep Getting Totally Wrong About Racism")}
                    content={<LimitText 
                        text="They want to escape the harsh, unforgiving glare of culpability by pretending they're done nothing wrong, that if there are ongoing issues with racism in this country, it has nothing to do with how they raise their children. It's because Black people refuse to move on."
                        limit={30}/>}
                    date={"Feb 11"}
                    video={true}
                    time={"5 min read"}
                />
                <ArticleNews
                    img={"https://images.unsplash.com/photo-1620239159556-ba7de0075a01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                    author={"elen jhosh"}
                    title={ParseHtml("How are the boundaries between masculine and feminine being crased in fashion?")}
                    content={ParseHtml("Today, you will not surprise anyone with pale pink shades of clothing in the men's department. Men in dresses appear on the red carpets, and big brands like Chanel are launching lines of men's makeup.")}
                    date={"Feb 11"}
                    video={true}
                    time={"5 min read"}
                />
                <ArticleNews
                    img={"https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"}
                    author={"elen jhosh"}
                    title={ParseHtml("What is the essence of Gandhi's philosophy?")}
                    content={ParseHtml("It so happens that a proper name becomes a household name. This happened with the name of Mahatma Gandhi. Neither before nor after him was there such a person who could so successfully combine philosophy and politics.")}
                    date={"Feb 11"}
                    video={true}
                    time={"5 min read"}
                />
                <ArticleNews
                    img={"https://images.unsplash.com/photo-1582561424760-0321d75e81fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80"}
                    author={"elen jhosh"}
                    title={ParseHtml("What is the tragedy behind Vrubel's paintings?")}
                    content={ParseHtml("The work of Mikhail Vrubel (1856-1910) became the quintessence of the era in which he lived&#x23AF;a turning point, full of contradictions and collisions.")}
                    date={"Feb 11"}
                    video={true}
                    time={"5 min read"}
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
