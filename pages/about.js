import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image'

import { useEffect } from 'react';

export default function About()
{

     useEffect(() => {
        Aos.init()
      }, [])
      
    return(
        <>
            
            <div className='d1 bg-slate-400 text-black min-h-[19rem] p-10 border-1  '> 
            <h2 className='rtr1  text-center'>  Rotaract Club  </h2>

              <div className='d2 flex justify-evenly m-5 gap-8'>

                  <img className='im1  max-h-[15rem]' src='/rotaractFUllLogo.svg'></img>
                  <div className='d3  text-right bg-slate-300 min-h-[12rem] min-w-[10rem] justify-evenly text-clip text-center'> lorem30ug    ufweh   u g uiof weui ewukewku igfliewhfliewflieww leifliewfbi lewgfsd csgf d vow fewf ewlfhe fbur gfew guif gu o oufgewf u   fwekgfewgf ewuif owefiewiofgwegfwe foiewfew foegg 
                  </div>

              </div>
            
            
            </div>
            
            
            
        </>
    )
}