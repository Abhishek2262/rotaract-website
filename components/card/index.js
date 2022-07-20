import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Card({name, post, img = "/"}) 
{
    useEffect(() => {
        Aos.init()
      }, [])
      
    return(
        <>
            <div className='card-1 min-h-[15rem] rounded-md bg-purple-400 w-[12rem]  gap-8 drop-shadow-xl  flex flex-col place-content-center place-items-center'  data-aos="fade-up">
                <div className='rounded-full h-20 w-20 bg-slate-300 relative flex '><Image src={img} layout="fill" alt="DP"></Image></div> 
                <div>
                <h4 className='p1 text-sm text-center'>{post}</h4>
                <h5 className=" text-sm text-center">{name}</h5>
                </div>
            </div>
        </>
    )
}
