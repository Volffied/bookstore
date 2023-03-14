import React from 'react'
import Layout from '@/components/Layout';
import {Subscribe, HeaderSubtitle, CardNews} from '../../components/generalPage';
import SwiperCustom from '@/components/General/Swiper';

export default function SearchBlog() {
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
    <Layout title={"Blog"}>
        <div className="flex flex-col lg:flex-row mt-10 gap-5 lg:gap-12">
            <div className="flex lg:hidden justify-between">
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
            <div className="mt-6 lg:hidden block"><p className="text-5xl lg:text-6xl font-normal">The Definitive Helmut Newton Photobook Is Reissued&#x23AF;&#x23AF;for His 100th Birthday</p></div>
            <div className="lg:h-[710px] xl:h-[700px] lg:w-[770px] w-full flex flex-col">
                <img 
                    src='https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                    className='h-[640px] w-full object-cover'
                />
                <p className="w-11/12 text-sm text-gray-300 mt-3">Rue Aubriot, Yves Saint Laurent, Vogue Paris, Paris 1975. &#169; The Helmut Newton Estate / Maconochie Photography</p>
            </div>
            <div className="flex flex-col justify-between w-full lg:w-[800px]">
                <div className="lg:block hidden">
                    <div className="flex justify-between">
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
                    <div className="mt-6"><p className="text-5xl md:text-6xl font-normal">The Definitive Helmut Newton Photobook Is Reissued&#x23AF;&#x23AF;for His 100th Birthday</p></div>
                </div>
                <div>
                    <p className="font-normal text-lg mt-5">
                        It's an interesting moment to rerelease SUMO (1999), the 464-page Helmut Newton monograph that weighed 35kg and came with a specially designed Philippe
                        Starck stand. To meet the current moment, it has been redesigned: now called BABY SUMO, it's half the size and relatively speaking. It's reasonably priced at $1,500.
                        (The Signed first-edition of SUMO became the most expensive book of the 20th century when it sold at auction in Berlin for 620,000DM in 2000, approximately $370K today.)
                    </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-14 px-0 lg:px-14">
            <div className="flex flex-col items-center justify-center lg:justify-start mt-8 md:mt-0 w-full md:w-2/5 lg:w-1/3 h-auto lg:h-[120px] md:border-r 2xl:border-r md:border-r-gray-300">
                <div className="w-full md:w-3/4 md:pt-0 pt-8 flex justify-end items-end lg:h-2/5">
                    <p className="font-normal text-xl">Share this article</p>
                </div>
                <div className="flex flex-row mt-3 justify-end gap-6 w-full md:w-3/4">
                    <button>
                        <img 
                            src='../IMAGES/google.svg'
                            className='md:w-12 md:h-12 w-9 h-9 lg:w-10 lg:h-10 rounded-md'
                        />
                    </button>
                    <button>
                        <img 
                            src='../IMAGES/facebook.svg'
                            className='lg:w-10 lg:h-10 md:w-12 md:h-12 w-9 h-9 rounded-md'
                        />
                    </button>
                    <button>
                        <img 
                            src='../IMAGES/linkein.svg'
                            className='lg:w-10 lg:h-10 md:w-12 md:h-12 w-9 h-9 rounded-md'
                        />
                    </button>
                    <button>
                        <img 
                            src='../IMAGES/twitter.svg'
                            className='lg:w-10 lg:h-10 md:w-12 md:h-12 w-9 h-9 rounded-md'
                        />
                    </button>
                    <button>
                        <img 
                            src='../IMAGES/dribbble.svg'
                            className='lg:w-10 lg:h-10 md:w-12 md:h-12 w-9 h-9 rounded-md'
                        />
                    </button>
                </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-4/5 pl-0 md:pl-9 lg:pl-12">
                <p className="font-normal text-lg">
                    In 2020, Newton's legacy enduresm with Vogue Italia's October issue dedicated to his artistic impact on the eve of what would have been his
                    dedicated to his artistic impact on the eve of what would have been his 100th birthday, The photographer, whose provocative work rose to 
                    prominence in the 1970s against a backdrop of the second-wave feminist movement, was one of the most impactful visual creators of his time. 
                    His images defined the way women were portrayed in fashion editorials and advertisements.
                </p>
            </div>
        </div>
        <div className="mt-12 w-full flex justify-end">
            <div className="w-full lg:w-4/6 lg:pr-12 pr-0 pl-0 lg:pl-4">
                <p className="text-5xl md:text-4xl font-medium">A controversial pioneer</p>
                <p className='pr-10 mt-6 font-normal text-lg'>
                    The son of a Jewish button manufacturer, Newton was born in Berlin in 1920. His privileged childhood
                    was spent being dressed by his mother in taffeta bows and swimming at the berliner Schwimm Club.
                    It was here that he was drawn to the way fellow swimmers' suits "stayed wet for a long time", 
                    something he revisited in his work, such as Daryl Hannah's 1984 photograph where, dressed in 
                    clear Perspex stilettos and a fuchsia one-piece, she bounces a crying baby on her knee.
                </p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-14 gap-5 lg:gap-12">
            <div className="h-[700px] w-full lg:w-[770px] flex flex-col">
                <img 
                    src='https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    className='h-[640px] w-full object-cover'
                />
                <p className="text-sm text-gray-300 mt-3">Daryl Hannah, Fashion, Amercian Vogue, Los Angeles, 1984, &#169; The Helmut Newton Estate / Maconochie Photography</p>
            </div>
            <div className="flex flex-col justify-between w-full lg:w-[800px]">
                <div>
                    <p className="font-normal text-lg">
                        Fleeing Nazi persecution in 1938, Newton travelled to 
                        Singapore and later Australia, where he met his wife and 
                        creative collaborator June Newton, who has edited the 
                        new release of SUMO. Newton set himself the goal of
                        photographing for Vogue (his first contract was with 
                        British Vogue in 1956 and after that Australian Vogue), 
                        but is wasn't until the mid 1960s that he began to focus
                        seriously on fashion editorials. The 1967 image of model 
                        Willy Van Rooy is an early example of narrative storytelling
                        within the fashion shoot. Titled "How to Make The Fur Fly,"
                        Van Rooy hurtles towards the camera as she flees a small
                        airplane coming from behind, a series inspired by the
                        famous scene in Alfred Hitchcock's 1959 film North by 
                        Northwest.
                    </p>
                </div>
                <div>
                    <p className="font-normal text-lg mt-5">
                        It is his fetishistic depiction of women that has left a 
                        lasting impression. Often presenting women in varying
                        states of undress, these images may appear at first glance 
                        simply shocking or provocative, the woman objectified.
                        However, these photographs are more complex; they play
                        with ideas of human desire, lust, gender and power.
                        Images such as "Sie Kommen", which appeared in 1981
                        Vogue Paris, where the primary intention is to present
                        stylish clothing, subverting the function of the fashion 
                        photo. Instead, Newton's pictures made selling sex the norm, 
                        and offered unobtainable ideas of glamour. It is this legacy 
                        that has remained, where selling a fantasy is far more potent 
                        than selling the latest dress.
                    </p>
                </div>
            </div>
        </div>
        <div className="mt-0 lg:mt-12 w-full flex justify-end">
            <div className="w-full lg:w-4/6 pr-0 pl-0 lg:pr-12 lg:pl-4">
                <p className='pr-0 lg:pr-10 mt-6 font-normal text-lg'>
                    It did sell, and it was his intention to provoke. In an 1975 image titled ‘Rue
                    Aubriot’, the model appears fully dressed, wearing an Yves Saint Laurent
                    ‘Le Smoking’ tuxedo. The Paris backdrop is Newtonian in grainy black and
                    white, an effect the photographer described as “black light.” Playing with
                    gender identity, in the mid-1970s women rarely wore trouser suits, the
                    bright street lights in the image allude to what has just happened or is
                    about to happen — it is our imagination that makes it successful. Another
                    from this series gives further clues: the androgynous suited female is
                    flanked by a naked woman wearing only heels and a veil. The perceived
                    electricity between the two creates a sexual charge, erotic perhaps — it
                    depends on who is viewing it.
                </p>
            </div>
        </div>
        <div className="mt-10 lg:mt-28 w-full flex justify-end">
            <div className="w-full lg:w-4/6 pr-0 pl-0 lg:pr-12 lg:pl-4">
                <p className="text-5xl md:text-4xl font-medium">Provocative and influential</p>
                <p className='pr-0 lg:pr-10 mt-6 font-normal text-lg'>
                    Newton said, I love women. There is nothing I love more.” He remarked that
                    he wanted to present his women as strong and powerful. However, he has
                    been called misogynistic, most memorably to his face by writer, activist
                    and philosopher Susan Sontag. The clip from French TV features in a new
                    documentary called Helmut Newton: The Bad and the Beautiful (2020).
                </p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-14 mb-14 lg:mb-24 gap-5 lg:gap-12">
            <div className="h-[400px] w-full lg:w-[770px] flex flex-col">
                <img 
                    src='https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    className='h-[340px] w-full object-cover'
                />
                <p className="text-sm text-gray-300 mt-3">Helmut Newton checks a printing sheet during Frankfurt Boor Fair, 1999. The print features model Nadja wearing Dolce & Gabbana for American Vogue, Monte Carlo, 1995</p>
            </div>
            <div className="flex flex-col justify-between w-full lg:w-[800px]">
                <div>
                    <p className="font-normal text-lg">
                        Amid #MeToo, his images are more complicated to
                        translate. Today we talk about positionality, the social and
                        political context that creates your identity. Newton was a
                        heterosexual cisgender white male, working during an era
                        when it would not have been the mainstream view to
                        acknowledge that his photography might have been
                        symbolic of a patriarchal society. The pictures were
                        enjoyed for their titllating fantasies, alluding to sexually
                        charged power tussles between prey and predator, which
                        he imagined and constructed. It is also important to
                        recognize the autonomous eroticism of his leading female
                        stars. Grace Jones says in the trailer for the
                        aforementioned documentary, "He was a little bit pervert,
                        but so am I!"
                    </p>
                </div>
            </div>
        </div>
        <HeaderSubtitle subtitle={"Read more"}/>
        <div className='mb-32 mt-4'>
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
        <Subscribe/>
    </Layout>
  )
}
