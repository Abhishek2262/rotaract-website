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
            <h1 className=''>Hello</h1>
            
            
        </>
    )
}