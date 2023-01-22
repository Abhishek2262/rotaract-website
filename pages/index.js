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
        <div className=' bg-red-600 min-h-[30rem] max-w-[90rem]'> HI </div>

        
    </>
  )
}
