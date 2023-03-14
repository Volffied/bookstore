import Layout from '@/components/layout'
import {LimitText, ParseHtml} from '../utils/hook';
import React, {useEffect, useState, useCallback} from 'react';
import SwiperCustom from '@/components/General/Swiper';
import {HeaderSubtitle, DetailNews, CardNews, BookNews, ArticleNews, Subscribe} from '../components/generalPage';

// https://www.behance.net/gallery/115730041/QStudio-Online-Magazine?tracking_source=search_projects%7Cnewspaper+website+magazine

export default function Home() {
  const [play, setplay] = useState(false);
  const [result, setResult] = useState('');

  const dataWidth = [
    'w-0',
    'w-1',
    'w-2',
    'w-3',
    'w-4',
    'w-5',
    'w-6',
    'w-7',
    'w-8',
    'w-9',
    'w-10',
    'w-11',
    'w-12',
    'w-14',
    'w-16',
    'w-20',
    'w-24',
    'w-28',
    'w-32',
    'w-36',
    'w-40',
    'w-44',
    'w-48',
    'w-52',
    'w-56',
    'w-60',
    'w-64',
    'w-72',
    'w-80',
    'w-96',
    'w-full',
  ]

  const adding = useCallback(() => {
    const index = Math.floor(Math.random() * dataWidth.length);
    setResult(dataWidth[index])
  },[])

  useEffect(() => {
      const interval = setInterval(adding, 3000);
      return () => clearInterval(interval);
  }, [adding])
  
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
    <Layout title={"Beranda"}>
      <div className='flex flex-wrap justify-between py-3'>
        {/* border-r border-gray-300  */}
        <div className='lg:pr-5 flex flex-col basis-full lg:basis-4/6'>
          <div className='flex flex-col border-b border-gray-300 pb-4'>
            <div className='flex'>
              <img
                src={"/IMAGES/img_1.jpg"}
                className="w-full"
                style={{height: "450px"}}
              />
            </div>
            <div className='flex flex-col justify-between'>
              <div className='flex justify-between pt-1'>
                <DetailNews author={"elen jhosh"} time={"5 min read"} date={"Feb 11"}/>
              </div>
              <div className="mt-4">
                <p className='text-3xl font-medium'>What Designers, Photographers, and Other Insiders Missed About Paris Fashion Week</p>
              </div>
              <div className='mt-3'>
                <p className='text-base font-light'>
                  If Paris Fashion Week in digital form has remained saturated with propositions and visions of the 
                  clothes we will be seeing-and perhaps wearing-in a few months, it's only natural to be feeling a 
                  certain wistfulness for the experience as it used to be not so long ago. 
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col pt-4'>
            <div className='flex gap-3 items-center'>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="30" 
                height="30" 
                viewBox="0 0 256 256">
                  <path 
                    fill="#1ED760" 
                    d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"/>
              </svg>
              <p className='text-xl font-medium'>Post Reports / Podcast</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <div className='flex'>
                <img src='./IMAGES/podcast.jfif' className='h-14 w-14 rounded-md' alt='error'/>
              </div>
              <div className='flex flex-col basis-3/4'>
                <p className='text-xl font-medium'>Jakarta Fashion Week Podcast Ep.7 with Major Minor</p>
                <p className='text-base font-light'>{
                  <LimitText 
                    text={`Sari Seputra dan Ari Seputra dari Major Minor menyadari bahwa "less is more" akan menjadi kebiasaan konsumen dalam memilih produk fashion. Cari tahu bagaimana cara Major Minor tumbuh dan seperti apa komitmen sustainability dari Major Minor di JFW Podcast bertema Growing with a Cause. Musik: Yopi Handi (YHV Records, @yhvrecords)`}
                    limit={170}/>
                  }
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center my-4 py-1">
                <button
                  onClick={() => setplay(!play)}
                  className="text-white mr-5 bg-black cursor-pointer py-1 px-1 rounded-lg border border-transparent hover:border-black hover:bg-transparent transition-all ease-out duration-500 hover:text-black">
                  {
                    (play) ? (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        viewBox="0 0 24 24">
                          <path 
                          fill="currentColor" 
                          d="M14 19V5h4v14Zm-8 0V5h4v14Z"/>
                      </svg>
                    ):(
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        viewBox="0 0 24 24">
                        <path 
                          fill="currentColor" 
                          d="M9.525 18.025q-.5.325-1.012.038T8 17.175V6.825q0-.6.513-.888t1.012.038l8.15 5.175q.45.3.45.85t-.45.85l-8.15 5.175Z"/>
                      </svg>
                    ) 
                  }
                </button>
                <div className="h-1.5 w-full bg-gray-200 relative rounded-full z-10">
                  <div className={(play ? result : 'w-0')+ " absolute h-1.5 bg-orange-500 rounded-full left-0"}></div>
                </div>
                <p className="text-base font-normal pl-5">36:54</p>
            </div>
          </div>
        </div>
        <div className='lg:mt-0 mt-4 lg:pl-5 basis-full lg:basis-2/6 gap-3 flex flex-col md:flex-row lg:flex-col'>
          <div className='flex flex-col'>
            <div className=''>
              <img src='/IMAGES/img_2.jpg' className='h-52 w-full' alt="error"/>
            </div>
            <div className='flex justify-between pt-1'>
              <DetailNews author={"elen jhosh"} time={"5 min read"} date={"Feb 11"}/>
            </div>
            <div>
              <p className='text-2xl font-medium mt-4'>
                What Happens When One Partner Is Vaccinated and the Other Isn't?
              </p>
            </div>
            <div>
              <p className='text-base font-light mt-3'>
                For the moment, many people are learning to balance
                happiness about their partner's vaccine eligibility with
                personal disappointment.
              </p>
            </div>
          </div>
          <div className='flex flex-col md:mt-0 mt-4'>
            <div>
              <img
                src={"/IMAGES/img_3.jpg"}
                className="w-full h-52 bg-cover"
              />
            </div>
            <div className='flex justify-between pt-1'>
              <DetailNews author={"elen jhosh"} time={"5 min read"} date={"Feb 11"}/>
            </div>
            <div>
              <p className='text-2xl font-medium mt-4'>
                What Happens When One Partner Is Vaccinated and the Other Isn't?
              </p>
            </div>
            <div>
              <p className='text-base font-light mt-3'>
                For the moment, many people are learning to balance
                happiness about their partner's vaccine eligibility with
                personal disappointment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <HeaderSubtitle subtitle={"Today's Trending"}/>
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
              button={false}
              img={"https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1236&q=80"}
              date={"Feb 11"}
              time={"5 min"}
              author={"by elen jhosh"}
              title={"In Deborah Roberts's Art, an Interrogation of What Society Imposes on Black Children"}
            />
          </div>
          <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
            <CardNews
              button={false}
              img={"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"}
              date={"Feb 11"}
              time={"5 min"}
              author={"by elen jhosh"}
              title={"Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long"}
            />
          </div>
          <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
            <CardNews
              button={false}
              img={"https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}
              date={"Feb 11"}
              time={"5 min"}
              author={"by elen jhosh"}
              title={"Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long"}
            />
          </div>
          <div className='flex flex-col justify-between w-auto h-auto px-2 shadow-sm bg-primary rounded-md group group-hover:shadow-md mx-2'>
            <CardNews
              button={false}
              img={"https://images.unsplash.com/photo-1535268244390-8b989b92d2bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
              date={"Feb 11"}
              time={"5 min"}
              author={"by elen jhosh"}
              title={"Spring Skirts Have Sprung - 6 Ways to Wear Them All Season Long"}
            />
          </div>
        </SwiperCustom>
      </div>
      <HeaderSubtitle subtitle={"The latest articles"}/>
      <div className='mt-24 flex flex-col'>
        <ArticleNews
          img={"https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"}
          author={"elen jhosh"}
          title={ParseHtml("The Definitive Helmut Newton Photobook Is Reissued&#x23AF;&#x23AF;in Miniature&#x23AF;&#x23AF;for His 100th Birthday")}
          content={ParseHtml("The photographer, whose provocative work rose to prominence in the 1930s against a backdrop of the second&#x23AF;wave feminist movement, was one of the most impactful visual creators of his time.")}
          date={"Feb 11"}
          video={false}
          time={"5 min read"}
        />
        <ArticleNews
          img={"https://images.unsplash.com/photo-1609396658070-4d9dd09a13bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hZGUlMjB5b3UlMjBsb29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
          author={"elen jhosh"}
          title={ParseHtml("Made You Look: A True Story About Fake Art&#x23AF;&#x23AF;When Wanting to Believe Is Just Not Enough")}
          content={"The story of the most significant art fraud in history where ruined reputations and wounded egos mattered more than money."}
          date={"Feb 11"}
          video={false}
          time={"5 min read"}
        />
        <ArticleNews
          img={"https://images.unsplash.com/photo-1473339478549-efdcad0e752c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"}
          author={"elen jhosh"}
          title={ParseHtml("5 Things White People Keep Getting Totally Wrong About Racism")}
          content={<LimitText 
          text="They want to escape the harsh, unforgiving glare of culpability by pretending they've done nothing wrong, that if there are ongoing issues with racism in this country, it has nothing to do with how they raise their children. It's because Black people refuse to move on."
          limit={30}/>}
          date={"Feb 11"}
          video={false}
          time={"5 min read"}
        />
        <ArticleNews
          img={"https://images.unsplash.com/photo-1613943951796-ff7b760d64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
          author={"elen jhosh"}
          title={ParseHtml(`In London, the Most Famous "Great Woman Artist" Finally Gets Her Due`)}
          content={<LimitText 
          text="In July 2018, London's National Gallery acquired a self-portrait by the Baroque artist Artemisia Gentileschi, featureing the painter in the guise of Saint Catherine of Alexandria. Almost immediately, it drew an unprecedented level of media attention."
          limit={30}/>}
          date={"Feb 11"}
          video={false}
          time={"5 min read"}
        />
      </div>
      <HeaderSubtitle subtitle={"bestsellers of the month"}/>
      <div className='mt-24 mb-12'>
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
      <HeaderSubtitle subtitle={"The latest podcasts"}/>
      <div className='mt-24 mb-12'>
        <ArticleNews
          img={"https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHdlZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}
          author={"elen jhosh"}
          title={ParseHtml("How are the boundaries between masculine and feminine being erased in fashion?")}
          content={ParseHtml("Today, you will not suprise anyone with pale pink shades of clothing in the men's department. Men in dresses appear on the red carpets, and big brands like Chanel are launching lines of men's makeup.")}
          date={"Feb 11"}
          video={true}
          time={"5 min read"}
        />
        <ArticleNews
          img={"https://images.unsplash.com/photo-1630419320857-7087d18ade31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FuZGhpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
          author={"elen jhosh"}
          title={ParseHtml("What is the essence of Gandhi's philosophy?")}
          content={ParseHtml("Ut si happens that a proper name becomes a household name. This happened with the name of Mahatma Gandhi. Neither before nor after him was there such a person who could so successfully combine philosophy and politics.")}
          date={"Feb 11"}
          video={true}
          time={"5 min read"}
        />
        <ArticleNews
          img={"https://images.unsplash.com/photo-1578926372062-6ddf6fc55e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
          author={"elen jhosh"}
          title={ParseHtml("What is the tragedy behind Vrubel's paintings?")}
          content={ParseHtml("The work of Mikhail Vrubel (1856-1910) became the quintessence of the era inwhich he lived&#x23AF;a turning point, full of contradictions and collisions.")}
          date={"Feb 11"}
          video={true}
          time={"5 min read"}
        />
      </div>
      
      <Subscribe/>
    </Layout>
  )
}
