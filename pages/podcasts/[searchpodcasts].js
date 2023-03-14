import React from 'react'
import Layout from '../../components/Layout';
import {Subscribe, HeaderSubtitle, CardNews} from '../../components/generalPage';
import SwiperCustom from '../../components/General/Swiper';

export default function podcasts() {
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
            <div className="flex flex-col lg:flex-row mt-10 gap-8 xl:gap-10">
                <div className="w-full lg:w-[500px] h-[346px] xl:h-[300px]">
                    <div className="flex lg:hidden lg:mb-0 mb-4 justify-between">
                        <div className='flex items-center gap-1'>
                            <p>&#x23AF;&#x23AF;</p>
                            <p className="text-sm uppercase font-medium">by elen jhosh</p>
                        </div>
                        <div className='gap-3 text-gray-300 flex'>
                            <p className='text-base font-light'>Feb 11</p>
                            <p className='text-base font-extrabold'>&#183;</p>
                            <p className='text-base font-light'>5 min read</p>
                        </div>
                    </div>
                    <img 
                        src='https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                        className='object-cover h-[346px] xl:h-[300px] w-full'
                    />
                </div>
                <div className="w-full lg:w-[850px]">
                    <div className="hidden lg:flex justify-between">
                        <div className='flex items-center gap-1'>
                            <p>&#x23AF;&#x23AF;</p>
                            <p className="text-sm uppercase font-medium">by elen jhosh</p>
                        </div>
                        <div className='gap-3 text-gray-300 flex'>
                            <p className='text-base font-light'>Feb 11</p>
                            <p className='text-base font-extrabold'>&#183;</p>
                            <p className='text-base font-light'>5 min read</p>
                        </div>
                    </div>
                    <div className="mt-6 block"><p className="text-4xl md:text-5xl xl:text-6xl font-normal">The Definitive Helmut Newton Photobook Is Reissued&#x23AF;&#x23AF;for His 100th Birthday</p></div>
                </div>
            </div>
            <div className="w-full flex flex-col border-[#252525] border mt-14 rounded-sm h-[200px]">
                <div className="flex flex-row items-center justify-between px-5 lg:px-20 pt-5">
                    <div className="flex items-center gap-5">
                        <div>
                            <button className="py-2 px-2 rounded-full border border-[#252525]">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="30" 
                                    height="30" 
                                    viewBox="0 0 24 24">
                                        <g transform="translate(24 0) scale(-1 1)">
                                            <path fill="currentColor" d="M4.788 17.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z"/>
                                        </g>
                                </svg>
                            </button>
                        </div>
                        <button className="py-2 px-2 rounded-full border border-[#252525]">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="50" 
                                height="50" 
                                viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888q.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85Z"/>
                            </svg>
                        </button>
                        <div>
                            <button className="py-2 px-2 rounded-full border border-[#252525]">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="30" 
                                    height="30" 
                                    viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M4.788 17.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z"/>
                                </svg>
                            </button>
                        </div>
                        <div className="flex gap-5">
                            <button className="py-2 px-2 rounded-full border border-[#252525]">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M7 7h10v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79a.5.5 0 0 0-.85.36V5H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7zm10 10H7v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.36V19h11c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v3zm-4-2.75V9.81c0-.45-.36-.81-.81-.81a.74.74 0 0 0-.36.09l-1.49.74a.61.61 0 0 0-.34.55c0 .34.28.62.62.62h.88v3.25c0 .41.34.75.75.75s.75-.34.75-.75z"/>
                                </svg>
                            </button>
                            <button className="py-2 px-2 rounded-full border border-[#252525]">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="22" 
                                    height="22" 
                                    viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 20l3-3m0 0l-3-3m3 3h-4a5 5 0 0 1-5-5a5 5 0 0 0-5-5H3m15-3l3 3m0 0l-3 3m3-3h-4a4.978 4.978 0 0 0-3 1M3 17h4a4.978 4.978 0 0 0 3-1"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="py-2 px-2 rounded-full border border-[#252525]">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="22" 
                                height="22" 
                                viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 15.575q-.2 0-.375-.063q-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.712-.288q.438-.012.713.263L11 12.15V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v7.15l1.875-1.875q.275-.275.713-.263q.437.013.712.288q.275.275.275.7q0 .425-.275.7l-3.6 3.6q-.15.15-.325.212q-.175.063-.375.063ZM6 20q-.825 0-1.412-.587Q4 18.825 4 18v-2q0-.425.287-.713Q4.575 15 5 15t.713.287Q6 15.575 6 16v2h12v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2q0 .825-.587 1.413Q18.825 20 18 20Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col mt-8 px-5 lg:px-20">
                    <div className='h-1 bg-gray-300 relative flex flex-row items-center'>
                        <div className="bg-[#252525] w-[300px] h-1 z-40"/>
                        <div className="h-2 w-2 rounded-full bg-[#252525] z-50"/>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm text-[#252525]">6:03</p>
                        <p className="text-sm text-gray-300">12:22</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row mt-12 mb-24 ">
                <div className="w-full lg:w-[500px] lg:sticky top-20 flex flex-col border-r border-r-gray-300 items-end lg:items-center justify-end lg:justify-center xl:justify-start mt-8 lg:mt-8 h-auto lg:h-[120px]">
                    <div className="w-full md:w-3/4 md:pt-0 pt-8 flex justify-end items-end lg:h-2/5">
                        <p className="font-normal text-xl">Share this article</p>
                    </div>
                    <div className="flex flex-row mt-3 justify-end gap-6 w-full md:w-3/4">
                        <button>
                            <img 
                                src='../IMAGES/google.svg'
                                className='lg:w-10 lg:h-10 md:w-10 md:h-10 w-9 h-9 rounded-md'
                            />
                        </button>
                        <button>
                            <img 
                                src='../IMAGES/facebook.svg'
                                className='lg:w-10 lg:h-10 md:w-10 md:h-10 w-9 h-9 rounded-md'
                            />
                        </button>
                        <button>
                            <img 
                                src='../IMAGES/linkein.svg'
                                className='lg:w-10 lg:h-10 md:w-10 md:h-10 w-9 h-9 rounded-md'
                            />
                        </button>
                        <button>
                            <img 
                                src='../IMAGES/twitter.svg'
                                className='lg:w-10 lg:h-10 md:w-10 md:h-10 w-9 h-9 rounded-md'
                            />
                        </button>
                        <button>
                            <img 
                                src='../IMAGES/dribbble.svg'
                                className='lg:w-10 lg:h-10 md:w-10 md:h-10 w-9 h-9 rounded-md'
                            />
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-[850px] pl-0 lg:pl-8 xl:pl-14">
                    <p className="font-normal text-lg">
                        Before | settled in to watch Oprah's Sunday-night interview with the Duke and
                        Duchess of Sussex three nights ago, | had intended to write a story about her
                        subjects’ style choices for the interview. Straddling the ocean as | have the past year,
                        haf the time at home in Manhattan, half the time in the English countryside, | have
                        found myself torn between two very different readings of this extraordinary couple
                        in America, a version of Meghan Markle as a self-actualized style maven with a
                        female-empowerment platform who seemed to have brought her unhappy prince
                        and his demons to a happy place. In Britain, a sense that she was a wil, shrewish
                        ‘manipulator (‘Hurricane Meghan) who snared her well-meaning but unwary prince;
                        was dazzled by the idea of the job but discovered too late its dreary restrictive
                        realities and its focus on blindly unquestioning obedience and embrace of duty; and
                        Stole him away 10 a distant land of self-love, self-realization, and humbug. To be
                        perfectly frank, | was somewhat ambivalent myself: The relentless onslaught of the
                        British tabloid press is dificult to resist, try as one might. Its a juggernaut.
                    </p>
                    <p className="font-normal text-lg mt-8">
                        Solet's get the clothes and their messaging out of the way first: Prince Harry,
                        stripped now of his uniforms but embracing the Montecito lifestyle in dégagé
                        J.Crew; Meghan channeling the Duchess of Windsor in a pregnancy-appropriate
                        Giorgio Armani trple-silk-georgette dress with an abstract-print splosh that
                        ‘apparently represented lotus flowers (symbolizing “enlightenment, self-regeneration
                        and rebirth; as Town & Country assured me). She accented the dress with a tro of
                        ‘aquamarine teardrops from Pippa Small that she'd previously worn in Tonga during
                        the couple's 2018 tour—when she proved to be such a popular, telegenic whizz at the
                        job that the Institution (the palace administrative infrastructure —or was it the Firm,
                        the royal family and key courtiers and advisors?) apparently balked and the
                        problems began—and a diamond tennis bracelet that appeared to have been the one
                        that had belonged to her late mother-in-law, whose own star turn in the antipodes in
                        1983 similarly signaled the beginning of the end of her own very short-lived
                        honeymoon with the Firm and indeed her husband. (See The Crown, season three,
                        episode six, Terra Nulius.) Meghan, Duchess of Sussex, finished ital off with
                        fiendishly vertiginous Aquazzura stiletto heels that seemed ilsuited to the
                        ‘manicured lawns of the neighboring friends garden where the trio found themselves,
                        shaded by a verdant brick pergola from the glorious California light, but perhaps
                        were intended to suggest that the wearer was not to be tifled with. The Duchess of
                        Windsor, | was reminded, had the soles of her shoes polished in case they were.
                        revealed when she crossed her ankles.
                    </p>
                </div>
            </div>
            <HeaderSubtitle subtitle={"more related podcasts"}/>
            <div className='mb-24 mt-4'>
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
            <Subscribe/>
        </Layout>
    )
}
