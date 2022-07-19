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
       <div className='flex justify-evenly'>
          <Image src="/abstract pink.png" height={700} width={1200} className="shadow-2xl" quality={100} alt="Hero Text"></Image>
        </div>

        {/* <h2 className='text-center break-words text-6xl font-[gyahegi] no-underline leading-loose'>The Rotaract Club of BIT Mesra</h2> */}
        <h1 data-aos="fade-up" className='text-center'>The Rotaract Club of BIT Mesra</h1>
        
        <div className='leading-relaxed'>

          <h2>Where are we</h2>
          <div data-aos="fade-up">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh...
          </div>

          <h2>Who are we</h2>          
          <div className='flex justify-center'>
            <ul className='w-[70%]' data-aos="fade-up">
              
              <li>◉ VSCode - God or Bot?</li>
              <li>◉ Adobe XD - use this for creating UI designs</li>
              <li>◉ Slack - for communication and what not</li>
              <li>◉ Discord - engaging with the dev community on Discord is fun!</li>

            </ul>
          </div>
    
          <h2>Why are we</h2>
          <div data-aos="fade-up">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>

        </div>
    </>
  )
}
