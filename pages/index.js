import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Footer from '../components/footer/footer';
import 'aos/dist/aos.css';
import Aos from 'aos';

import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
    Aos.init()
  }, [])
  // <Image src="/holi2.jpeg" height={700} width={1300} className="shadow-2xl" quality={100} alt="Hero Text"></Image>

  return (  
    <>
       <div  className='hero-div'>
{/*         kewedpic flex justify-evenly shadow-lg  min-h-[25rem] -mx-8 clip 
        <div  className='hero-div'>  
        </div>  */}

        <div className="hero-left">
          <h4>WELCOME TO ROTARACT, BIT Mesra</h4>
          <h2>We believe in Uplifting personality, serving humanity</h2>
          <p style={{fontSize: '1.25rem', lineHeight: '1.25'}}>The work of rotaract begins inside the community with its own unique needs and concern. Though we server in countless ways, we've focussed our efforst to maximize our impact</p>
        </div>
        <div className="hero-right">

          <img src='/hero-mobile.png' style={{maxWidth: '30rem', marginTop: '3rem'}} alt='hero-image-right' />
        </div>


       
        </div>
        <div className='bg-blue-200 min-h-[20rem] text-center rounded-sm'> <p  className='font-sas italic'>Wlecome teh world of Rotatract</p></div>
        <div className='  flex flex-nowrap m-0 gap-12'>
          <div><Image src="/child.jpg" height={600} width={900} ClassName="child" ></Image></div>
          <div className=' bg-slate-100   min-h-[8rem]  '><div className='text-center m-10 p-5 font-sans italic'> "Poor children in Baltimore face even worse odds than low-income kids elsewhere, mostly because they remain in impoverished neighborhoods."</div> </div> 
        </div>
        <div className='bg-blue-200 min-h-[20rem] text-center rounded-sm'> <p  className='font-sas italic'>Donation</p></div>
        <div className='flex flex-nowrap gap-12' >
          <div className='min-h-[10rem]'><Image src="/donate.jpg" height={500} width={700}></Image></div>
          <div className='min-h-[5rem] '><div className='m-12 p-12 text-justify'>“Giving does not only precede receiving; it is the reason for it. It is in giving that we receive.</div></div>
        </div>

        <div className='gap-5 m-5 flex flex-wrap'>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>BIT album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>
          <div className='bg-red-300 min-h-[17rem] min-w-[25rem]'>Holi album</div>

        </div>
        <div className='bg-blue-200 min-h-[25rem] min-w-[9rem]'><h2 className='text-center font-serif'>FlagShip Event</h2></div>
        <Footer/>

        


        
    </>
    
  )
}
