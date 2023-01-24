import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';

import 'aos/dist/aos.css';
import Aos from 'aos';

import { useEffect } from 'react';


export default function Home() {
  
  useEffect(() => {
    Aos.init()
  }, [])
  

  return (  
    <>
       <div  className='skewedpic flex justify-evenly shadow-lg  min-h-[25rem] -mx-8 clip'>
        
        <div>  <Image src="/holi2.jpeg" height={700} width={1300} className="shadow-2xl" quality={100} alt="Hero Text"></Image>
        </div> 
        </div>
        <div className='bg-blue-200 min-h-[20rem] text-center rounded-sm'> <p  className='font-sas italic'>Wlecome teh world of Rotatract</p></div>
        <div className='  flex flex-nowrap m-0 gap-12'>
          <div><Image src="/child.jpg" height={600} width={900} ClassName="child" ></Image></div>
          <div className=' bg-slate-100   min-h-[8rem]  '><p className='text-center font-sans italic'> "Poor children in Baltimore face even worse odds than low-income kids elsewhere, mostly because they remain in impoverished neighborhoods."</p> </div> 
        </div>
        <div className='bg-blue-200 min-h-[20rem] text-center rounded-sm'> <p  className='font-sas italic'>Donation</p></div>
        <div className='flex flex-nowrap gap-12' >
          <div className='min-h-[10rem]'><Image src="/donate.jpg" height={500} width={700}></Image></div>
          <div className='min-h-[5rem]'>“Giving does not only precede receiving; it is the reason for it. It is in giving that we receive.</div>

        </div>
        
    </>
  )
}
